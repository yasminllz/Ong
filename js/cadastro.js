// aqui ele aplica máscaras automaticamente aos campos de CPF, CEP e telefone, inserindo pontos, traços e parênteses enquanto o usuário digita.
function mascara(id, formato) {
  document.getElementById(id).oninput = function () {
    var numeros = this.value.replace(/\D/g, '');
    var texto = '', n = 0;
    for (var i = 0; i < formato.length && n < numeros.length; i++) {
      if (formato[i] == '9') { texto += numeros[n]; n++; }
      else { texto += formato[i]; }
    }
    this.value = texto;
  };
}
mascara('cpf', '999.999.999-99');
mascara('cep', '99999-999');
mascara('tel', '(99) 99999-9999');

document.getElementById('form').onsubmit = function (e) {
  e.preventDefault();
  var msg = document.getElementById('msg');
  if (this.checkValidity()) {                                  //verifica se os campos são validos pelo que esta sendo exigencido do html :)
    msg.className = 'ok';
    msg.textContent = 'Cadastro enviado! Em breve entraremos em contato.';
    this.reset();
  } else {
    this.reportValidity();
    msg.className = 'erro';
    msg.textContent = 'Corrija os campos destacados.';
  }
};
