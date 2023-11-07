"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.collectTasktData = exports.displayTask = exports.collectAllData = exports.displayAllTasksData = exports.toDoData = void 0;
let toDoData = [];
exports.toDoData = toDoData;
let displayAllTasksData = "";
exports.displayAllTasksData = displayAllTasksData;
let collectAllData = () => new Promise((resolve, reject) => {
    for (let i = 0; i < toDoData.length; i++) {
        i == 0 ? exports.displayAllTasksData = displayAllTasksData = "" : null;
        exports.displayAllTasksData = displayAllTasksData +=
            `   
                task Id : ${toDoData[i].Id}
                task Title: ${toDoData[i].Title}
                task Description: ${toDoData[i].Description}
                UserId: ${toDoData[i].UserId}
                `;
    }
    displayAllTasksData.length == 0 ?
        reject("data not found") : resolve(displayAllTasksData);
})
    .then(() => console.log("fetch data passed"))
    .catch(message => { console.log("fetch data not passed"); exports.displayAllTasksData = displayAllTasksData = message; });
exports.collectAllData = collectAllData;
let displayTask = "";
exports.displayTask = displayTask;
let collectTasktData = (id) => new Promise((resolve, reject) => {
    for (let i = 0; i < toDoData.length; i++) {
        i == 0 ? exports.displayTask = displayTask = "" : null;
        if (toDoData[i].Id == JSON.parse(id)) {
            exports.displayTask = displayTask =
                `
                task Id : ${toDoData[i].Id}
                task Title: ${toDoData[i].Title}
                task Description: ${toDoData[i].Description}
                UserId: ${toDoData[i].UserId}
                `;
            break;
        }
    }
    displayTask.length == 0 ? reject(`Not Found ):`) : resolve(displayTask);
})
    .then(() => console.log("fetch data passed"))
    .catch(message => { console.log("fetch data not passed"); exports.displayTask = displayTask = message; });
exports.collectTasktData = collectTasktData;
