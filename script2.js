document.addEventListener('DOMContentLoaded', () => {
    // 1. Controle da Frase do Dia com Acessibilidade
    const botao = document.getElementById('btn-mensagem');
    const mensagem = document.getElementById('mensagem-secreta');

    if (botao && mensagem) {
        botao.addEventListener('click', () => {
            const estaExpandido = botao.getAttribute('aria-expanded') === 'true';

            botao.setAttribute('aria-expanded', String(!estaExpandido));
            mensagem.hidden = estaExpandido;
            botao.textContent = estaExpandido ? 'Descobrir frase do dia' : 'Ocultar frase do dia';
        });
    }

    // 2. Rolagem dos Carrosséis via Botões Laterais
    document.querySelectorAll('.carousel-wrapper').forEach(wrapper => {
        const grid = wrapper.querySelector('.hobby-grid');
        const btnPrev = wrapper.querySelector('.scroll-btn.prev');
        const btnNext = wrapper.querySelector('.scroll-btn.next');

        if (grid && btnPrev && btnNext) {
            btnPrev.addEventListener('click', () => {
                grid.scrollBy({ left: -320, behavior: 'smooth' });
            });

            btnNext.addEventListener('click', () => {
                grid.scrollBy({ left: 320, behavior: 'smooth' });
            });
        }
    });
});