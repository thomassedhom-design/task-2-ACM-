"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controllers/userController");
let app = (0, express_1.default)(), userRouter = express_1.default.Router();
app.use(express_1.default.json());
userRouter.route("/")
    .get(userController_1.userController.getAllUsers)
    .post(userController_1.userController.postNewUser);
userRouter.route("/:userId")
    .get(userController_1.userController.getSpecificUser);
exports.default = userRouter;
