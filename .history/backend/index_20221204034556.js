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

app.get("/", (req, res) => {
    res.json({ message: "Welcome to version beta!" });
  });

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

