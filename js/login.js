// Contas que já existem (não há cadastro salvo)
var contas = [
  { email: 'admin@vidaanimal.org', senha: 'admin123', nome: 'Administração', tipo: 'admin', pagina: 'admin/painel.html' },
  { email: 'leonardo@voluntario.com', senha: 'voluntario123', nome: 'leonardo quispe', tipo: 'voluntario', pagina: 'voluntario/painel.html' },
  { email: 'yasmin@doador.com', senha: 'doador123', nome: 'yasmin jhocelin', tipo: 'doador', pagina: 'doador/painel.html' }
];

document.getElementById('form').onsubmit = function (e) {
  e.preventDefault();
  var email = document.getElementById('email').value;
  var senha = document.getElementById('senha').value;
  var conta = contas.find(function (c) { return c.email == email && c.senha == senha; });

  if (conta) {
    sessionStorage.setItem('usuario', JSON.stringify(conta)); // só lembra quem entrou
    location.href = conta.pagina;
  } else {
    document.getElementById('msg').textContent = 'E-mail ou senha incorretos.';
  }
};
