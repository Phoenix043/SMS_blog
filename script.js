const navMenu = document.querySelector('.nav-menu');
const navToggle = document.querySelector('.nav-toggle');

function toggleMenu() {
    navMenu.classList.toggle('active');
}

navToggle.addEventListener('click', toggleMenu);

// Close the menu when a menu item is clicked
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) {
            toggleMenu();
        }
    });
});

// JavaScript code to scroll through images
const scrollingImages = document.querySelector('.scrolling-images');

// Clone the first image and append it to the scrolling container
const firstImageClone = scrollingImages.firstElementChild.cloneNode(true);
scrollingImages.appendChild(firstImageClone);


