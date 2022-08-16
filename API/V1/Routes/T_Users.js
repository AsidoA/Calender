const Router = require('express').Router();

const {Login,Register} = require('../Controllers/T_Users');

Router.post('/log',Login);
Router.post('/reg',Register);


module.exports=Router;