const mongoose = require("mongoose");

const datewiseatt = new mongoose.Schema({
  empId:{
    type:String,
    default:null,
    required:true
  },
  name:{
    type:String,
    default:null
  },
  status:{
    type:String,
    default:null,
    required:true
  }
  
});

module.exports = mongoose.model("datewiseatt", datewiseatt);
