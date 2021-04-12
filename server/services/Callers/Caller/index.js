const db = require('../../../models');

class Callers {
    static async getCaller(callerExt) {
        const calls = await db.call.findAll({where: {
            cnum: callerExt
        }});
        let caller = {};
        let answeredAttempts = calls.filter(call => (call.disposition === "ANSWERED" && call.billsec >= 20));

        caller['extension'] = callerExt;
        caller['attempts'] = calls.length;
        caller['calledNumbers'] = new Set(calls.map(call => call.dst));
        caller['amountCalledNumbers'] = (new Set(calls.map(call => call.dst))).size;
        caller['answeredAttempts'] = answeredAttempts.length;
        caller['lt2min'] = getCallsShorterThanAmount(answeredAttempts, 2);
        caller['gt2min'] = getCallsLongerThanAmount(answeredAttempts, 2);
        caller['gt7min'] = getCallsLongerThanAmount(answeredAttempts, 7);
        caller['answeredRatio'] = caller['answeredAttempts']/caller['attempts'];
        caller['gt2minRatio'] = caller['gt2min']/caller['attempts'];
        caller['gt7minRatio'] = caller['gt7min']/caller['attempts'];
        caller['gt2minToGt7minRatio'] = caller['gt7min']/caller['gt2min'];
        caller['failedAttemptsRatio'] = (caller['attempts'] - caller['answeredAttempts'])/caller['attempts'];
        caller['totalCallsDuration'] = calls.reduce((acc, call) => acc + call.billsec, 0);

        return caller
    }
}

function getCallsLongerThanAmount(calls, min) {
    return calls.filter(answered => answered.billsec > min * 60).length;
}

function getCallsShorterThanAmount(calls, min) {
    return calls.filter(answered => answered.billsec <= min * 60).length;
}

module.exports = Callers;