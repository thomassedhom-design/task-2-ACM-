import mongoose, { Model, Schema } from "mongoose";

// database schema
const userSchema: Schema = new mongoose.Schema({
    name: {
        type:String,
        require: [true, "name field is required"]
    },
    email: {
        type: String,
        require: [true, "Email field is required"],
        unique: true,
        pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$" ,
    },
    phonNnumber: {
        type:String,
        require: [true, "Email field is required"],
        unique: true,
        maxlength: 14,
    }
})
const userModel = mongoose.model("Users", userSchema)

export default  userModel;




