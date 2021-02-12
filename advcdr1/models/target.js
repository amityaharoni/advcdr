'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Target extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Target.init({
    targetid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    idgauge: {
      type: DataTypes.INTEGER
    },
    targetstart: {
      type: DataTypes.INTEGER
    },
    targetend: {
      type: DataTypes.INTEGER
    },
    targetcolor: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'target',
    tableName: 'target'
  });
  return Target;
};