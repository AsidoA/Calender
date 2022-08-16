const Router = require('express').Router();


const {AddApoint,UpdateApoint,GetApointById,DeleteApoint} = require('../Controllers/T_Appointments');

Router.post('/',AddApoint);
Router.put('/:aid',UpdateApoint);
Router.get('/:aid',GetApointById);
Router.delete('/:aid',DeleteApoint);



module.exports = Router;