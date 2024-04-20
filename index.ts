#! /usr/bin/env node
import inquirer from "inquirer";
let todo = [];
let condition = true;

let todoquestion = await inquirer.prompt({
  name: "firstQuestion",
  type: "input",
  message: "What would you like to add in your todo list:",
});
todo = todoquestion.firstQuestion;

while(condition){
let user_answer = await inquirer.prompt({
  name: "uChoice",
  message: "Please Select option : ",
  type: "list",
  choices: ["Read", "Add", "Update", "Delete", "Exit"],
});
if (user_answer.uChoice == "Read") {
    console.clear();
    console.log(todo);
    condition = true;
} else if (user_answer.uChoice == "Update") {
    console.clear();
    console.log("Update");
    condition = true;
} else if (user_answer.uChoice == "Add") {
        console.clear();
        const { todolist } = await inquirer.prompt([{
        name: "todolist",
        type: "input",
        message: "What would you like to add in your todo list:",
        }]); 
        // todo = todo.push(todolist);
        console.log(todo);
        console.log("Add");
        condition = true;

} else if (user_answer.uChoice == "Delete") {
        console.clear();
        console.log("Delete");
        condition = true;
} else {
        console.clear();
        console.log("Exit");
        condition = false;
}
}
// If(user_answer.uChoice == "Read") {
//     console.log(todoquestion);
// } else If(user_answer.uChoice == "Add") {
//     todo.push(todoquestion.firstQuestion)

// } else If(user_answer.uChoice == "Update") {

// } else If(user_answer.uChoice == "Delete") {

// } else {
// close
// }

// todo.push(todoquestion.firstQuestion);
// console.log(todo);
// condition = todoquestion.secondQuestion;

