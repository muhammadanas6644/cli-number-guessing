import inquirer from "inquirer";
// 01) computer will generate a random number
// 02) user input for guessing number
// 03) compare user input whit computer generated number and show result
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number between 1-6: ",
    },
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulation! You Guessed Right Number.");
}
else {
    console.log("Sorry! You Guessed Number Is Wrong.");
}
