const { Sequelize, DataTypes, QueryTypes, Model } = require('sequelize');
const sequelize= require('../config/db');
const bcrypt = require('bcrypt');

class Receiver extends Model {}

Receiver.init({
  receiverNo: {type: DataTypes.INTEGER,primaryKey: true, autoIncrement: true},
  quantity:{type: DataTypes.INTEGER,allowNull: false},
  userNo:{type: DataTypes.INTEGER,allowNull: false},
  donorNo:{type: DataTypes.INTEGER,allowNull: false, defaultValue:0},
  name: {type: DataTypes.STRING(500),
          allowNull: false, 
          unique: true
   },
   
  latitude: {type: DataTypes.FLOAT,
    allowNull: false
 },
longitude: {type: DataTypes.FLOAT,
   allowNull: false
},
location:{type:DataTypes.STRING(1000),allowNull:false},     

  type: {type: DataTypes.ENUM("Home_shelter","NGO","Other"), defaultValue: "Other"},        

  timestampCreated: { type: DataTypes.BIGINT, defaultValue: Date.now},

  name: { type: DataTypes.STRING(100), 
          allowNull:false    
         },  
  timestampExpiry: { type: DataTypes.BIGINT, defaultValue: Date.now},
  isVerify: {type: DataTypes.ENUM("Yes","No"), defaultValue: "NO"},        
  isReceived: {type: DataTypes.ENUM("Yes","No"), defaultValue: "NO"},
 

},{ 
    
  sequelize, // We need to pass the connection instance
  timestamps: false, 
  tableName: 'receivers'
}); 

// Receiver.sync({ alter: true })
module.exports = Receiver;  