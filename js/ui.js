// Menu responsivo, dropdowns, modais e mensagens toast da interface.
document.addEventListener('DOMContentLoaded', function () {
  var menuBotao = document.querySelector('.menu-toggle');
  var menu = document.querySelector('#menu-principal');
  if (menuBotao && menu) {
    menuBotao.addEventListener('click', function () {
      var aberto = menuBotao.getAttribute('aria-expanded') === 'true';
      menuBotao.setAttribute('aria-expanded', String(!aberto));
      menu.classList.toggle('menu-aberto', !aberto);
      menuBotao.querySelector('.sr-only').textContent = aberto ? 'Abrir menu' : 'Fechar menu';
    });
  }
  document.querySelectorAll('.dropdown-toggle').forEach(function (botao) {
    botao.addEventListener('click', function () {
      
      var aberto = botao.getAttribute('aria-expanded') === 'true';
      document.querySelectorAll('.dropdown-toggle').forEach(function (outro) {
        outro.setAttribute('aria-expanded', 'false');
        outro.closest('.has-dropdown').classList.remove('dropdown-aberto');
      });
      botao.setAttribute('aria-expanded', String(!aberto));
      botao.closest('.has-dropdown').classList.toggle('dropdown-aberto', !aberto);
    });
  });
  document.querySelectorAll('[data-modal-open]').forEach(function (botao) {
    botao.addEventListener('click', function () {
      var modal = document.getElementById(botao.getAttribute('data-modal-open'));
      if (modal && typeof modal.showModal === 'function') modal.showModal();
    });
  });
  document.querySelectorAll('[data-modal-close]').forEach(function (botao) {
    botao.addEventListener('click', function () { botao.closest('dialog').close(); });
  });
  document.querySelectorAll('form').forEach(function (formulario) {
    formulario.querySelectorAll('input, select, textarea').forEach(function (campo) {
      campo.addEventListener('blur', function () {
        campo.classList.toggle('campo-invalido', !campo.checkValidity());
        campo.classList.toggle('campo-valido', campo.checkValidity() && campo.value.trim() !== '');
      });
      campo.addEventListener('input', function () {
        if (campo.classList.contains('campo-invalido') || campo.classList.contains('campo-valido')) {
          campo.classList.toggle('campo-invalido', !campo.checkValidity());
          campo.classList.toggle('campo-valido', campo.checkValidity() && campo.value.trim() !== '');
        }
      });
    });
  });
});

// Exibe feedback temporário sem bloquear a navegação.
function mostrarToast(mensagem, tipo) {
  var toast = document.createElement('div');
  toast.className = 'toast toast-' + (tipo || 'sucesso');
  toast.setAttribute('role', 'status');
  toast.textContent = mensagem;
  document.body.appendChild(toast);
  requestAnimationFrame(function () { toast.classList.add('toast-visivel'); });
  setTimeout(function () { toast.classList.remove('toast-visivel'); setTimeout(function () { toast.remove(); }, 250); }, 3200);
}
