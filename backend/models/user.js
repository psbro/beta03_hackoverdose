const { Sequelize, DataTypes, QueryTypes, Model } = require('sequelize');
const sequelize= require('../config/db');
const bcrypt = require('bcrypt');

class User extends Model {}

User.init({
  userNo: {type: DataTypes.INTEGER,primaryKey: true, autoIncrement: true},
  
  email: {type: DataTypes.STRING(500),
          allowNull: false, 
          unique: true},
  password: {type: DataTypes.STRING(100),
             allowNull: false
          },

  timestampCreated: { type: DataTypes.BIGINT, defaultValue: Date.now},

  name: { type: DataTypes.STRING(100), 
          allowNull:false,
         },

  timestampLastLogin: { type: DataTypes.BIGINT, defaultValue: Date.now},
  mobile: {type: DataTypes.STRING(10)},


}, {
  hooks: {
    beforeCreate: (user,options) => {
      return bcrypt.genSalt(5).then((salt) => {
        return bcrypt.hash(user.password, salt).then((hashed) => {
          console.log(hashed)
          user.password = hashed;
        });
      });
    },
    beforeUpdate: (user,options) => {
      //console.log(user.password)
      return bcrypt.genSalt(5).then((salt) => {
        return bcrypt.hash(user.password, salt).then((hashed) => {
          console.log(hashed)
          user.password = hashed;
        });
      });
    }
  },

  sequelize, // We need to pass the connection instance
  timestamps: false, 
  tableName: 'users'
}); 

// User.sync({ alter: true })
module.exports = User;  