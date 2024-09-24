'use strict';


const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal'); // if you querySelector use for multiple class, querySelector will select only first one.

const openModal = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closeModal =  function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for(let i = 0; i < btnsOpenModal.length; i++){
    btnsOpenModal[i].addEventListener('click', openModal); 
}


btnCloseModal.addEventListener('click', closeModal); // we dont use closeModal() because if we do this, js will invoke this function immediately.
overlay.addEventListener('click', closeModal);

// keyboard events -> global events > we can listen whole document
// keydown -> as soon as we just press down keyboard (any key), keyup -> when we lift up our finger from keyboard, keypress -> continuesly keep our finger on keyboard
document.addEventListener('keydown', function(e){
    console.log(e.key);

    if(e.key === "Escape" && !modal.classList.contains('hidden')){
        closeModal();
    }
})