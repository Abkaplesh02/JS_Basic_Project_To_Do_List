let req=prompt("Enter your request :: ");

let task=[];

while(true){
    if(req=="Quit" || req=="quit"){
        console.log("List Terminated :: ");
        break;
    }

    if(req=="Add" || req=="add"){
        console.log("Task addition initiated :: ");
        req=prompt("Enter your task to add :: ");
        task.unshift(req);
        console.log("Task added successfully :: ");
    }

    if(req=="Delete" || req=="delete"){
        console.log("Task deletion initiated :: ");
        req=prompt("Enter index of task to delete :: ");
        task.splice(req,1);
        console.log("Task deleted successfully :: ");

    }

    if(req=="List" || req=="list"){
        console.log("List printing initiated :: ");
       for(let i=0;i<task.length;i++){
        console.log(task[i]);
       }
        console.log("List printed successfully ");

    }
    req=prompt("Enter your request :: ");

}