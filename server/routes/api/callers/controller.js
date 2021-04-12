const db = require("../../../models");
const Callers = require('../../../services/Callers');
const Caller = require('../../../services/Callers/Caller');

class CallersController {
    async getCallers(req, res, next) {
        let callers = await Callers.getCallers();

        res.json(callers);
    }

    async getCaller(req, res, next) {
        let caller = await Caller.getCaller(req.params.callerExt);
console.log(caller);
        res.json(caller);
    }
}

module.exports = CallersController;