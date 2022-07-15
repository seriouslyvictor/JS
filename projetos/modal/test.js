'use strict';
const skin = document.querySelectorAll('.skin');
// list of elements
// <button class="skin skin--1">

const skinModal = document.querySelectorAll('.skin-modal');
const overlay = document.querySelector('.overlay');
const close = document.querySelectorAll('.close');
/*
<div class="skin-modal">
        <img class="skin-modal__img" src="img/Bard_AstronautSkin.jpg" alt="" />
      </div>
*/
const addClasses = function () {
  for (let i = 0; i < skinModal.length; i++) {
    skinModal[i].classList.add('hidden');
    overlay.classList.add('hidden');
  }
};

const removeClasses = function () {
  for (let i = 0; i < skin.skinModal; i++) {
    skinModal[i].classList.remove('hidden');
    overlay.classList.remove('hidden');
  }
};

console.log(skinModal);
for (let i = 0; i < skin.length; i++) {
  skin[i].addEventListener('click', function () {
    skinModal[i].classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}

for (let i = 0; i < close.length; i++) {
  close[i].addEventListener('click', function () {
    skinModal[i].classList.add('hidden');
    overlay.classList.add('hidden');
  });
}

overlay.addEventListener('click', function () {
  addClasses();
});

document.addEventListener('keydown', function (ev) {
  if (ev.key === 'Escape') {
    addClasses();
  }
});
