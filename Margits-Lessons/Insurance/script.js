// initial scores 
const BASE_SCORE = 500;
let totalScore = 0;

// select submit button and area for showing total points
let button = document.querySelector('button');
let showPointsArea = document.querySelector('#showPoints');
let showFirstnameArea = document.querySelector('#showFirstname');

// calculate the total score depending on all the conditions and display it 
const submit = (e) => {

    // prevent auto-reloading the page
    e.preventDefault();
    
    // get name input value
    let firstName = document.querySelector('#firstName').value;

    // calculate all the points depending on health conditions
    totalScore += agePoints();
    totalScore += currentHealthPoints();
    totalScore -= healthyPoints();
    totalScore += unhealthyPoints();

    // show the name and the total score at the end of the document
    showPointsArea.textContent = `${firstName}, your insurance risk score is ${Math.floor(totalScore)}.`;
}

const agePoints = () => {

    // get age input value
    let age = document.querySelector('#age').value;
    
    // calculate the score depending on the age
    let score = BASE_SCORE;
    
    if (age >= 18 && age <=25) {score *= 1.1;}
    if (age >= 26 && age <=35) {score *= 1.3;}
    if (age >= 36 && age <=45) {score *= 1.6;}
    if (age >= 46 && age <=55) {score *= 2.0;}
    if (age >= 56 && age <=65) {score *= 2.5;}
    if (age > 66) {score *= 3.1;}

    // return the score
    return score;
}

const currentHealthPoints = () => {

    // select all current health boxes
    let currentHealthBoxes = document.querySelectorAll('.currentHealth');

    // calculate the health boxes checked
    let checkedCurrentHealthBoxes = 0;

    // iterate through all current health boxes
    for (const box of currentHealthBoxes) {
        if (box.checked === true) {
            checkedCurrentHealthBoxes++;
        }
    }

    // return current health condition score, increase of 1%
    return checkedCurrentHealthBoxes * (0.01 * totalScore);
}

const healthyPoints = () => {
    
    // select all good health habit boxes
    let goodHealthHabitBoxes = document.querySelectorAll('.goodHealthHabit');

    // calculate the good health habit boxes checked
    let checkedGoodHealthHabitBoxes = 0;

    // iterate through all good health habit health boxes
    for (const box of goodHealthHabitBoxes) {
        if (box.checked === true) {
            checkedGoodHealthHabitBoxes++;
        }
    }

    // return current good health habit score, decrease of 5%
    return checkedGoodHealthHabitBoxes * (0.05 * totalScore);
}

const unhealthyPoints = () => {

    // select all unhealthy habit boxes
    let unhealthyHabitBoxes = document.querySelectorAll('.unhealthyHabit');

    // calculate the unhealthy habit boxes checked
    let checkedUnhealthyHabitBoxes = 0;

    // iterate through all unhealthy habit health boxes
    for (const box of unhealthyHabitBoxes) {
        if (box.checked === true) {
            checkedUnhealthyHabitBoxes++;
        }
    }

    // return current unhealthy habit score, increase of 5%
    return checkedUnhealthyHabitBoxes * (0.05 * totalScore);
}

// add event lister to call the submit function when clicked
button.addEventListener('click', submit);
