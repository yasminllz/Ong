//  E onde verifica quem entrou; se não for o tipo certo, volta para o login
var usuario = JSON.parse(sessionStorage.getItem('usuario'));
if (!usuario || usuario.tipo != 'admin') { location.href = '../login.html'; }  // devolve para area de login
document.getElementById('ola').textContent = 'Olá, ' + (usuario ? usuario.nome : '') + '!';
document.getElementById('sair').onclick = function () { sessionStorage.clear(); };
