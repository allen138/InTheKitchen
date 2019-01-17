module.exports = function(sequelize, DataTypes) {
  var Chefs = sequelize.define("Chefs", {
    // Giving the Chrf model a name of type STRING
    chefname: DataTypes.STRING
  });
  //wait for log in
  // Chef.associate = function(models) {
  //   Chef.hasMany(models.Recipe, {
  //     onDelete: "cascade"
  //   });
  // };

  return Chefs;
};
