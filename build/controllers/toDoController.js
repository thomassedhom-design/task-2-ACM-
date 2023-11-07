"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.toDoController = void 0;
const toDoService_1 = require("../services/toDoService");
exports.toDoController = {
    getAllTasks: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, toDoService_1.collectAllData)();
        res.send(toDoService_1.displayAllTasksData);
    }),
    postNewTask: (req, res) => {
        toDoService_1.toDoData.push(req.body);
        res.send(req.body);
    },
    getSpecificTask: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, toDoService_1.collectTasktData)(req.params.userId);
        res.send(toDoService_1.displayTask);
    })
};
