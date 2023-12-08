import { Request, Response } from "express";
import {usersData,displayAllUsersData,collectAllData,displayUserData,collectUsertData} 
    from "../services/userService";
    import UserCollection from "../models/User"

export let userController = {

    getAllUsers:async (req: Request, res: Response) => {

        const Data = await UserCollection.find();
        res.json(Data);
    },

    postNewUser: async (req: Request, res: Response) => {

        const {name, email, phonNnumber} =  req.body;
    
        const saveData = await UserCollection.create({name, email, phonNnumber});
    
        res.send(saveData)
    },

    getSpecificUser:async (req: Request, res: Response) => {

        const userId = req.params.userId;
    
        const SpecificUser = await UserCollection.findById(userId);
        res.json(SpecificUser)
    }
}