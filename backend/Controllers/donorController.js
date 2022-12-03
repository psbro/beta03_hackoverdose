

const Donor = require('../models/donor');
// const stringFunctions = require('../helpers/string_functions.js');
// const Session = require("../models/session")
// const sessionController = require("./sessionController");
const sequelize= require('../config/db');



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

module.exports.getReceiverByDistance = async (req, res) => {
    let lat=req.body.latitude;
    let lon=req.body.longitude;
    console.log(lat,lon)
    var sql = `
    SELECT *,((ACOS(SIN(${lat} * PI() / 180) * SIN(latitude * PI() / 180) + COS(${lat} * PI() / 180) * COS(latitude * PI() / 180) * COS((${lon} - longitude) * PI() / 180)) * 180 / PI()) * 60 * 1.1515) AS distance FROM receivers HAVING distance<=100000 AND isReceived="No" AND isVerify="Yes" AND donorNo=0 ORDER BY distance ASC
    `;

  sequelize.query(sql, { type: sequelize.QueryTypes.SELECT })
    .then((data) => { return res.json(data) })
    .catch((err) => { return res.json(err) })
}




