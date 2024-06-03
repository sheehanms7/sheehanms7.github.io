
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

const images = document.querySelectorAll('.gallery-slider img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentImageIndex = 0;

function showImage(index) {
  images.forEach((img, i) => {
    img.classList.toggle('active', i === index);
  });
}

prevButton.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex > 0) ? currentImageIndex - 1 : images.length - 1;
  showImage(currentImageIndex);
});

nextButton.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex < images.length - 1) ? currentImageIndex + 1 : 0;
  showImage(currentImageIndex);
});


const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  const name = document.querySelector('#name');
  const email = document.querySelector('#email');
  const message = document.querySelector('#message');

  if (!name.value || !email.value || !message.value) {
    e.preventDefault();
    alert('Please fill out all fields.');
  } else if (!validateEmail(email.value)) {
    e.preventDefault();
    alert('Please enter a valid email address.');
  }
});

function validateEmail(email) {
  const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return re.test(email);
}
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
