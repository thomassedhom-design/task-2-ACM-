import express, { Request, Response, json } from "express";
import { toDoData, displayAllTasksData, collectAllData, displayTask, collectTasktData }
  from "../services/toDoService";

import toDoCollection from "../models/todo"


export let toDoController = {

  getAllTasks: async (req: Request, res: Response) => {

    const Data = await toDoCollection.find();
    res.json(Data);
  },

  postNewTask: async (req: Request, res: Response) => {

    const {Title, Description, createdBy} =  req.body;

    const saveData = await toDoCollection.create({Title, Description, createdBy});

    res.send(saveData)
  },

  getSpecificTask: async (req: Request, res: Response) => {

    const userId: String = req.params.createdBy;

    const SpecificTask = await toDoCollection.find({createdBy: userId});
    res.json(SpecificTask)
  }
}