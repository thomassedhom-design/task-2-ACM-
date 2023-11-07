import { Request, Response } from "express";
import {usersData,displayAllUsersData,collectAllData,displayUserData,collectUsertData} 
    from "../services/userService";

export let userController = {

    getAllUsers:async (req: Request, res: Response) => {

        await collectAllData()

        res.send(displayAllUsersData);
    },

    postNewUser: (req: Request, res: Response) =>{

        usersData.push(req.body); 
        res.send(req.body)
    },

    getSpecificUser:async (req: Request, res: Response) => {

        await collectUsertData(req.params.userId) 

        res.send(displayUserData);
    }
}