// Mobile menu 

const mobileMenu = document.querySelector('.mobile-menu');
const desktopMenu = document.querySelector('.desktop-menu');

// addEventListener-listener 

mobileMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  desktopMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
  desktopMenu.classList.remove('active');
}));

//= ============= Popup Window, Dynamic Rendering==============>

let html = '';
const projectsArray = [
  {
    id: 0,
    mobileName: 'Tonic',
    desktopName: 'Tonic',
    devDetails: ['CANOPY', 'Back End Dev', 2015],
    description: ['A daily  selection of privately personalized reads; no accounts or sign-ups required.', 'A daily  selection of privately personalized reads; no accounts or sign-ups required.'],
    technologies: ['HTML', 'Ruby on Rails', 'CSS', 'JavaScript'],
    mobileImage: './images/mobileImg1.jpg',
    desktopImage: './images/deskImg1.png',
  },
  {
    id: 1,
    mobileName: 'Multi-Post Stories',
    desktopName: 'Multi-Post Stories',
    devDetails: ['FACEBOOK', 'Full Stack Dev', 2015],
    description: ['A daily  selection of privately personalized reads; no accounts or sign-ups required.', 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.'],
    technologies: ['HTML', 'Ruby on Rails', 'CSS', 'JavaScript'],
    mobileImage: './images/mobileImg2.jpg',
    desktopImage: './images/deskImg2.png',
  },
  {
    id: 2,
    mobileName: 'Tonic',
    desktopName: 'FACEBOOK 360',
    devDetails: ['FACEBOOK', 'Full Stack Dev', 2015],
    description: ['A daily  selection of privately personalized reads; no accounts or sign-ups required.', 'Exploring the future of media in Facebooks first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.'],
    technologies: ['HTML','Ruby on Rails', 'CSS', 'JavaScript'],
    mobileImage: './images/mobileImg3.jpg',
    desktopImage: './images/deskImg3.png',
  },
  {
    id: 3,
    mobileName: 'Multi-Post Stories',
    desktopName: 'Uber Navigation',
    devDetails: ['Uber', 'Lead Developer', 2018],
    description: ['A daily  selection of privately personalized reads; no accounts or sign-ups required.', 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.'],
    technologies: ['HTML', 'Ruby on Rails', 'CSS', 'JavaScript'],
    mobileImage: './images/mobileImg4.jpg',
    desktopImage: './images/deskImg4.jpg',
  },
];

projectsArray.forEach((card) => {
  html += `
  <div class="work">
  <div class="img-card">
      <img src="${card.mobileImage}" alt="" class="mobile">
      <img src="${card.desktopImage}" alt="" class="desktop">
  </div>
  <div class="card-contents">
      <h2 class="card-title mobile">${card.mobileName}</h2>
      <h2 class="card-title desktop">${card.desktopName}</h2>
      <div class="counter">
        <span>${card.devDetails[0]}</span>
        <span class="counters"></span>
        <span>${card.devDetails[1]}</span>
        <span class="counters"></span>
        <span>${card.devDetails[2]}</span>
      </div>
      <p class="card-desc mobile">${card.description[0]}</p>
      <p class="card-desc desktop">${card.description[1]}</p>
      <ul class="tech">
          <li class="tech-item"><a href="" class="tech-link">${card.technologies[0]}</a></li>
          <li class="tech-item" id="deskTech-item"><a href="" class="tech-link" id="deskTech-link">${card.technologies[1]}</a></li>
          <li class="tech-item"><a href="" class="tech-link">${card.technologies[2]}</a></li>
          <li class="tech-item"><a href="" class="tech-link">${card.technologies[3]}</a></li>
      </ul>
      <button type="button" class="work-btn">See Projects</button>
  </div>
</div>`;
});

const workSection = document.querySelector('.work-section');
workSection.innerHTML = html;

// Popup-Modal-window

const workBtn = document.querySelectorAll('.work-btn');
const popupContainer = document.querySelector('.modalContainer');

for (let i = 0; i < workBtn.length; i += 1) {
  workBtn[i].addEventListener('click', () => {
    const mobilePopuoModalTitle = popupContainer.querySelector('.mobileModalTitle');
    const desktopPopupModalTitle = popupContainer.querySelector('.desktopModalTitle');

    const companyA = popupContainer.querySelector('.canopy');
    const backEndDevA = popupContainer.querySelector('.back-end-dev');
    const yearA = popupContainer.querySelector('.year');

    const mobileTextA = popupContainer.querySelector('.mobilePopupText');
    const desktopTextA = popupContainer.querySelector('.desktopPopupText');

    const mobilepopupImg = popupContainer.querySelector('.mobilePopupImg');
    const desktoppopupImg = popupContainer.querySelector('.desktopPopupImg');

    mobilePopuoModalTitle.textContent = projectsArray[i].mobileName;
    desktopPopupModalTitle.textContent = projectsArray[i].desktopName;

    // using the array for destructuring 

    const [companyB, backEndDevB, yearB] = projectsArray[i].devDetails;
    const [mobileTextB, desktopTextB] = projectsArray[i].description;

    mobileTextA.textContent = mobileTextB;
    desktopTextA.textContent = desktopTextB;

    companyA.textContent = companyB;
    backEndDevA.textContent = backEndDevB;
    yearA.textContent = yearB;

    mobilepopupImg.setAttribute('src', projectsArray[i].mobileImage);
    desktoppopupImg.setAttribute('src', projectsArray[i].desktopImage);

    popupContainer.classList.remove('show-none');
  });
}

// close-popup-x button

const closeBtn = document.querySelector('.close-popup-x');
closeBtn.addEventListener('click', () => {
  popupContainer.classList.add('show-none');
});

// FORM VALIDATION

// Validate Contact Form

// Validate Contact Form

const form = document.querySelector('#form');
const email = document.getElementById('email');
const errorMessage = document.querySelector('.return-error-message');

function showErrorMessage() {
  if (email.value.trim() !== email.value.trim().toLowerCase()) {
    errorMessage.textContent = '"EMAIL ADDRESS NOT ENTERED CORRECTLY".❌ Kindly use lowercase characters for your email address using this format: "contactme1@gmail.com".';
  }
}

function clearErrorMessage() {
  errorMessage.textContent = 'CONGRATULATIONS! 🤝👏 Form Successfully Submitted ✅';
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  clearErrorMessage();

  if (email.value.trim() !== email.value.trim().toLowerCase()) {
    showErrorMessage();

  } else {
    form.submit();
  }
});
