'use strict';

// ── Portfolio Filter ───────────────────────
(function initPortfolioFilter() {
  const grid    = document.getElementById('projects-grid');
  const empty   = document.getElementById('portfolio-empty');
  const filters = document.getElementById('portfolio-filters');
  if (!grid || !filters) return;

  function updateEmpty() {
    const visible = grid.querySelectorAll('.project-card:not([hidden])');
    empty.classList.toggle('hidden', visible.length > 0);
  }

  filters.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;

    // Update active button
    filters.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;
    const cards  = grid.querySelectorAll('.project-card');

    cards.forEach(card => {
      if (filter === 'all' || card.dataset.category === filter) {
        card.hidden = false;
        card.style.animation = 'fadeInCard 0.3s ease-out forwards';
      } else {
        card.hidden = true;
      }
    });

    updateEmpty();
  });

  // Init: check if empty on load
  updateEmpty();
})();
