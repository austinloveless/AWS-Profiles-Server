require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 7000;
const bodyParser = require("body-parser");
const cors = require("cors");
const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");
const db = require("./models");
const ssnUtils = require("./Utils/hash");

app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

//aws config
const s3 = new aws.S3({
  apiVersion: "2006-03-01",
  region: "us-east-2",
  credentials: {
    secretAccessKey: process.env.AWS_SECRET_KEY,
    accessKeyId: process.env.AWS_ACCESS_KEY
  }
});

const upload = multer({
  storage: multerS3({
    s3,
    bucket: process.env.AWS_BUCKET,
    key: (request, file, next) => {
      next(null, `files/${Date.now()}_${file.originalname}`);
    }
  })
});

app.get("/api/profile", (req, res) => {
  db.profile.findAll({}).then(profiles => {
    res.json({ profiles });
  });
});

app.post("/api/profile", (req, res) => {
  const profile = req.body.profiles.profile;
  profile.ssn = ssnUtils.hashSSN(profile.ssn);
  db.profile
    .create(profile)
    .then(newProfile => {
      res.json(newProfile);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

app.post("/api/profile/profileImage", upload.single("image"), (req, res) => {
  res.status(200).json(req.file);
});

app.get("/api/profile/:id", (req, res) => {
  const id = req.params.id;
  db.profile
    .find({
      where: { id: id }
    })
    .then(profile => {
      res.json(profile);
    });
});

app.put("/api/profile/:id", (req, res) => {
  const data = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    interest: req.body.interest,
    age: req.body.age,
    ssn: ssnUtils.hashSSN(req.body.ssn),
    image: req.body.image
  };
  const id = req.params.id;
  db.profile
    .find({
      where: { id: id }
    })
    .then(profile => {
      profile.updateAttributes(data);
    })
    .then(profile => {
      res.json({ profile: profile });
    });
});

app.delete("/api/profile/:id", (req, res) => {
  const id = req.params.id;
  db.profile
    .destroy({
      where: { id: id }
    })
    .then(deletedProfile => {
      res.json(deletedProfile);
    });
});

db.sequelize.sync().then(function() {
  app.listen(port, () => {
    console.log("listening on port", port);
  });
});
