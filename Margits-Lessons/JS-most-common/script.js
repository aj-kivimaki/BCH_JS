const backToTopBtn = document.querySelector('#backToTop');
const hamburger = document.querySelector('.mobile');
const nav = document.querySelector('nav ul');
const menuItems = document.querySelectorAll('nav ul li a');
const header = document.querySelector('header');

const getToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

const mobMenu = () => {
    /* closes the menu when clicked */
    for (const item of menuItems) {
        item.addEventListener('click', mobMenu);
    }

    /* if (nav.classList.contains('responsive')) {
        nav.classList.remove('responsive');
    } else {
        nav.classList.add('responsive');
    } */
    nav.classList.toggle('responsive');
}

backToTopBtn.addEventListener('click', getToTop);
hamburger.addEventListener('click', mobMenu);


// browser onscroll event trigger
window.onscroll = function() {
    scrollFunction()
};

// code from W3S about scrolling, for two browsers
function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
  
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.classList.add('bg');
    } else {
        header.classList.remove('bg');
    }
}

/* create .hide and .show classes */
