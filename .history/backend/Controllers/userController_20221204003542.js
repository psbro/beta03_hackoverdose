
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
                        return res.json({}); 
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

module.exports.updateUser = async (req, res) => {
    let sessionData = await sessionController.validateSession(req, res);

    try{
        if(sessionData.userNo)
        {
            let user=await User.update({
                email:req.body.email,
                name:req.body.name
            },{where: {
                userNo: sessionData.userNo
            }})
            return res.json(user);
        }
        else
        {
            res.status(409).json([{ "errorMessage": "user not loggedin", "paramName": "userNo" }]) 
        }    
    }
    catch(err)
    {
        console.log(err)
        return res.status(409).json(err.errors);
    }   
}//end updateUser


/*
 Expected params
  password    //This is the user's current password
  newPassword
  duplicateNewPassword

  return values
  userNo

  validate the password for this user
  make sure newPassword and duplicateNewPassword match
  update the user's password with the new password 
*/
module.exports.updatePassword = async (req,res) => {
  //validate the session and make sure the userNo in req.body matches the one in the session
  let sessionData = await sessionController.validateSession(req, res);
  if (req.body.newPassword != req.body.duplicateNewPassword) {
    return res.status(409).json([{ "errorMessage": " new password and new duplicate password do not match.", "paramName": "newPassword" }]);
}
  try{
    if(sessionData.userNo==req.body.userNo)
    {
        let user = await User.findOne({ where: { email: req.body.email } })
        if (user == null) {
            return res.status(409).json([{ "errorMessage": "invalid email", "paramName": "email" }])
        }
        else {
            bcrypt.compare(req.body.password, user.password, async function (err, result) {
                if (result) {
                    let user=await User.update({password:req.body.newPassword,},{where: {userNo: req.body.userNo}, individualHooks: true})
                    return res.json(req.body.userNo)
                }
                else {
                    return res.status(409).json([{ "errorMessage": "invalid password", "paramName": "password" }])
                }
            });
        }
    }
    else
    {
        res.status(409).json([{ "errorMessage": "Invalid userNo", "paramName": "userNo" }]) 
    }    
}
catch(err)
{
    console.log(err)
    return res.status(409).json(err.errors);
} 

}