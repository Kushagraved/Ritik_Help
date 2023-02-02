const {Sequelize,Model,DataTypes} = require('sequelize');
const sequelize = new Sequelize('postgres', 'postgres', 'null', {
  host: 'localhost',
  dialect: 'postgres',
});
const db = {};


db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Player= require('./player')(sequelize,DataTypes,Model);
db.Match= require('./match')(sequelize,DataTypes,Model);

// console.log(db);
// db.Player.hasMany(db.Match, {
//   foreignKey: 'agentId',
// });
// db.Match.belongsTo(db.Player);

db.sequelize.sync({force: true});

module.exports = db;
