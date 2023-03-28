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
//   
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
};

const getNumberOfLines = () => {
    while (true) { //infinite loop
        const lines = prompt("Enter the number of lines to bet (1-3): ");
        const numberofLines = parseFloat(lines); //parseFloat() function takes inputed sting from 'prompt' and returns a floating point number

        if (isNaN(numberofLines) || numberofLines <= 0 || numberofLines > 3) { //conditioanl that check for valid 'number'
            console.log("Invalid number of lines, try again.");
        } else {
            return numberofLines; //infinite loop broken if input is valid
        }
    }
};

const getBet = (balance) => { //'balance' parameter; need to pass value to this function when called
    while (true) { //infinite loop
        const bet = prompt("Enter the total bet: ");
        const numberBet = parseFloat(bet); //parseFloat() function takes inputed sting from 'prompt' and returns a floating point number

        if (isNaN(numberBet) || numberBet <=0 || numberBet > balance) {
            console.log("Invalid bet, try again.");
        } else {
            return numberBet; //infinite loop broken if input is valid
        }
    }
};

let balance = deposit();
const numberofLines = getNumberOfLines();
const bet = getBet(balance);
