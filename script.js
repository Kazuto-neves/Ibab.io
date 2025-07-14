// Dark/Light mode toggle
const logo = document.getElementById('logo-toggle-mode');
let darkMode = true;
function setMode(dark) {
  document.body.classList.toggle('dark-mode', dark);
  logo.src = dark ? 'resouces/logo-black.png' : 'resouces/logo-White.png';
  document.querySelectorAll('h4').forEach(h => {
    if (h.textContent.includes('ALL IN')) {
      h.classList.add('all-in');
    }
  });
  document.querySelectorAll('h4').forEach(h => {
    if (h.querySelector('.bkids-b')) {
      h.style.textShadow = 'none';
    }
  });
}
logo.addEventListener('click', () => {
  darkMode = !darkMode;
  setMode(darkMode);
});
setMode(true);

// Dropdown: abre/fecha por clique
const dropdownGroups = document.querySelectorAll('.dropdown-group');
dropdownGroups.forEach(group => {
  const btn = group.querySelector('.dropdown-btn');
  const chevron = btn.querySelector('.fa-chevron-down');
  btn.addEventListener('click', function(e) {
    e.stopPropagation();
    // Fecha todos os outros
    dropdownGroups.forEach(g => {
      if (g !== group) {
        g.classList.remove('open');
        const otherChevron = g.querySelector('.fa-chevron-down');
        if (otherChevron) otherChevron.classList.remove('rotated');
      }
    });
    // Alterna este
    group.classList.toggle('open');
    if (chevron) chevron.classList.toggle('rotated', group.classList.contains('open'));
  });
});
// Fecha dropdown ao clicar fora
window.addEventListener('click', function(e) {
  dropdownGroups.forEach(group => {
    group.classList.remove('open');
    const chevron = group.querySelector('.fa-chevron-down');
    if (chevron) chevron.classList.remove('rotated');
  });
});
