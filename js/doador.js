// Confere quem entrou; se não for o tipo certo, volta para o login
var usuario = JSON.parse(sessionStorage.getItem('usuario'));
if (!usuario || usuario.tipo != 'doador') { location.href = '../login.html'; }
document.getElementById('ola').textContent = 'Olá, ' + (usuario ? usuario.nome : '') + '!';
document.getElementById('sair').onclick = function () { sessionStorage.clear(); };

// Formulário de doação
document.getElementById('fd').onsubmit = function (e) {
  e.preventDefault();
  alert('Obrigado pela doação de R$ ' + document.getElementById('vl').value + '!');
  this.reset();
};
