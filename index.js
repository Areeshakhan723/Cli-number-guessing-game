#! /usr/bin/env node
import inquirer from "inquirer";
const gameNumber = Math.floor(Math.random() * 5 + 1);
const answers = await inquirer.prompt([{
        name: "userGuessNumber",
        type: "number",
        message: "please guess a number between 1-5:",
    },
]);
console.log(answers);
if (answers.userGuessNumber === gameNumber) {
    console.log("Congulations! you guess a write number");
}
else {
    console.log("try again! you guess a wrong number");
}
;
