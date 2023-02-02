// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Agent extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//       Agent.hasMany(models.Match, {
//         foreignKey: 'agentId',
//       });
//     }
//   }
//   Agent.init({
//     name: DataTypes.STRING,
//     tag: DataTypes.INTEGER,
//   }, {
//     sequelize,
//     modelName: 'Agent',
//   });
//   return Agent;
// };


module.exports=(sequelize,DataTypes,Model)=>{
  class Player extends Model {}
  Player.init({
    // Model attributes are defined here
    name: DataTypes.STRING,
    tag: DataTypes.INTEGER,
  }, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Player' // We need to choose the model name
  });
  
  // the defined model is the class itself
  console.log(Player === sequelize.models.User);
  
};



