const T_Appointments = require('../Models/T_Appointments');
const mongoose = require('mongoose');

module.exports = {
    AddApoint:(req,res)=>{
        const {Aid,Adate,Adesc,Uid} = req.body;
        const Apoint = new T_Appointments({
            _id:new mongoose.Types.ObjectId(),
            Aid,Adate,Adesc,Uid
        });
        
        Apoint.save().then(()=>{
            return res.status(200).json({Msg:"New Apoointment Added"});
        });
    },
    UpdateApoint:(req,res)=>{
        T_Appointments.updateOne({Aid:req.params.aid},req.body).then((apoint)=>{
            return res.status(200).json({Msg:"Updated"});
        });
    },
    GetApointById:(req,res)=>{
        T_Appointments.find({Aid:req.params.aid}).then((apoint)=>{
            return res.status(200).json(apoint);
        });
    },
    DeleteApoint:(req,res)=>{
        T_Appointments.deleteOne({aid:req.params.aid}).then((apoint)=>{
            return res.status(200).json({Msg:"Deleted Appointment:"});
        });
    }


}