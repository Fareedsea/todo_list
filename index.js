#!/usr/bin/env node
import inquirer from "inquirer";
let todos = [];
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
    }
    else if (user_answer.uChoice == "Update") {
        let todoUpdate = await inquirer.prompt([
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
        ]);
        let i = 0;
        for (let val of todos) {
            if (val == todoUpdate.todoUpdt1) {
                todos.splice(i, 1, todoUpdate.todoUpdt2);
                console.clear();
                break;
            }
            i++;
        }
    }
    else if (user_answer.uChoice == "Add") {
        console.clear();
        let moreAdd = await inquirer.prompt({
            name: "todoAdd",
            type: "input",
            message: "What would you like to add in your todos list:",
        });
        todos.push(moreAdd.todoAdd); // Push new todo item into the array
    }
    else if (user_answer.uChoice == "Delete") {
        let todoDelete = await inquirer.prompt({
            name: "todoDel",
            type: "input",
            message: "What would you like to Delete in your todos list:",
        });
        let i = 0;
        for (let val of todos) {
            if (val == todoDelete.todoDel) {
                todos.splice(i, 1);
            }
            i++;
        }
        console.clear();
    }
    else {
        console.clear();
        condition = false;
    }
}
