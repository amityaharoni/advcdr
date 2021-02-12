'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Team extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Team.hasMany(models.caller, { foreignKey: 'idteam' } )
    }
  };
  Team.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'teamid'
    },
    name: {
      type: DataTypes.STRING,
      field: 'teamname'
    },
    leader: {
      type: DataTypes.STRING,
      field: 'teamleader'
    },
    tlextension: {
      type: DataTypes.STRING
    },
    color: {
      type: DataTypes.STRING,
      field: 'teamcolor'
    }
  }, {
    sequelize,
    modelName: 'team',
    tableName: 'team'
  });
  return Team;
};