"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// database schema
const userSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        require: [true, "name field is required"]
    },
    email: {
        type: String,
        require: [true, "Email field is required"],
        unique: true,
        pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
    },
    phonNnumber: {
        type: String,
        require: [true, "Email field is required"],
        unique: true,
        maxlength: 14,
    }
});
const userModel = mongoose_1.default.model("Users", userSchema);
exports.default = userModel;
