document.addEventListener('DOMContentLoaded', () => {
  const themeToggleButton = document.getElementById('theme-toggle');
  const body = document.body;

  themeToggleButton.addEventListener('click', (event) => {
    event.preventDefault(); // Prevê o comportamento padrão do link
    if (body.classList.contains('light-theme')) {
      body.classList.replace('light-theme', 'dark-theme');
      themeToggleButton.innerHTML = '<i class="fa fa-sun fa-2x"></i><span class="nav-text">Tema Claro/Escuro</span>';
    } else {
      body.classList.replace('dark-theme', 'light-theme');
      themeToggleButton.innerHTML = '<i class="fa fa-moon fa-2x"></i><span class="nav-text">Tema Claro/Escuro</span>';
    }
  });
});
