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

// Dynamically generate the cards section

// storing data in javaScript dynamically


const cardsArray = [
  {
    id: 1,
    mobileTitle: 'Tonic',
    desktopTitle: 'Tonic',
    detail: ['CANOPY', 'Back End Dev', 2015],
    description: "A daily  selection of privately personalized reads; no accounts or sign-ups required.', 'A daily  selection of privately personalized reads; no accounts or sign-ups required.",
    stack: ['html', 'css', 'javaScript'],
    mobileImage: './images/ENSSAH\ FAYIA\ MOMOH.jpg',
    desktopImage: '....',
    seeProjectBtn: 'See Projects',
    // seeliveLink: '###',
    // seeSourceLink: '###',
  },
  {
    id: 2,
    mobileTitle: 'Multi-Post Stories',
    desktopTitle: 'Multi-Post Stories',
    detail: ['FACEBOOK', 'Full Stack Dev', 2015],
    description: "A daily  selection of privately personalized reads; no accounts or sign-ups required.', 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.",
    stack: ['html', 'css', 'javaScript'],
    mobileImage: '....',
    desktopImage: '....',
    seeProjectBtn: 'See Projects',
    // seeliveLink: '###',
    // seeSourceLink: '###',
  },
  {
    id: 3,
    mobileTitle: 'Tonic',
    desktopTitle: 'FACEBOOK 360',
    detail: ['FACEBOOK', 'Full Stack Dev', 2015],
    description: "A daily  selection of privately personalized reads; no accounts or sign-ups required.', 'Exploring the future of media in Facebooks first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    stack: ['html', 'css', 'javaScript'],
    mobileImage: '....',
    desktopImage: '....',
    seeProjectBtn: 'See Projects',
    // seeliveLink: '###',
    // seeSourceLink: '###',
  },
  {
    id: 4,
    mobileTitle: 'Multi-Post Stories',
    desktopTitle: 'Uber Navigation',
    detail: ['Uber', 'Lead Developer', 2018],
    description: "'A daily  selection of privately personalized reads; no accounts or sign-ups required.', 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.'",
    stack: ['html', 'css', 'javaScript'],
    mobileImage: '....',
    desktopImage: '....',
    seeProjectBtn: 'See Projects',
    // seeliveLink: '###',
    // seeSourceLink: '###',
  },
];

