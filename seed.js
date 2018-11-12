const db = require('./model.js');


db.sync({ force: true }).then(() => {
  console.log('Database Synced!');
  db.close();
}).catch(function (err) {
    console.error(err.message);
    db.close();
})

