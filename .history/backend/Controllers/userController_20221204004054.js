
const bcrypt = require('bcrypt')
const User = require('../models/user');
const stringFunctions = require('../helpers/string_functions.js');
// const Session = require("../models/session")
// const sessionController = require("./sessionController");


module.exports.createUser = async (req, res) => {

            //Create a new user
            try {
             let user = await User.create(req.body);
            return res.json(user);

            }
            catch (err) {
                
                return res.status(409).json(err.errors);
            }
}//end createUser


/*
 POSTed Params
   email
   password

 Return Values
   userNo, isSeller
*/
module.exports.loginUser = async (req, res) => {
    //Validate the session 

    try {
        let user = await User.findOne({ where: { email: req.body.email } })
        if (user == null) {
            return res.status(409).json([{ "errorMessage": "invalid email", "paramName": "email" }])
        }
        else {
            bcrypt.compare(req.body.password, user.password, async function (err, result) {
                if (result) {
                    try{
                        return res.json(user); 
                    }
                    catch (err) {
                        return res.status(409).json(stringFunctions.formatDBErrors(err.errors));                        
                    }
                }
                else {
                    return res.status(409).json([{ "errorMessage": "invalid password", "paramName": "password" }])
                }
            });
        }
    }
    catch (err) {
        return res.json(err)
    }
}

