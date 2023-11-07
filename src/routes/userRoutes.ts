import express, {json} from "express";
import {userController} from "../controllers/userController";

let app = express(),
    userRouter = express.Router();

app.use(express.json());

userRouter.route("/")
    .get(userController.getAllUsers)
    .post(userController.postNewUser)

    userRouter.route("/:userId")
    .get(userController.getSpecificUser)

export default userRouter

