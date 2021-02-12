const db = require('./models/index');
const models = require('./models');
const Caller = require('./models/caller');
console.log(process.env.DB_USER);
console.log(models.caller);
// Find all users
Caller.findAll().then(callers => {console.log(callers);
    // callers.every(caller => {caller.CalledNumbers().then(res => console.log(res))}); // true
});
