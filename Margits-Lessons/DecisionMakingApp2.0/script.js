/* const hello = () => {
    let userName;
    let userQuestion;

    if (userName === '') {
        console.log('Hello!');
        console.log(`Anonymous asked: ${userQuestion}`);
    } else {
        console.log(`Hello ${userName}!`);
        console.log(`${userName} asked: ${userQuestion}`);
    }
} */

const randomAnswer = () => {
    const welcome = document.querySelector('#welcome');
    const answer = document.querySelector('#answer');
    const show = document.querySelector('.hide');

    const firstName = document.querySelector('#firstName').value;
    const question = document.querySelector('#question').value;
    
    let hello = `Welcome ${firstName}! You were wondering: ${question}?`;
    welcome.textContent = hello;

    let text;
    let randomNumber = Math.floor(Math.random() * 10);

    switch (randomNumber) {
        case 0:
            text = 'Embrace the Unknown: Great adventures start with a single step into the unknown.';
            break;
        case 1:
            text = 'Grow Through Challenges: Challenges are stepping stones to a stronger you.';
            break;
        case 2:
            text = 'Seize Today\'s Opportunity: Today\'s decisions shape tomorrow\'s story.';
            break;
        case 3:
            text = 'Chase Your Dreams: Dare to chase the dreams that set your heart ablaze.';
            break;
        case 4:
            text = 'Craft Your Unique Path: Your choices weave the tapestry of your life.';
            break;
        case 5:
            text = 'Choose Courageously: Opt for the path that ignites your courage.';
            break;
        case 6:
            text = 'Inspire with Action: Your choices have the power to inspire others.';
            break;
        case 7:
            text = 'Unleash Your Potential: Uncover the incredible within by choosing boldly.';
            break;
        case 8:
            text = 'Live with No Regrets: Choose in a way that leaves no room for regrets.';
            break;
        case 9:
            text = 'Be You, Unapologetically: Make choices that align with your true self.';
            break;
    }
    answer.textContent = text;
    show.classList.toggle('show').click();
}
