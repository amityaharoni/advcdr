const db = require("../models");
const Caller = db.caller;
const Call=db.call;
const Op = db.Sequelize.Op;
const constants = require('../lib/config');

Caller.prototype.getAttempts = async function(query) {
    let conditions = this.initConditions(query);
    conditions.cnum = this.extension;

    return attempts = await Call.count({
      where: conditions.getConditions()
    });
}

Caller.prototype.getAnswered = async function(query) {
  let conditions = new Conditions(query);
  conditions.setCnum(this.extension);

  conditions.setDisposition('ANSWERED');
  if(query && query.billsec){
    conditions.setBillsec(query.billsec);
  }

  return answered = await Call.count({
    where: conditions.getConditions()
  });
};

Caller.prototype.TotalCallDuration = async function(query) {
  let conditions = new Conditions(query);
  conditions.setCnum(this.extension);

  return calls = await Call.sum('billsec', {where: conditions.getConditions()});
};

Caller.prototype.CalledNumbers = async function(query) {
  let conditions = new Conditions(query);
  conditions.setCnum(this.extension);
  if(query && query.billsec){
    conditions.setBillsec(query.billsec);
  }

  return calledNumbers = await Call.count({
    where: conditions.getConditions(),
    distinct: true,
    col: Call.dst
  });
};

class Conditions {
  constructor(query) {
    let startDate = '';
    let endDate = '';
    this.conditions = {};
    if(query){
      startDate = query.startDate? new Date(query.startDate) : (new Date(constants.DEFAULT_START_DATE)).setHours(0,0,0,0);
      endDate = query.endDate? new Date(query.endDate) : (new Date(constants.DEFAULT_END_DATE)).setHours(23,59,59,999);
    }
    else{
      startDate = new Date(constants.DEFAULT_START_DATE);
      endDate = new Date(constants.DEFAULT_END_DATE);
    }
  
    this.conditions.calldate = {
      [Op.between]: [startDate, endDate]
    };
  };

  getConditions(){
    console.log(this.conditions);
    return this.conditions;
  }

  setCnum(cnum){
    this.conditions.cnum = cnum;
  }

  setDisposition(disposition) {
    this.conditions.disposition = disposition;
    if(disposition === 'ANSWERED')
      this.setBillsec({
        gte: constants.ANSWERED_SECONDS
      })
  }

  setBillsec(query) {
    if(!this.conditions.billsec)
      this.conditions.billsec = {}
      if(query.gte){
      if(!this.conditions.billsec[Op.gte] || this.conditions.billsec[Op.gte] < query.gte)
         this.conditions.billsec[Op.gte] = query.gte
    }
    if(query.lt){
      if(this.conditions.billsec[Op.lt] && this.conditions.billsec[Op.lt] < query.lt)
      this.conditions.billsec[Op.lt] = query.lt
    }
  }

}

module.exports =  Caller;