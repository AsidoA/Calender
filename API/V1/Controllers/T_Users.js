const T_Users = require('../Models/T_Users');
const mongoose = require('mongoose');
const bcrypt =require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');



module.exports = {

Register:(req,res)=>{
    const {Uid,FullName,Email,Pass,Phone,Bdate,Adress} = req.body;//Uid,Fullname,email,Pass,Phone,Bdate,Address
    T_Users.find({Email:Email}).then((result)=>{
        if(result.length>0)
        return res.status(409).json({Msg:"This User Is Alredy Exist"});

        bcrypt.hash(Pass,12).then((hashed)=>{
            const newUser = new T_Users({
                _id:new mongoose.Types.ObjectId,Uid,FullName,Email,Pass:hashed,Phone,Bdate,Adress});

                newUser.save().then((user)=>{
                    return res.status(200).json({Msg:'User Registered Succesfuly'})
                }).catch((error)=>{return res.status(505).json({error})})
        });
    });
},
Login:(req,res)=>{
    const {Email,Pass} = req.body;

    T_Users.find({Email:Email}).then((result)=>{
        if(result.length == 0)
            return res.status(409).json({Msg:'User Not Found'});

            bcrypt.compare(Pass,result[0].Pass).then((compared)=>{
                if(!compared)
                 return res.status(409).json({Msg:'Password incorrect'});

                 const token = jwt.sign({Email},process.env.SECRET_KEY,{expiresIn:'1H'});

                 let mailTransporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: 'asidoasif@gmail.com',
                        pass: process.env.EMAIL_PASS
                    }
                });
                 
                let mailDetails = {
                    from: 'asidoasif@gmail.com',
                    to: Email,
                    subject: 'Test mail',
                    text: 'We Detect A Login To Calender'
                };
                 
                mailTransporter.sendMail(mailDetails, function(err, data) {
                    if(err) {
                        console.log(err);
                    } else {
                        console.log('Email sent to'+" "+Email);
                    }
                });
                 return res.status(409).json({Msg:"User Login succesfully",token});
            })
    })
}




};