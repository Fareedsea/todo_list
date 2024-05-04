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
                message: "Please Enter your Edit Name from your todos list ->:",
            },
            {
                name: "todoUpdt2",
                type: "input",
                message: "Please Enter your Update Name for todos list ->",
            }
            ]
            );            
            const index = todos.indexOf(todoUpdate.todoUpdt1);
            todos.splice(index, 1, todoUpdate.todoUpdt2);
            console.clear();           
        } else if (user_answer.uChoice == "Add") {
                console.clear();
                let moreAdd: any = await inquirer.prompt({
                name: "todoAdd",
                type: "input",
                message: "What would you like to add in your todos list:",
            });
            todos.push(moreAdd.todoAdd); // Push new todo item into the array
        } else if (user_answer.uChoice == "Delete") {
            let todoDelete: any = await inquirer.prompt({
                name: "todoDel",
                type: "input",
                message: "What would you like to Delete in your todos list:",
            });
            const index = todos.indexOf(todoDelete.todoDel);
            todos.splice(index, 1);
            console.clear();            
        } else {
            console.clear();            
            condition = false;
        }
    }
    