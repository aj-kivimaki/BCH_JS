/*
let firstName = prompt('What is your name?');

if (firstName === 'Atte') {
    console.log(`That\'s right! Your name is ${firstName}.`);
} else {
    console.log(`That\'s wrong! ${firstName} is not really your name.`);
}
*/

// firstName === 'Atte' ? console.log('That\'s right!') : console.log('That\'s wrong!');


// let temperature = parseInt(prompt('What\'s the temperature?'));

/*
if (temperature < 15) {
    console.log('You\'ll need a jacket!');
} else {
    console.log('You\'re good to go!');
}
*/

// temperature < 15 ? console.log('You\'ll need a jacket!') : console.log('You\'re good to go!');

/*
let season = prompt('What is your favorite season of the year?').toLowerCase();

switch (season) {
    case 'winter':
        console.log('Just wait a bit');
        break;
    case 'spring':
        console.log('You will need to wait.');
        break;
    case 'summer':
        console.log('You are in luck. It is summer now.');
        break;
    case 'autumn':
        console.log('Coming soon.');
        break;
    default:
        console.log('There is not such season.');
        break;
};

*/

// Make a program that asks about hourly salary and how many hours the user worked in one day.
// With this information, the program calculates the day's salary.
// The salary is calculated as follows:
// - first 7 hours by hourly salary
// - next 2 hours, 50% extra
// rest the hours 100% extra

/*
const hourlyRate = parseFloat(prompt('How much is your hourly rate?'));
const workHours = parseFloat(prompt('How many hours do you work in a day?'));
let totalPay = 0;

const normalPay = workHours * hourlyRate;
const extra50 = 0.5 * (workHours - 7) * hourlyRate;
const extra100 = (workHours - 9) * hourlyRate;

if (workHours <= 7) {
    totalPay = normalPay;
} else if (workHours <= 9) {
    totalPay = normalPay + extra50;
} else {
    totalPay = normalPay + hourlyRate + extra100;
}

console.log(`Your daily salary is ${totalPay}`);
*/




/*

const num1 = parseInt(prompt('Give the first number'));
const num2 = parseInt(prompt('Give the second number'));
const num3 = parseInt(prompt('Give the third number'));

console.log(`These are the numbers you entered: ${num1}, ${num2}, ${num3}`);

if (num1 >= 0 || num2 >= 0 || num3 >= 0) {
    console.log(`Sum of the numbers is ${num1 + num2 + num3}`);
    if (num1 >= 0 && num2 >= 0 && num3 >= 0) {
        console.log(`Multiplication of the numbers is ${num1 * num2 * num3}`);
    }
} else if (num1 < 0 && num2 < 0 && num3 < 0) {
    console.log('Only negatives');
}

*/

/* const randomNumbers = () => {
    const num1 = parseInt(prompt('Give the first number'));
    const num2 = parseInt(prompt('Give the second number'));
    const num3 = parseInt(prompt('Give the third number'));

    const sum = num1 + num2 + num3;
    const mult = num1 * num2 * num3;

    console.log(`These are the numbers you entered: ${num1}, ${num2}, ${num3}`);

    if (num1 >= 0 || num2 >= 0 || num3 >= 0) {
        console.log(`Sum of the numbers is ${sum}`);
        if (num1 >= 0 && num2 >= 0 && num3 >= 0) {
            console.log(`Multiplication of the numbers is ${mult}`);
        }
    } else {
        console.log('Only negatives');
    }
}

randomNumbers();
 */

// -- Odd or Even --

/* const oddOrEven = () => {
    const num = parseInt(prompt('Please, give a positive number:'));
    let word = '';

    if (num > 0) {
        if (num % 2 === 0) {
            word = 'even';
        } else {
            word = 'odd';
        }
        console.log(`Number ${num} is ${word}.`);
    } else {
        oddOrEven();
    }
}

oddOrEven(); */

/* prompt - what is in your mind?
user asks a question
random number will give answer from 10 answers
*/

