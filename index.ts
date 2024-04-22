#!/usr/bin/env node
import inquirer from "inquirer";

    let todos: string[] = [];
    let condition = true;
    while (condition) {
        let user_answer = await inquirer.prompt({
            name: "uChoice",
            message: "Please Select option : ",
            type: "list",
            choices: ["Read", "Add", "Update", "Delete", "Exit"],
        });

        if (user_answer.uChoice == "Read") {
            console.clear();
            console.log(todos);
        } else if (user_answer.uChoice == "Update") {
        let todoUpdate: any = await inquirer.prompt(
            [
            {
                name: "todoUpdt1",
                type: "input",
                message: "Please Enter your Edit Value from yur todos list -1:",
            },
            {
                name: "todoUpdt2",
                type: "input",
                message: "Please Enter your Update Value for todos list:-2",
            }
            ]
            );            
            let i:number = 0;
            for(let val of todos){                
                if(val == todoUpdate.todoUpdt1){
                    todos.splice(i, 1, todoUpdate.todoUpdt2);
                    console.clear();
                    console.log(todos); 
                    break;
                } 
                i++
            }                 
        } else if (user_answer.uChoice == "Add") {
                console.clear();
                let moreAdd: any = await inquirer.prompt({
                name: "todoAdd",
                type: "input",
                message: "What would you like to add in your todos list:",
            });
            todos.push(moreAdd.todoAdd); // Push new todo item into the array
            console.log(todos);
        } else if (user_answer.uChoice == "Delete") {
            let todoDelete: any = await inquirer.prompt({
                name: "todoDel",
                type: "input",
                message: "What would you like to Delete in your todos list:",
            });
            let i:number = 0;
            for(let val of todos){
                if(val == todoDelete.todoDel){
                    todos.splice(i, 1);                    
                } 
                i++
            }
            console.clear();  
            console.log(todos);            
        } else {
            console.clear();            
            condition = false;
        }
    }