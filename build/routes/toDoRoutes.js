"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const toDoController_1 = require("../controllers/toDoController");
let app = (0, express_1.default)(), toDoRouter = express_1.default.Router();
app.use(express_1.default.json());
toDoRouter.route("/")
    .get(toDoController_1.toDoController.getAllTasks)
    .post(toDoController_1.toDoController.postNewTask);
toDoRouter.route("/:createdBy")
    .get(toDoController_1.toDoController.getSpecificTask);
exports.default = toDoRouter;
