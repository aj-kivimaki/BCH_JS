const body = document.querySelector('body');
const color1 = document.querySelector('#color1');
const color2 = document.querySelector('#color2');

const gradient = document.querySelector('#gradient');
const cssCode = document.querySelector('#css-code');

const createGradient = () => {
    /* const direction = document.querySelector('input[name="direction"]:checked');
    const code = `linear-gradient(${direction.value}, ${color1.value}, ${color2.value})`; */
    
    // option 2
    
    let direction, code;
    const directions = document.querySelectorAll('input[name="direction"]');

    for (const item of directions) {
        if (item.checked) {
            direction = item.value;
        }
    }
    code = `linear-gradient(${direction}, ${color1.value}, ${color2.value})`;

    gradient.style.background = code;
    cssCode.textContent = code;
}

body.addEventListener('change', createGradient);
