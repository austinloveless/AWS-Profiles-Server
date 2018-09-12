'use strict';
module.exports = (sequelize, DataTypes) => {
  const profile = sequelize.define('profile', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    interest: DataTypes.STRING,
    image: DataTypes.STRING,
    ssn: DataTypes.STRING,
    created_at: DataTypes.DATE
  }, {});
  profile.associate = function(models) {
    // associations can be defined here
  };
  return profile;
};