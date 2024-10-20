
const mongoose = require("mongoose");


const employeeSchema = mongoose.Schema({
    name:  String,      
    location:String, 
    position:String,
    salary: Number
});


const employeeModel = mongoose.model("Employee", employeeSchema);


module.exports = employeeModel;
