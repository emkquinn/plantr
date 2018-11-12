const db = require('./model.js');

const status = db.sync({ force: true });
