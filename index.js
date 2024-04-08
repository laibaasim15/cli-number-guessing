#! /usr/bin/env node
import inquire from "inquirer";
// 1) Computer will generate a random number
// 2) User input for guessing numbe(r
// 3) Compare user input with computer and show the results
const randomNumber = Math.floor(Math.random() * 6 + 1);
console.log("Welcome to Number Guessing Game");
const answer = await inquire.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "Please guess a number between 1-6:",
    },
]);
if (answer.userGuessNumber === randomNumber) {
    console.log("Congratulations! you guessed right number");
}
else {
    console.log("You guessed wrong number");
}
console.log(randomNumber);
