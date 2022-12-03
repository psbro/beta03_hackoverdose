

const Receiver = require('../models/receiver.js');
// const stringFunctions = require('../helpers/string_functions.js');
// const Session = require("../models/session")
// const sessionController = require("./sessionController");


module.exports.createReceiver = async (req, res) => {

    //Create a new user
    try {
        let receiver = await Receiver.create(req.body);
        return res.json(receiver);

    }
    catch (err) {
        return res.status(409).json(err);
    }
}//end createUser

module.exports.allReceiver = async (req, res) => {

    //Create a new user
    try {
        let receiver = await Receiver.findAll();
        return res.json(receiver);
    }
    catch (err) {
        return res.status(409).json(err);
    }
}//end createUser

module.exports.updateReceiver = async (req, res) => {

    //Create a new user
    try {
        let receiver = await Receiver.update(req.body, { where: { receiverNo: req.body.receiverNo } });
        return res.json(receiver);

    }
    catch (err) {
        return res.status(409).json(err);
    }
}//end createUser



module.exports.whatappmessage = async (req, res) => {

    //Create a new user
    let donor=req.body.
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
