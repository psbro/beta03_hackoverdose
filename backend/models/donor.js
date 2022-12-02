const { Sequelize, DataTypes, QueryTypes, Model } = require('sequelize');
const sequelize= require('../config/db');
const bcrypt = require('bcrypt');

class Donor extends Model {}

Donor.init({
  donorNo: {type: DataTypes.INTEGER,primaryKey: true, autoIncrement: true},
  userNo:{type: DataTypes.INTEGER,allowNull: false},
  quantity:{type: DataTypes.INTEGER,allowNull: false},
  name: {type: DataTypes.STRING(500),
          allowNull: false, 
          unique: true
   },
  type: {type: DataTypes.ENUM("Individual","Restaurant","Hostel","Food_Caterer","Ngo","Other"), defaultValue: "Other"},        

  location: {type: DataTypes.STRING(100),
             allowNull: false
          },

  timestampCreated: { type: DataTypes.BIGINT, defaultValue: Date.now},

  name: { type: DataTypes.STRING(100), 
          allowNull:false
          
         },
  link1:{type:DataTypes.STRING(1000),allowNull:true} ,      

  timestampExpiry: { type: DataTypes.BIGINT, defaultValue: Date.now},
  isVerify: {type: DataTypes.ENUM("Yes","No"), defaultValue: "NO"},        
  isDelivered: {type: DataTypes.ENUM("Yes","No"), defaultValue: "NO"}       

},{ 
    
  sequelize, // We need to pass the connection instance
  timestamps: false, 
  tableName: 'donors'
}); 

// Donor.sync({ alter: true })
module.exports = Donor;  