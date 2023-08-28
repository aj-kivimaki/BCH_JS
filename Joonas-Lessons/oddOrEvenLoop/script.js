const oddOrEven = () => {
    let num = 0;

    do {
        num = parseInt(prompt('Please, give a number:'));

        if (num === 0) {
            return alert('You have ended the program.');
        }
    } while (num < 0) {
        alert('Please, give a POSITIVE number:');
    }
    
    let word = '';
    if (num % 2 === 0) {
        word = 'even';
    } else {
        word = 'odd';
    }

    console.log(`Number ${num} is ${word}.`);
    oddOrEven();
}

oddOrEven();
