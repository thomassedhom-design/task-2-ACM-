import express, {Request, Response, json} from "express";
import {toDoData, displayAllTasksData, collectAllData, displayTask, collectTasktData}
        from "../services/toDoService";

export let toDoController = {

    getAllTasks: async (req: Request, res: Response) => {

        await collectAllData();
        res.send(displayAllTasksData);
    },

    postNewTask: (req: Request, res: Response) =>{

        toDoData.push(req.body); 
        res.send(req.body)
    },

    getSpecificTask:async (req: Request, res: Response) => {

        await collectTasktData(req.params.userId);
        res.send(displayTask)
    }
}