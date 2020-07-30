'use strict';

const modal = document.querySelector('.text');
const closeBtn = document.querySelector('span');
const showBtn = document.querySelector('button');

closeBtn.addEventListener('click', function () {
    modal.classList.add('hidden');
});

showBtn.addEventListener('click', function () {
    modal.classList.remove('hidden');
});