'use strict';

// ── Throttle utility ─────────────────────
function throttle(fn, delay) {
  let last = 0;
  return (...args) => {
    const now = Date.now();
    if (now - last >= delay) { last = now; fn(...args); }
  };
}

// ── Navbar scroll (solo en hero pages sin navbar--solid) ──────────────
(function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar || navbar.classList.contains('navbar--solid')) return;

  function onScroll() {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  }
  window.addEventListener('scroll', throttle(onScroll, 80), { passive: true });
  onScroll();
})();

// ── Mobile menu ────────────────────────────
(function initMobileMenu() {
  const toggle = document.getElementById('nav-toggle');
  const menu   = document.getElementById('mobile-menu');
  if (!toggle || !menu) return;

  const mLinks = menu.querySelectorAll('.mobile-link');

  function openMenu() {
    menu.classList.add('open');
    menu.setAttribute('aria-hidden', 'false');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }
  function closeMenu() {
    menu.classList.remove('open');
    menu.setAttribute('aria-hidden', 'true');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  toggle.addEventListener('click', () => {
    toggle.getAttribute('aria-expanded') === 'true' ? closeMenu() : openMenu();
  });
  mLinks.forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
})();

// ── Smooth scroll (solo en-page anchors) ───
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 90, behavior: 'smooth' });
  });
});

// ── Intersection Observer animations ───────
(function initAnimations() {
  const items = document.querySelectorAll('[data-anim]');
  if (!items.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const delay = parseInt(entry.target.dataset.delay || 0, 10);
      setTimeout(() => entry.target.classList.add('in-view'), delay);
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

  items.forEach(item => observer.observe(item));
})();

// ── Contact form ───────────────────────────
(function initContactForm() {
  const form    = document.getElementById('contact-form');
  const success = document.getElementById('form-success');
  const btn     = document.getElementById('submit-btn');
  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    let valid = true;
    form.querySelectorAll('[required]').forEach(field => {
      if (!field.value.trim()) {
        field.style.borderColor = '#ef4444';
        valid = false;
        field.addEventListener('input', () => { field.style.borderColor = ''; }, { once: true });
      }
    });
    if (!valid) return;

    btn.disabled = true;
    btn.innerHTML = '<span>Enviando...</span>';

    // Reemplazar con endpoint real cuando esté listo
    setTimeout(() => {
      form.style.opacity = '0';
      form.style.transition = 'opacity 0.3s';
      setTimeout(() => {
        form.hidden = true;
        success.hidden = false;
      }, 300);
    }, 1000);
  });
})();

// ── Parallax hero (solo index) ─────────────
(function initParallax() {
  const heroImg = document.querySelector('.hero-img');
  if (!heroImg || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  window.addEventListener('scroll', throttle(() => {
    heroImg.style.transform = `scale(1) translateY(${window.scrollY * 0.18}px)`;
  }, 16), { passive: true });
})();
