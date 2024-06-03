let lastScrollTop = 0;
const navbar = document.getElementById('navbar');


const showNavbarOnTop = () => {
    if (window.scrollY === 0) {
        navbar.style.top = '0';
    }
};


document.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        
        navbar.style.top = '-60px';
    } else {
      
        if (scrollTop === 0) {
            navbar.style.top = '0';
        }
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});


document.addEventListener('mousemove', (event) => {
    if (event.clientY < 60) {
        navbar.style.top = '0';
    } else {
        if (window.scrollY > 0) {
            navbar.style.top = '-60px';
        }
    }
});


window.addEventListener('load', showNavbarOnTop);
window.addEventListener('scroll', showNavbarOnTop);
