import mongoose from "mongoose";

// Defining Schema

const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    role:{
        type: String,
        required: true,
        trim: true
    }



})

//Model 

const EmployeeModel = mongoose.model("employee", employeeSchema)

export default EmployeeModel