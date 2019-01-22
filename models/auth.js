module.exports = function(sequelize, DataTypes) {
  var Auth = sequelize.define("Auth", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 240]
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 240]
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 240]
      }
    },
    avatar: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 240]
      }
    },
    googleId: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  return Auth;
};
