const {db, Gardener, Vegetable, Plot} = require('./model.js');


db.sync({force: true}).then(() => {
  console.log('Database Synced!');

Vegetable.bulkCreate([{
  name: 'Cucumber',
  color: 'green',
  planted_on: '2018-11-12 00:00:00'
},{
  name: 'Carrot',
  color: 'orange',
  planted_on: '2018-12-1 00:00:00'
}]).then(() => {
}).catch((err) => {
  console.error(err.message)
})
db.close();
}).catch(function (err) {
    console.error(err.message);
    db.close();
})
