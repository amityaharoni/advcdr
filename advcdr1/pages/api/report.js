import path from 'path'
const Caller = require(path.join(process.cwd(),'modules/caller'));

export default function handler(req, res) {
    let callers = Caller.findAll();

    // Get data from your database
    res.status(200).json(callers)
}