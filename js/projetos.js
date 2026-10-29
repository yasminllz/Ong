// Filtro de projetos por categoria
var botoes = document.querySelectorAll('[data-f]');
var cartoes = document.querySelectorAll('[data-cat]');

botoes.forEach(function (b) {
  b.onclick = function () {
    cartoes.forEach(function (c) {
      c.hidden = b.dataset.f != 'todos' && c.dataset.cat != b.dataset.f;
    });
    botoes.forEach(function (x) { x.setAttribute('aria-pressed', x == b); });
  };
});
botoes[0].click();

// Barra da campanha: R$ 12.400 de R$ 20.000
var arrecadado = 12400, meta = 20000;
var porcentagem = Math.round(arrecadado / meta * 100);
document.getElementById('arrec').textContent = 'R$ ' + arrecadado.toLocaleString('pt-BR');
document.getElementById('prog').setAttribute('aria-valuenow', porcentagem);
setTimeout(function () { document.querySelector('#prog span').style.width = porcentagem + '%'; }, 100);
