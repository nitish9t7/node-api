const mongoose = require("mongoose");

const totalattwithdatelist = new mongoose.Schema({
  dates:{
    type:String,
    default:null,
    required:true
  },
  totalPres:{
    type:String,
    default:null
  },
  groupFoto:{
    type:String,
    default:null,
    required:true
  }
  
});

module.exports = mongoose.model("totalattwithdatelist", totalattwithdatelist);
