/*
1. Deposit some money
2. Determine nuber of line to bet on
3. Collect a bet amount
4. Spin the slot machine
5. Check if the user won
6. Give the user their winnings
7. Play again
*/

/*
ORDER OF CODE

1. imports and libraires
2. gloabal variables
3. classes and functions
4. mainline code and other aspects
*/

//function deposit() { //same syntax has function decleartion below
//   
//}
const prompt = require("prompt-sync")(); //user input via "prompt-sync" from package install

const ROWS = 3,
      COLS = 3;

const SYMBOLS_COUNT = {
    A: 2,
    B: 4,
    C: 6,
    D: 8,
};

const SYMBOL_VALUES = {
    A: 5,
    B: 4,
    C: 3,
    D: 2,
};

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

const getBet = (balance, lines) => { //'balance' parameter; need to pass value to this function when called
    while (true) { //infinite loop
        const bet = prompt("Enter the bet per line: ");
        const numberBet = parseFloat(bet); //parseFloat() function takes inputed sting from 'prompt' and returns a floating point number

        if (isNaN(numberBet) || numberBet <=0 || numberBet > balance / lines) {
            console.log("Invalid bet, try again.");
        } else {
            return numberBet; //infinite loop broken if input is valid
        }
    }
};

const spin = () => {
    const symbols = [];
    for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
        for (let i = 0; i < count; i++) {
            symbols.push(symbol);
        }
    }

    const reels = [[], [], []];
    for (let i = 0; i < COLS; i++) {
        const reelSymbols = [...symbols ];
        for (let j = 0; j < ROWS; j++) {
            const randomIndex = Math.floor(Math.random() * reelSymbols.length);
                const selectedSymbol = reelSymbols[randomIndex];
                reels[i].push(selectedSymbol);
                reelSymbols.splice(randomIndex, 1);
        }
    }

    return reels;
};

const transpose = (reels) => {
    const rows = [];

    for (let i = 0; i < ROWS; i++) {
        rows.push([]);
        for (let j = 0; j < COLS; j++) {
            rows[i].push(reels[j][i]);
        }
    }

    return rows;
};

const printRows = (rows) => {
    for (const row of rows) {
        let rowString = "";
        for (const [i, symbol] of row.entries()) {
            rowString += symbol;
            if (i != row.length -1) {
                rowString += " | ";
            }
        }
        console.log(rowString);
    }
};

const getWinnings = (rows, bet, lines) => {
    let winnings = 0;

    for (let row = 0; row < lines; row++) {
        const symbols = rows[row];
        let allSame = true;

        for (const symbol of symbols) {
            if (symbol != symbol[0]) {
                allSame = false;
                break;
            }
        }

        if (allSame) {
            winnings += bet * SYMBOL_VALUES[symbols[0]];
        }
    }

    return winnings;
}


let balance = deposit();
const numberofLines = getNumberOfLines();
const bet = getBet(balance, numberofLines);
const reels = spin();
const rows = transpose(reels);
printRows(rows);
const winnings = getWinnings(rows, bet, numberofLines);
console.log("You won, $" + winnings.toString());