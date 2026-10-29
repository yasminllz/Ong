// Contadores animados dos números de impacto
document.querySelectorAll('[data-alvo]').forEach(function (el) {
  var alvo = +el.dataset.alvo, atual = 0, passo = Math.ceil(alvo / 60);
  var t = setInterval(function () {
    atual = Math.min(alvo, atual + passo);
    el.textContent = atual.toLocaleString('pt-BR');
    if (atual === alvo) clearInterval(t);
  }, 20);
});
