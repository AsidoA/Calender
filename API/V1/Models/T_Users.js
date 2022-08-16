const mongoose = require('mongoose');
mongoose.pluralize(null);
const UsersSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
        //Uid,Fullname,email,Pass,Phone,Bdate,Address
    Uid:Number,
    Fullname:String,
    Email:String,
    Pass:String,
    Phone:String,
    Bdate:String,
    Adress:String
});

module.exports = mongoose.model("T_Users",UsersSchema);