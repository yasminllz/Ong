// Confere quem entrou; se não for o tipo certo, volta para o login
var usuario = JSON.parse(sessionStorage.getItem('usuario'));
if (!usuario || usuario.tipo != 'voluntario') { location.href = '../login.html'; }
document.getElementById('ola').textContent = 'Olá, ' + (usuario ? usuario.nome : '') + '!';
document.getElementById('sair').onclick = function () { sessionStorage.clear(); };

//  aqui faz Botões de candidatura 
document.querySelectorAll('.candidatar').forEach(function (botao) {
  botao.onclick = function () {
    botao.textContent = 'Candidatura enviada ✔';
    botao.disabled = true;
  };
});
