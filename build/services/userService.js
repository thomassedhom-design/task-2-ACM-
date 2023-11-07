"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.collectUsertData = exports.displayUserData = exports.collectAllData = exports.displayAllUsersData = exports.usersData = void 0;
let usersData = [];
exports.usersData = usersData;
let displayAllUsersData = "";
exports.displayAllUsersData = displayAllUsersData;
let collectAllData = () => new Promise((resolve, reject) => {
    for (let i = 0; i < usersData.length; i++) {
        i == 0 ? exports.displayAllUsersData = displayAllUsersData = "" : null;
        exports.displayAllUsersData = displayAllUsersData +=
            `   
                user id : ${usersData[i].Id}
                user name: ${usersData[i].Name}
                user age: ${usersData[i].Age}
                user phone: ${usersData[i].PhoneNo}
                `;
    }
    displayAllUsersData.length == 0 ?
        reject("data not found") : resolve(displayAllUsersData);
})
    .then(() => console.log("fetch data passed"))
    .catch(message => { console.log("fetch data not passed"); exports.displayAllUsersData = displayAllUsersData = message; });
exports.collectAllData = collectAllData;
let displayUserData = "";
exports.displayUserData = displayUserData;
let collectUsertData = (id) => new Promise((resolve, reject) => {
    for (let i = 0; i < usersData.length; i++) {
        i == 0 ? exports.displayUserData = displayUserData = "" : null;
        if (usersData[i].Id == JSON.parse(id)) {
            exports.displayUserData = displayUserData =
                `
                user id : ${usersData[i].Id}
                user name: ${usersData[i].Name}
                user age: ${usersData[i].Age}
                user phone: ${usersData[i].PhoneNo}
                `;
            break;
        }
    }
    displayUserData.length == 0 ? reject(`Not Found ):`) : resolve(displayUserData);
})
    .then(() => console.log("fetch data passed"))
    .catch(message => { console.log("fetch data not passed"); exports.displayUserData = displayUserData = message; });
exports.collectUsertData = collectUsertData;
