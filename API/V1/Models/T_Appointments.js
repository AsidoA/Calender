const mongoose = require('mongoose');
mongoose.pluralize(null);
const ApointSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
        //AId,Adate,Adesc,Uid
    Aid:Number,
    Adate:String,
    Adesc:String,
    Uid:Number
});

module.exports = mongoose.model("T_Appointments",ApointSchema);