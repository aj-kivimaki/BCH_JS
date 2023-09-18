const body = document.querySelector('body');
const color1 = document.querySelector('#color1');
const color2 = document.querySelector('#color2');


const gradient = document.querySelector('#gradient');
const cssCode = document.querySelector('#css-code');

let code;

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

    if (direction === 'circle') {
        code = `radial-gradient(${direction}, ${color1.value} 10%, ${color2.value} 50%)`;
    } else if (direction === 'conic') {
        code = `conic-gradient(${color1.value}, ${color2.value})`;
    } else {
        code = `linear-gradient(${direction}, ${color1.value}, ${color2.value})`;
    }

    cssCode.textContent = code;
    gradient.style.background = code;    
}

body.addEventListener('change', createGradient);
