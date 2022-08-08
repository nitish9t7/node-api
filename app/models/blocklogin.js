const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  name:{
    type:String,
    default:null,
    required:true
  },
  fName:{
    type:String,
    default:null
  },
  mName:{
    type:String,
    default:null,
    required:true
  },
  position:{
    type:String,
    default:null,
    required:true,
    unique:true
  },
  address:{
    type:String,
    default:null,
    required:true
  },
  aadhar:{
    type:Number,
    default:null,
    required:true,
    unique:true
  },
  contact:{
    type:Number,
    default:null,
    required:true,
    unique:true
  },
  
  emailId:{
    type:String,
    default:null,
    required:true,
    unique:true
  },
  loginId:{
    type:String,
    default:null,
    required:true,
    unique:true
  },
  password:{
    type:String,
    default:null,
    required:true,
    unique:true
  }
  
});

module.exports = mongoose.model("employeeDetails", employeeSchema);
