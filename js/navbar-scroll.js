// Esconde a navbar ao rolar para baixo e mostra ao rolar para cima.
(() => {
    const navbar = document.querySelector('header.topo');
    if (!navbar) return;

    let ultimaPosicao = window.scrollY;
    const tolerancia = 8;

    window.addEventListener('scroll', () => {
        const posicaoAtual = window.scrollY;

        // Mantém a navbar visível no topo da página.
        if (posicaoAtual <= 80) {
            navbar.classList.remove('navbar-oculta');
            ultimaPosicao = posicaoAtual;
            return;
        }

        // Ignora pequenas oscilações para evitar que ela fique piscando.
        if (Math.abs(posicaoAtual - ultimaPosicao) < tolerancia) return;

        if (posicaoAtual > ultimaPosicao) {
            navbar.classList.add('navbar-oculta');
        } else {
            navbar.classList.remove('navbar-oculta');
        }

        ultimaPosicao = posicaoAtual;
    }, { passive: true });
})();
