import TasksSchema from "../Types/toDoType"

let toDoData : TasksSchema[] = []

let displayAllTasksData : string = "";

let collectAllData = () =>
    
    new Promise((resolve, reject) => {

        for(let i: number = 0; i < toDoData.length; i++){

            i == 0 ? displayAllTasksData = "": null;
    
            displayAllTasksData += 
                `   
                task Id : ${toDoData[i].Id}
                task Title: ${toDoData[i].Title}
                task Description: ${toDoData[i].Description}
                UserId: ${toDoData[i].UserId}
                `;
        }
        displayAllTasksData.length == 0? 
            reject("data not found") : resolve(displayAllTasksData);
    })
    .then(() => console.log("fetch data passed"))
    .catch(message => {console.log("fetch data not passed");displayAllTasksData=message})

let displayTask: string = "";

let collectTasktData = (id: string) =>
    
    new Promise((resolve, reject) => {

        for(let i: number = 0; i < toDoData.length; i++){
        
            i == 0 ? displayTask = "": null;

            if(toDoData[i].Id == JSON.parse(id)){

                displayTask =
                `
                task Id : ${toDoData[i].Id}
                task Title: ${toDoData[i].Title}
                task Description: ${toDoData[i].Description}
                UserId: ${toDoData[i].UserId}
                `;
                break;
            }
        }
        displayTask.length == 0? reject(`Not Found ):`) : resolve(displayTask);
    })
    .then(() => console.log("fetch data passed"))
    .catch(message => {console.log("fetch data not passed"); displayTask=message})

export{toDoData, displayAllTasksData, collectAllData, displayTask, collectTasktData}

