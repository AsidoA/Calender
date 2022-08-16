const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();
const app = express();

const UsersRout = require('./API/V1/Routes/T_Users')
const AppointmentRout = require('./API/V1/Routes/T_Appointments')
const auth = require('./Middelwears/Auth')

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(morgan('dev'));
app.use(cors());


app.use('/users',UsersRout);
app.use('/appointments',auth,AppointmentRout);


const uri = process.env.MONGO_CONN;
mongoose.connect(uri);
mongoose.connect(uri,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{console.log('mongo connected')});

module.exports = app;