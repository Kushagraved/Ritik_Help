// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Match extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//       Match.belongsTo(models.Agent);
//     }
//   }
//   Match.init({
//     agentId:{
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       references: {
//         model: 'Agent',
//         key: 'id',
//       }
//     },
//     agentPlayed: DataTypes.STRING,
//     gunKills: DataTypes.INTEGER,
//   }, {
//     sequelize,
//     modelName: 'Match',
//   });
//   return Match;
// };

// const { Sequelize, DataTypes, Model } = require('sequelize');
// const sequelize = new Sequelize('sqlite::memory:');

module.exports=(sequelize,DataTypes,Model)=>{
  class Match extends Model {}

  Match.init({
  // Model attributes are defined here
    agentId:DataTypes.INTEGER,
    agentPlayed: DataTypes.STRING,
    gunKills: DataTypes.INTEGER,
      
  }, {
  // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Match' // We need to choose the model name
  });

  // the defined model is the class itself
  console.log(Match === sequelize.models.User);

};
