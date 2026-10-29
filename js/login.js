// Contas que já existem (não há cadastro salvo)
var contas = [
  { email: 'admin@vidaanimal.org', senha: 'admin123', nome: 'Administração', tipo: 'admin', pagina: 'admin/painel.html' },
  { email: 'leonardo@voluntario.com', senha: 'voluntario123', nome: 'leonardo quispe', tipo: 'voluntario', pagina: 'voluntario/painel.html' },
  { email: 'yasmin@doador.com', senha: 'doador123', nome: 'yasmin jhocelin', tipo: 'doador', pagina: 'doador/painel.html' }
];

var tipoSolicitado = new URLSearchParams(location.search).get('tipo');
var nomesTipos = { admin: 'Administrador', voluntario: 'Voluntário', doador: 'Doador' };
if (tipoSolicitado && nomesTipos[tipoSolicitado]) { document.getElementById('t').textContent = 'Entrar como ' + nomesTipos[tipoSolicitado]; }

document.getElementById('form').onsubmit = function (e) {
  e.preventDefault();
  var email = document.getElementById('email').value;
  var senha = document.getElementById('senha').value;
  var conta = contas.find(function (c) { return c.email == email && c.senha == senha; });

  if (conta && (!tipoSolicitado || conta.tipo == tipoSolicitado)) {
    sessionStorage.setItem('usuario', JSON.stringify(conta)); // só lembra quem entrou
    location.href = conta.pagina;
  } else {
    var mensagem = document.getElementById('msg');
    mensagem.className = 'form-feedback erro';
    mensagem.textContent = conta ? 'Esta conta não corresponde ao perfil selecionado.' : 'E-mail ou senha incorretos.';
    if (typeof mostrarToast === 'function') mostrarToast(mensagem.textContent, 'erro');
  }
};
