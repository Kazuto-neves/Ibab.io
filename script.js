// Dark/Light mode toggle
const logo = document.getElementById('logo-toggle-mode');
let darkMode = true;
function setMode(dark) {
  // O CSS cuida do background e da cor do texto
  document.body.classList.toggle('dark-mode', dark);
  // Troca o logo
  logo.src = dark ? 'resouces/logo-black.png' : 'resouces/logo-White.png';
  // O CSS cuida dos fundos, cores e sombras dos elementos principais
  // ALL IN (nome e ícone) - adiciona classe para estilização via CSS
  document.querySelectorAll('h4').forEach(h => {
    if (h.textContent.includes('ALL IN')) {
      h.classList.add('all-in');
    }
  });
  // Bkids letras coloridas: agora via CSS
  document.querySelectorAll('h4').forEach(h => {
    if (h.querySelector('.bkids-b')) {
      h.style.textShadow = 'none';
    }
  });
  // Ícones: tudo via CSS
  // Botões dropdown: tudo via CSS
  // Parágrafos e textos: tudo via CSS
}
logo.addEventListener('click', () => {
  darkMode = !darkMode;
  setMode(darkMode);
});
// Inicializa modo escuro
setMode(true);
