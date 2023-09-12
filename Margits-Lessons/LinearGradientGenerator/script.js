const createGradient = () => {
    document.querySelector('.gradient').style.background = `linear-gradient(${document.querySelector('input[type="radio"]:checked').value}, ${document.querySelector('#color1').value}, ${document.querySelector('#color2').value})`;
}

/* const createGradient = () => {
    const gradient = document.querySelector('.gradient');
    const color1 = document.querySelector('#color1').value;
    const color2 = document.querySelector('#color2').value;
    let direction = document.querySelector('input[type="radio"]:checked').value;
    gradient.style.background = `linear-gradient(${direction}, ${color1}, ${color2})`;
} */