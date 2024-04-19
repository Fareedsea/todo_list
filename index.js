#! /usr/bin/env node
import inquirer from "inquirer";
let todo = [];
let condition = true;
while (condition) {
    let todoquestion = await inquirer.prompt([{
            name: "firstQuestion",
            type: "input",
            message: "What would you like to add in your todo:  "
        },
        {
            name: "secondQuestion",
            type: "confirm",
            message: "Would you like to add more in your todo:  ",
            default: "true"
        }
    ]);
    todo.push(todoquestion.firstQuestion);
    console.log(todo);
    condition = todoquestion.secondQuestion;
}
