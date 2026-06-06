const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  employeeId: {
    type: String,
    required: true,
    unique: true
  },

  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true
  },

  phone: {
    type: String,
    required: true
  },

  department: {
    type: String,
    required: true
  },

  designation: {
    type: String,
    required: true
  },

  salary: {
    type: Number,
    required: true
  },

   photo:{
    type:String,
    default:""
  },


  joiningDate: {
    type: Date,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model("Employee", employeeSchema);