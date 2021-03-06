module.exports = (sequelize, DataTypes) => {
  const Route = sequelize.define('Route', {
    name: DataTypes.STRING,
    originID: DataTypes.INTEGER,
    destinationID: DataTypes.INTEGER,
    busStops: DataTypes.ARRAY(DataTypes.INTEGER),
    routeData: DataTypes.JSON
  }, {});
  Route.associate = (models) => {
    Route.hasMany(models.busStops, {
      foreignKey: 'id',
      as: 'busStopId',
      onDelete: 'CASCADE'
    });
  };
  return Route;
};
