"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv").config();
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const toDoRoutes_1 = __importDefault(require("./routes/toDoRoutes"));
const mongoose_1 = __importDefault(require("mongoose"));
let app = (0, express_1.default)();
const url = process.env.DATABSE_URL;
mongoose_1.default.connect(url)
    .then(() => console.log("connect"))
    .catch(() => console.log("not connect"));
app.use(express_1.default.json());
app.use("/users", userRoutes_1.default);
app.use("/todo", toDoRoutes_1.default);
app.all('*', (req, res, next) => res.json({ status: "ERROR", data: { msg: "Not Found Url" } }).status(404));
app.use((error, req, res, next) => {
    return res.status(error.statusCode || 500).json({
        status: "ERROR",
        data: { msg: error.message },
        code: error.code || 500
    });
});
app.listen(process.env.PORT || 3000, () => {
    console.log("app is listening on port ", process.env.PORT || 3000);
});
