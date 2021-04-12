const db = require('../../models');

class Callers {
    static async getCallers(startDate = '', endDate = '') {
        let callers = await db.caller.findAll();
        for (let i = 0; i < callers.length; i++) {
            let caller = callers[i];
            caller.dataValues.team = await caller.getTeam();
            // caller.dataValues.calls = await caller.getCalls();
        }

        return callers
    }
}

module.exports = Callers;