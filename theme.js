// Dark by default; a saved choice applies before the page is painted.
(() => {
  const root = document.documentElement;
  let theme = 'dark';
  try {
    const saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') theme = saved;
  } catch (_) { /* Storage may be unavailable in private browsing. */ }
  root.dataset.theme = theme;

  document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.theme-toggle');
    if (!button) return;
    const update = () => {
      const label = root.dataset.theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
      button.setAttribute('aria-label', label);
      button.title = label;
    };
    update();
    button.hidden = false;
    button.addEventListener('click', () => {
      root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
      update();
      try { localStorage.setItem('theme', root.dataset.theme); } catch (_) {}
    });
    window.addEventListener('storage', (event) => {
      if (event.key === 'theme' || event.key === null) {
        root.dataset.theme = event.newValue === 'light' ? 'light' : 'dark';
        update();
      }
    });
  });
})();
