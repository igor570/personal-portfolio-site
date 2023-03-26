import './style.css'

/*================== toggle icon navbar ================*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


/*================== scroll reveal ================*/

//Imported from https://scrollrevealjs.org
ScrollReveal({ 
    //reset: true, //Allows the animations to reset, 'true' for testing 
    distance: '80px',
    duration: 1000,
    delay: 200
});
    
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });



/*================== Text changing using typed.js ================*/

const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer','SEO Expert', 'YouTuber', 'Corgi Lover'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
