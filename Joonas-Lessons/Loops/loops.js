// Loop Assignments (Don’t use arrays)

// 1.  Make a program that prints all positive numbers that are odd and smaller
//     than 100 starting from 1. (1 3 5 7 9 11...)

const positiveNumbers = () => {
    for (let i = 1; i < 100; i += 2) {
        console.log(i);
    } 
}

// positiveNumbers();

// 2.  Make a program that prints all positive numbers that are smaller than
//     100 and even, in this order: 2 98 4 96 6 94... Print result in one line.

const positiveNumbersDifferentOrder = () => {
    let result = '';

    for (let i = 2; i <= 50; i += 2) {
        result += ' ' + i;
        if (i !== 50) {
            result += ' ' + (100 - i); 
        }
    }
    console.log(result);
}

// positiveNumbersDifferentOrder();

// 3.  Make a program that asks repeatedly from the user the distance (km) and
//     time (h) and calculates average speed. The program ends when user gives
//     0 for the distance. (After getting 0, the program does not ask anything
//     from the user.)

const averageSpeed = () => {
    let distance = parseFloat(prompt('What is the distance? (km)'));
    if (distance === 0) {
        return;
    }

    let time = parseFloat(prompt('How long does it take? (h)'));
    alert(`The average speed is: ${distance/time} km/h`);
}

// averageSpeed();

// 4.  Make a program that asks 20 numbers from user. After that the program
//     prints out how many of those numbers where even.

const howManyEven = () => {
    let count = 0;
    for (let i = 0; i < 20; i++) {
        let num = parseInt(prompt('Give a number:'));
        if (num % 2 === 0) {
            count++;
        }
    }
    console.log(`${count} of those numbers were even.`);
}

// howManyEven();

// 5.  Make a program that asks numbers from the user, until user gives 0 and
//     then program ends. In the end program prints out average of the numbers.

const averageOfNumbers = () => {
    let num;
    let sum = 0;
    let count = 0;
    do {
        num = parseInt(prompt('Please, give a number:'));
        if (num !== 0) {
            sum += num;
            count++;
        }
    } while (num !== 0);
    console.log(`Average of the numbers is: ${sum/count}`);
}

// averageOfNumbers();

// 6.  Make a program that asks 25 numbers form the user. In the end program
//     printsout average of the numbers.

const twentyNumbersAverage = () => {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < 25; i++) {
        sum += parseInt(prompt('Please, give a number:'))
        count++;
    }
    console.log(sum/count);
}

// twentyNumbersAverage();

// 7.  Make a program that ask first one number from the user. After that the
//     program asks: "Do you want to continue giving numbers?(y/n)". If user
//     answers y, the program continues to ask another number. If user answers
//     n, program ends. In the end program prints out average of the numbers.

const areYouSure = () => {
    let sum = 0;
    let answer = true;
    let count = 0;

    while (answer === true) {
        sum += parseInt(prompt('Please, give a number:'));
        answer = confirm('Do you want to continue giving numbers?(y/n)');
        count++;
    }
    console.log(`The average of the numbers is: ${sum / count}`);
}

// areYouSure();

// 8.  Make a program that asks first how many numbers user wants to give to
//     the program. After that program asks those numbers. In the end program
//     prints out the smallest number that user gave.

const smallestNumber = () => {
    const numberAmount = parseInt(prompt('How many numbers do you want to give?'));
    let smallestNumber = Infinity;
    for (let i = 0; i < numberAmount; i++) {
        let newNumber = parseInt(prompt('Please, give a number:'));
        if (newNumber < smallestNumber) {
            smallestNumber = newNumber;
        }
    }
    console.log(`This is the smallest number you gave: ${smallestNumber}`);
}

// smallestNumber();

// 9.  Make a program that asks ten numbers and in the end prints out two
//     biggest numbers.

const twoBiggest = () => {
    let biggestNumber = -Infinity;
    let secondBiggestNumber = -Infinity;

    for (let i = 0; i < 10; i++) {
        let newNumber = parseInt(prompt('Please, give a number:'));
        if (newNumber > biggestNumber) {
            secondBiggestNumber = biggestNumber
            biggestNumber = newNumber;
        } else if (newNumber > secondBiggestNumber) { // in case of giving descending values
            secondBiggestNumber = newNumber;
        }
    }
    console.log(`This is the biggest number you gave: ${biggestNumber}, and this is the second biggest: ${secondBiggestNumber}.`);
}

// twoBiggest();

// 10. Make a program that asks ten numbers. Program calculates and prints out
//     sum and average, also prints out the smallest and biggest number.

const smallestAndBiggest = () => {
    let biggestNumber = -Infinity;
    let smallestNumber = Infinity;
    let sum = 0;
    for (let i = 0; i < 10; i++) {
        let newNumber = parseInt(prompt('Please, give a number:'));
        if (newNumber > biggestNumber) {
            biggestNumber = newNumber;
        } 
        if (newNumber < smallestNumber) {
            smallestNumber = newNumber;
        }
        sum += newNumber;
    }
    console.log(`From the 10 numbers you gave, the biggest one is ${biggestNumber}, the smallest one is ${smallestNumber}, the sum is ${sum} and the average is ${sum/10}.`);
}

// smallestAndBiggest();
