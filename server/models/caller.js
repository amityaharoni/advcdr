'use strict';
const {
  Model
} = require('sequelize');
const constants = require('../lib/config');
module.exports = (sequelize, DataTypes) => {
  class Caller extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Caller.belongsTo(models.team, { foreignKey: { field: 'idteam' } });
      Caller.hasMany(models.call, { foreignKey: 'cnum', sourceKey: 'extension' })
    }
  };
  Caller.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'staffid'
    },
    handle: {
      type: DataTypes.STRING,
      field: 'staffhandle'
    },
    name: {
      type: DataTypes.STRING,
      field: 'staffname'
    },
    extension: {
      type: DataTypes.STRING,
      field: 'staffextension'
    },
    attempts: {
      type: DataTypes.VIRTUAL,
      get() {
        return this.getCalls();
      }
    }
  }, {
    sequelize,
    modelName: 'caller',
    tableName: 'staff'
  });

  return Caller;
};