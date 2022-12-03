
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

module.exports.whatappmessage = async (req, res) => {

    //Create a new user
    let donorNo=req.body.donorNo;
    let user
    
    try {
        const accountSid = 'ACba58a05db6a6412dde27b4fe08227f7b';
        const authToken = 'c8e441c644ac7b9b3624931f4bbdf184';
        const client = require('twilio')(accountSid, authToken);
        client.messages 
              .create({ 
                 body: 'Your appointment is coming up on July 21 at 3PM', 
                 from: 'whatsapp:+14155238886',       
                 to: 'whatsapp:+919399386770' 
               }) 
              .then(message => console.log(message.sid)) 
              .done(); 


    }
    catch (err) {
        return res.status(409).json(err);
    }
}//end createUser