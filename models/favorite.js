module.exports = function(sequelize, DataTypes) {
  var Favorites = sequelize.define("Favorites", {
    AuthorId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    RecipeId: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  return Favorites;
};
