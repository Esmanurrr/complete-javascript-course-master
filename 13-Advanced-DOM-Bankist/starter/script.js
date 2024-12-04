'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

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


////////////////////////////////////////////////////////////

// ------------------------- SELECTING, CREATING AND DELETING ELEMENTS ------------------------


// * Selecting elements
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


// * Creating and inserting elements

const message = document.createElement('div');
message.classList.add('cookie-message');
message.textContent = 'We use cookies for improved functionality and analytics.'
message.innerHTML =  'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it</button>'

header.prepend(message);
header.append(message); // element only inserted once, not in both top and end. append method is moved the element.
// each dom element is unique. so it can always only exist at one place at a time
// header.append(message.cloneNode(true)); // all element in message are coppied - but that is not make sense

// header.before(message);
// header.after(message);


// * Delete elements

document.querySelector('.btn--close-cookie').addEventListener('click', function(){
  message.remove();
  // message.parentElement.removeChild(message); // oldest way
})