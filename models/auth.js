module.exports = function(sequelize, DataTypes) {
  var Auths = sequelize.define("Auths", {
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
  Auths.associate = function(models) {
    Auths.hasMany(models.Recipes, {
      onDelete: "cascade"
    });
  };

  return Auths;
};

