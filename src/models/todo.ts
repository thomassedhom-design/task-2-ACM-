import mongoose, { Model, Schema } from "mongoose";

// database schema
const userSchema: Schema = new mongoose.Schema({
    Title: {
        type:String,
        require: true,
        maxlength:50
    },

    Description: {
        type: String,
        maxlength:200
    },

    createdBy: {
        type: Schema.Types.ObjectId, 
        ref: 'Users' 
    }
})
const toDoModel = mongoose.model("toDo", userSchema)

export default toDoModel




