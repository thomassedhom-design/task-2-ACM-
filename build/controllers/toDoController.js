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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.toDoController = void 0;
const todo_1 = __importDefault(require("../models/todo"));
exports.toDoController = {
    getAllTasks: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const Data = yield todo_1.default.find();
        res.json(Data);
    }),
    postNewTask: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { Title, Description, createdBy } = req.body;
        const saveData = yield todo_1.default.create({ Title, Description, createdBy });
        res.send(saveData);
    }),
    getSpecificTask: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const userId = req.params.createdBy;
        const SpecificTask = yield todo_1.default.find({ createdBy: userId });
        res.json(SpecificTask);
    })
};
