'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

///////////////////////////////////////
// Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// ------- IMPLEMENTING SMOOTH SCROLLING ---------


// Button scrolling
btnScrollTo.addEventListener('click', function (e) {
  /*
  const s1coords = section1.getBoundingClientRect(); // coordinations of section 1
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect()); // coordinations of button (for viewport)

  console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset); // between scroll page and top of the page

  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  ); // current height and width of page

  Scrolling
  window.scrollTo(
    s1coords.left + window.pageXOffset, // current position + current scroll
    s1coords.top + window.pageYOffset
  ); // go to top and left of s1coords

  window.scrollTo({
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behavior: 'smooth'
  })
  */
  section1.scrollIntoView({behavior: 'smooth'});
});


// ----------------- PAGE NAVIGATION ---------------

// document.querySelectorAll('.nav__link').forEach(function(el) {
//   el.addEventListener('click', function(e){
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({behavior: 'smooth'}); // this way is not efficient because we did this event listening for each three element, what if the number of elements is 100000 ? 

//   })
// })

// 1. Add event listener to common parent element
// 2. Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function(e){
  console.log(e.target); // we can see the element with its id
  e.preventDefault();
  // Matching strategy
  if(e.target.classList.contains('nav__link')){
    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({behavior: 'smooth'});
  }
})






////////////////////////////////////////////////////////////

// ------------------------- SELECTING, CREATING AND DELETING ELEMENTS ------------------------
/*

* Selecting elements
console.log(document.documentElement); // html element with the contents
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section'); // NodeList
console.log(allSections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button'); // HTML Collection, if dom changes, this collection immediately updated
console.log(allButtons);

console.log(document.getElementsByClassName('btn')); // HTML Collection


* Creating and inserting elements

const message = document.createElement('div');
message.classList.add('cookie-message');
message.textContent = 'We use cookies for improved functionality and analytics.'
message.innerHTML =  'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it</button>'

header.prepend(message);
header.append(message); // element only inserted once, not in both top and end. append method is moved the element.
each dom element is unique. so it can always only exist at one place at a time
header.append(message.cloneNode(true)); // all element in message are coppied - but that is not make sense

header.before(message);
header.after(message);


* Delete elements

document.querySelector('.btn--close-cookie').addEventListener('click', function(){
  message.remove();
  ! message.parentElement.removeChild(message); // oldest way
});



* Styles
message.style.backgroundColor = "#37383d";
message.style.width = '120%';

console.log(message.style.height); // nothing
console.log(message.style.backgroundColor); //  #37383d, because style tag search the inline of code
* if you want to get all of the properties 
console.log(getComputedStyle(message));
console.log(getComputedStyle(message).color); 
console.log(getComputedStyle(message).height); 

message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangered');

* attributes 
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.className);

logo.alt = 'Beautiful minimalist logo'

* non-standard
console.log(logo.designer);
console.log(logo.getAttribute('designer')); // jonas - we created this attribute
logo.setAttribute('company', 'Bankisst');

console.log(logo.src);
console.log(logo.getAttribute('src'));

 const link = document.querySelector('.twitter-link');
 console.log(link.href);
 console.log(link.getAttribute('href')); // file path

const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href')); // #

* Data attributes 
console.log(logo.dataset.versionNumber);

* Classes
logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c');
logo.classList.contains('c');

! Don't use
logo.className = 'jonas';

*/


/*
const h1 = document.querySelector('h1');

const alertH1 = function(e){
  alert('addEventListener: Great! You are reading the heading :D ');

};

h1.addEventListener('mouseenter', alertH1);

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000)
*/

// h1.onmouseenter = function(e){
//   alert('addEventListener: Great! You are reading the heading :D ');
// };


// ---------- EVENT PROPAGATION IN PRACTICE --------------

// rgb(255, 255, 255)
/*
const randomInt = (min,max) => Math.floor(Math.random() * (max - min + 1) + 1);

const randomColor = () => `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

* addeventlistener is in bubbling phase as a default
document.querySelector('.nav__link').addEventListener('click', function(e){
  this.style.backgroundColor = randomColor(); // 'tihs' is document.querySelector('.nav__link')
  console.log('LINK', e.target, e.currentTarget);
  console.log(e.currentTarget === this); // true


  * Stop Propagation
  // e.stopPropagation(); // only nav link change backgroundcolor
});

document.querySelector('.nav__links').addEventListener('click', function(e){
  this.style.backgroundColor = randomColor();
  console.log('CONTAINER', e.target, e.currentTarget);
});

document.querySelector('.nav').addEventListener('click', function(e){
  this.style.backgroundColor = randomColor();
  console.log('NAV', e.target, e.currentTarget);
}, false); // first in order in capturing if the third parameter is 'true' - but its very rarely
*/