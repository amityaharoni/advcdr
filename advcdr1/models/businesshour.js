'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BusinessHour extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  BusinessHour.init({
    bhoursid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    starttime: {
      type: DataTypes.TIME
    },
    endtime: {
      type: DataTypes.TIME
    },
    isbreak: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'businesshours',
  });
  return BusinessHour;
};