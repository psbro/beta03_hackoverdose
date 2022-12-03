

const Donor = require('../models/donor');
// const stringFunctions = require('../helpers/string_functions.js');
// const Session = require("../models/session")
// const sessionController = require("./sessionController");


module.exports.createDonor = async (req, res) => {

            //Create a new user
            try {
             let donor = await Donor.create(req.body);
            return res.json(donor);

            }
            catch (err) {
                return res.status(409).json(err);
            }
}//end createUser

module.exports.allDonor = async (req, res) => {

    //Create a new user
    try {
     let donor = await Donor.findAll();
    return res.json(donor);
    }
    catch (err) {
        return res.status(409).json(err);
    }
}//end createUser

module.exports.updateDonor = async (req, res) => {

    //Create a new user
    try {
     let donor = await Donor.update(req.body,{where:{donorNo:req.body.donorNO}});
    return res.json(donor);

    }
    catch (err) {
        return res.status(409).json(err);
    }
}//end createUser


