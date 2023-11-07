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
exports.userController = void 0;
const userService_1 = require("../services/userService");
exports.userController = {
    getAllUsers: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, userService_1.collectAllData)();
        res.send(userService_1.displayAllUsersData);
    }),
    postNewUser: (req, res) => {
        userService_1.usersData.push(req.body);
        res.send(req.body);
    },
    getSpecificUser: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, userService_1.collectUsertData)(req.params.userId);
        res.send(userService_1.displayUserData);
    })
};
