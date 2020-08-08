'use strict';
const buttons = document.querySelectorAll('.button');
buttons.forEach(function(button) {
    button.addEventListener('click', function(event) {
        alert("Товар добавлен в корзину");
    })
});