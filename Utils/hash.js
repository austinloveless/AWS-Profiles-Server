const bcrypt = require("bcrypt");
const saltRounds = 10;

function hashSSN(myPlaintextPassword) {
  return bcrypt.hashSync(myPlaintextPassword, saltRounds);
}

module.exports = {
  hashSSN
};
