const hello = () => {
    // let userName = 'AJ';
    let userName = prompt('What is your name?');

    // let userQuestion = 'Should I have a rest?';
    let userQuestion = prompt('What are you thinking?');

    if (userName === '') {
        console.log('Hello!');
        console.log(`Anonymous asked: ${userQuestion}`);
    } else {
        console.log(`Hello ${userName}!`);
        console.log(`${userName} asked: ${userQuestion}`);
    }
}

const randomAnswer = () => {
    let randomNumber = Math.floor(Math.random() * 10);

    switch (randomNumber) {
        case 0:
            console.log('Sounds good!')
            break;
        case 1:
            console.log('I wouldn\'t do that!')
            break;
        case 2:
            console.log('Go for it!')
            break;
        case 3:
            console.log('If that\'s what you want!')
            break;
        case 4:
            console.log('Doesn\'t sound promising!')
            break;
        case 5:
            console.log('Let\'s go!')
            break;
        case 6:
            console.log('blaa')
            break;
        case 7:
            console.log('blaablaa')
            break;
        case 8:
            console.log('blaablaablaa')
            break;
        case 9:
            console.log('blaablaablaablaa')
            break;
    }
}

hello();
randomAnswer();
