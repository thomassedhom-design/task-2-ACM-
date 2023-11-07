import UsersSchema from "../Types/userType"

let usersData : UsersSchema[] = []

let displayAllUsersData : string = "";

let collectAllData = () =>
    
    new Promise((resolve, reject) => {

        for(let i: number = 0; i < usersData.length; i++){

            i == 0 ? displayAllUsersData = "": null;
    
            displayAllUsersData += 
                `   
                user id : ${usersData[i].Id}
                user name: ${usersData[i].Name}
                user age: ${usersData[i].Age}
                user phone: ${usersData[i].PhoneNo}
                `;
        }
        displayAllUsersData.length == 0? 
            reject("data not found") : resolve(displayAllUsersData);
    })
    .then(() => console.log("fetch data passed"))
    .catch(message => {console.log("fetch data not passed");displayAllUsersData=message})

let displayUserData: string = "";

let collectUsertData = (id: string) =>
    
    new Promise((resolve, reject) => {

        for(let i: number = 0; i < usersData.length; i++){
        
            i == 0 ? displayUserData = "": null;

            if(usersData[i].Id == JSON.parse(id)){

                displayUserData =
                `
                user id : ${usersData[i].Id}
                user name: ${usersData[i].Name}
                user age: ${usersData[i].Age}
                user phone: ${usersData[i].PhoneNo}
                `;
                break;
            }
        }
        displayUserData.length == 0? reject(`Not Found ):`) : resolve(displayUserData);
    })
    .then(() => console.log("fetch data passed"))
    .catch(message => {console.log("fetch data not passed");displayUserData=message})

export{usersData, displayAllUsersData, collectAllData, displayUserData, collectUsertData}

