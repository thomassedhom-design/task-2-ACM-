import express, {json} from "express";
import {toDoController} from "../controllers/toDoController";

let app = express(),
    toDoRouter = express.Router();

app.use(express.json());

toDoRouter.route("/")
    .get(toDoController.getAllTasks)
    .post(toDoController.postNewTask)

toDoRouter.route("/:userId")
    .get(toDoController.getSpecificTask)

export default toDoRouter

