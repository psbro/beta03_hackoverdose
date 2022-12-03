

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
     let receiver = await Receiver.update(req.body,{where:{receiverNo:req.body.receiverNo}});
    return res.json(receiver);

    }
    catch (err) {
        return res.status(409).json(err);
    }
}//end createUser



module.exports.whatapp = async (req, res) => {

    //Create a new user
    try {
     let receiver = await Receiver.update(req.body,{where:{receiverNo:req.body.receiverNo}});
    return res.json(receiver);

    }
    catch (err) {
        return res.status(409).json(err);
    }
}//end createUser
