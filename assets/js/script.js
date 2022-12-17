const btnMenu = document.getElementById('navegacao__botaoMenu');

const listaMenu = document.querySelector('.navegacao__listaLinks');

const hamburguer = document.querySelector('.hamburguer');

function menuShow(event) {

    listaMenu.classList.toggle('ativado');

    hamburguer.classList.toggle('ativado');

    // ACESSIBILIDADE
    if (event.type == 'touchstart') event.preventDefault();

    const ativado = listaMenu.classList.contains('ativado');

    event.currentTarget.setAttribute('aria-expanded', ativado);

    if (ativado) {
        event.currentTarget.setAttribute('aria-label', 'Botão fechar menu');
    } else {
        event.currentTarget.setAttribute('aria-label', 'Botão abrir menu');
    }

}

btnMenu.addEventListener('click', menuShow);
btnMenu.addEventListener('touchstart', menuShow);