module.exports = function(sequelize, DataTypes) {
  var Chef = sequelize.define("Chef", {
    // Giving the Chrf model a name of type STRING
    chefname: DataTypes.STRING
  });
  Chef.associate = function(models) {
    Chef.hasMany(models.Recipe, {
      onDelete: "cascade"
    });
  };

  return Chef;
};
