(() => {
  const toggle = document.querySelector('[data-nav-toggle]');
  if (toggle) {
    toggle.addEventListener('click', () => {
      const open = document.body.classList.toggle('nav-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  const search = document.querySelector('[data-faq-search]');
  if (!search) return;
  const items = Array.from(document.querySelectorAll('[data-faq-item]'));
  const categories = Array.from(document.querySelectorAll('[data-faq-group]'));
  const filter = () => {
    const term = search.value.trim().toLowerCase();
    items.forEach((item) => {
      const text = item.innerText.toLowerCase();
      item.style.display = text.includes(term) ? '' : 'none';
    });
    categories.forEach((group) => {
      const visible = group.querySelectorAll('[data-faq-item]:not([style*="display: none"])');
      group.style.display = visible.length ? '' : 'none';
    });
  };
  search.addEventListener('input', filter);
  const btn = document.querySelector('[data-faq-search-btn]');
  if (btn) btn.addEventListener('click', filter);
})();
