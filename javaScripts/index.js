// Get references to the hamburger button and the mobile menu toggle button
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

// Add an event lister to hamburger button and the menu toogle buttons
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  menu.classList.toggle('active');
});

// toogle the active class to show/hide the menu 
document.querySelectorAll('.menu').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  menu.classList.remove('active');
}));