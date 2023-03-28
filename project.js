/*
1. Deposit some money
2. Determine nuber of line to bet on
3. Collect a bet amount
4. Spin the slot machine
5. Check if the user won
6. Give the user their winnings
7. Play again
*/

//function deposit() { //same syntax has function decleartion below
    
//}
const prompt = require("prompt-sync")(); //user input via "prompt-sync" from package install

const deposit = () => { //ES6 version of creating functions
    while (true) { //infinite loop
        const depositAmount = prompt("Enter a deposit amount: ");
        const numberDepositAmount = parseFloat(depositAmount); //parseFloat() function takes inputed sting from 'prompt' and returns a floating point number

        if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) { //conditioanl that check for valid 'number'
            console.log("Invalid deposit amount, try again.");
        } else {
            return numberDepositAmount; //infinite loop broken if input is valid
        }
    }
    
}

const depositAmount = deposit();
