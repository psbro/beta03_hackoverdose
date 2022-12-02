const { Sequelize, DataTypes, QueryTypes, Model } = require('sequelize');
const sequelize= require('../config/db');
const bcrypt = require('bcrypt');

class Receiver extends Model {}

Receiver.init({
  receiverNo: {type: DataTypes.INTEGER,primaryKey: true, autoIncrement: true},
  quantity:{type: DataTypes.INTEGER,allowNull: false},
  userNo:{type: DataTypes.INTEGER,allowNull: false},
  name: {type: DataTypes.STRING(500),
          allowNull: false, 
          unique: true
   },
  type: {type: DataTypes.ENUM("Home_shelter","Ngo","Other"), defaultValue: "Other"},        

  location: {type: DataTypes.STRING(100),
             allowNull: false
          },

  timestampCreated: { type: DataTypes.BIGINT, defaultValue: Date.now},

  name: { type: DataTypes.STRING(100), 
          allowNull:false
          
         },  

  timestampExpiry: { type: DataTypes.BIGINT, defaultValue: Date.now},
  isVerify: {type: DataTypes.ENUM("Yes","No"), defaultValue: "NO"},        
  isReceived: {type: DataTypes.ENUM("Yes","No"), defaultValue: "NO"}       

},{ 
    
  sequelize, // We need to pass the connection instance
  timestamps: false, 
  tableName: 'receivers'
}); 

// Receiver.sync({ alter: true })
module.exports = Receiver;  