class CallersController {
    async getCallers(req, res, next) {
        const id = req.query.id;
        const callers = require('./mockCallers');
        console.log(id)
        res.json(callers.filter(c => c.id == id));
        // let callers = await db.caller.findAll();
        // for(let i=0; i < callers.length; i++){
        //     let caller = callers[i];
        //     caller.dataValues.team = await caller.getTeam();
        //     caller.dataValues.calls = await caller.getCalls();
        // }

        // res.json(callers);
    }
}

module.exports = CallersController;