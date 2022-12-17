const btnMenu = document.getElementById('navegacao__botaoMenu');

const listaMenu = document.querySelector('.navegacao__listaLinks');

const hamburguer = document.querySelector('.hamburguer');

function menuShow() {

    listaMenu.classList.toggle('ativado');

    hamburguer.classList.toggle('ativado');

}

btnMenu.addEventListener('click', menuShow);