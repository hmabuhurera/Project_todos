#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let toDos = []

let condition = true;

while (condition)
{
  let todoQuestion = await inquirer.prompt(
    [
        {
            name:"todoAsking",
            type:"input",
            message:chalk.yellow("What whoult you like to add in your todo?"),
        },
        {
            name:"todoGuaid",
            type:"confirm",
            message:chalk.blue("Would you like to add other thing in your todos"),
            default:chalk.green("true"),
        }
    ]
 );

 toDos.push(todoQuestion.todoAsking);
 console.log(chalk.redBright(toDos));
 condition = todoQuestion.todoGuaid;


};