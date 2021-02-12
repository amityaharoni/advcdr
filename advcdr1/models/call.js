'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Call extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Call.belongsTo(models.caller, { foreignKey: 'cnum', sourceKey: 'extension' })
    }
  };
  Call.init({
    calldate: {
      type: DataTypes.DATE, 
      allowNull: false
    },
    clid: {
      type: DataTypes.STRING, 
      allowNull: false
    },
    src: {
      type: DataTypes.INTEGER, 
      allowNull: false

    },
    dst: {
      type: DataTypes.INTEGER, 
      allowNull: false
    },
    dcontext: {
      type: DataTypes.STRING, 
      allowNull: false
    },
    channel: {
      type: DataTypes.STRING, 
      allowNull: false
    },
    dstchannel: {
      type: DataTypes.STRING, 
      allowNull: false
    },
    lastapp: {
      type: DataTypes.STRING, 
      allowNull: false
    },
    lastdata: {
      type: DataTypes.STRING, 
      allowNull: false
    },
    duration: {
      type: DataTypes.INTEGER, 
      allowNull: false
    },
    billsec: {
      type: DataTypes.INTEGER, 
      allowNull: false
    },
    disposition: {
      type: DataTypes.STRING, 
      allowNull: false
    },
    amaflags: {
      type: DataTypes.INTEGER, 
      allowNull: false
    },
    accountcode: {
      type: DataTypes.STRING, 
      allowNull: false
    },
    uniqueid: {
      type: DataTypes.STRING, 
      allowNull: false,
      primaryKey: true
    },
    userfield: {
      type: DataTypes.STRING, 
      allowNull: false
    },
    did: {
      type: DataTypes.STRING, 
      allowNull: false
    },
    recordingfile: {
      type: DataTypes.STRING, 
      allowNull: false
    },
    cnum: {
      type: DataTypes.STRING, 
      allowNull: false
    },
    cnam: {
      type: DataTypes.STRING, 
      allowNull: false
    },
    outbound_cnum: {
      type: DataTypes.STRING, 
      allowNull: false
    },
    outbound_cnam: {
      type: DataTypes.STRING, 
      allowNull: false
    },
    dst_cnam: {
      type: DataTypes.STRING, 
      allowNull: false
    },
    linkedid: {
      type: DataTypes.STRING, 
      allowNull: false
    },
    peeraccount: {
      type: DataTypes.STRING, 
      allowNull: false
    },
    sequence: {
      type: DataTypes.INTEGER, 
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'call',
    tableName: 'cdr'
  });
  return Call;
};