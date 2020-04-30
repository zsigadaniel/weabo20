const bringIt = document.querySelector('.bring-it button');
const main = document.querySelector('.main');


//Data reveal event listener

bringIt.addEventListener('click', () => {
    main.classList.add('reveal-main');
});