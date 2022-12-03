const express = require('express')
const cors = require("cors")
const path = require("path");
// const cookieParser = require('cookie-parser');
const sequelize = require('./config/db')
// const RentalIsbn=require('./models/rentalIsbn')




var app = express();
   
const port = 8000;

app.use(cors()); 
app.use(express.json());
// sequelize.sync()

app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser()); 
var bodyParser = require('body-parser');
app.use(bodyParser.json());
const userRoutes = require("./routes/userRoutes");
const donorRoutes = require("./routes/donorRoutes");
const receiverRoutes = require("./routes/receiverRoutes");
app.use("/users",userRoutes); 
app.use("/donor",donorRoutes); 
app.use("/receiver",receiverRoutes); 
const accountSid = 'ACba58a05db6a6412dde27b4fe08227f7b'; 
const authToken = '[Redacted]'; 
const client = require('twilio')(accountSid, authToken); 


app.get("/", (req, res) => {
    res.json({ message: "Welcome to version beta!" });
  });

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

