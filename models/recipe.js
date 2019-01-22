module.exports = function(sequelize, DataTypes) {
  var Recipes = sequelize.define("Recipes", {
    cuisine: {
      type: DataTypes.STRING,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 140]
      }
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    desc: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    }
  });
  //wait for login
  Recipes.associate = function(models) {
    Recipes.belongsTo(models.Auths, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Recipes;
};
