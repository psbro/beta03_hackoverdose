const Sequelize = require('sequelize')
//require('dotenv').config();

const sequelize = new Sequelize("versionbeta", "hackoverdose", "Deepakjain132@", {
    host: "versionbeta.mysql.database.azure.com",
    dialect: 'mysql',
    pool: {
      max: 100, 
      min: 0,
      acquire: 30000,
      idle: 10000
    }
});
console.log("Connected to DB") 
module.exports = sequelize;