
const randomAnswer = () => {
    // selects places where to display welcome the message and the answer
    const welcome = document.querySelector('#welcome');
    const answer = document.querySelector('#answer');

    // selects the place where to show the error message
    const errorMsg = document.querySelector('#errorMsg');

    // selects the areas where the welcome and answer messages will show (hidden before the answer)
    const show = document.querySelector('.hide');

    // saves the inputs
    const firstName = document.querySelector('#firstName').value;
    const question = document.querySelector('#question').value;
    
    // checks if either one of the inputs are empty, if so, error message is shown
    if (firstName === '' | question === '') {
        document.querySelector('body').style.backdropFilter = `blur(${7}px)`;
        errorMsg.textContent = 'Please, provide both your name and a question!';
        document.querySelector('#button').textContent = 'Refresh the page and try again!';
        return;
    }

    // creating the welcome message
    let hello = `Welcome ${firstName}! You were wondering: "${question}?"`;
    welcome.textContent = hello;

    // generates the random number and the answer
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
    // inserts the answer to be ready for revealing
    answer.textContent = text;

    // shows the welcome message and the anser, you can click the button only once before reloading the page
    show.classList.add('show');
}
