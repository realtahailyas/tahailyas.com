/* ============================================
   TAHAILYAS.COM — Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // --- Navigation Scroll Effect ---
  const nav = document.querySelector('.nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 50);
    });
  }

  // --- Mobile Menu Toggle ---
  const burger = document.querySelector('.nav__burger');
  const navLinks = document.querySelector('.nav__links');

  if (burger && navLinks) {
    burger.addEventListener('click', () => {
      burger.classList.toggle('active');
      navLinks.classList.toggle('active');
      document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu on link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        burger.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  // --- Scroll Animations ---
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right').forEach(el => {
    observer.observe(el);
  });

  // --- Counter Animation ---
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = el.getAttribute('data-count');
        const prefix = el.getAttribute('data-prefix') || '';
        const suffix = el.getAttribute('data-suffix') || '';
        
        let numTarget = parseFloat(target);
        let duration = 2000;
        let startTime = null;

        function animate(currentTime) {
          if (!startTime) startTime = currentTime;
          const progress = Math.min((currentTime - startTime) / duration, 1);
          const easeOut = 1 - Math.pow(1 - progress, 3);
          const current = Math.floor(easeOut * numTarget);
          el.textContent = prefix + current.toLocaleString() + suffix;
          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            el.textContent = prefix + numTarget.toLocaleString() + suffix;
          }
        }

        requestAnimationFrame(animate);
        counterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('[data-count]').forEach(el => {
    counterObserver.observe(el);
  });

  // --- Active Nav Link ---
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // --- Smooth scroll for anchor links ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // --- Ventures: static-first, with optional JSON fallback ---
  // Preferred: [data-static-ventures] containers with hard-coded <article data-category=…> cards.
  // The filter bar toggles visibility on those static nodes (good for SEO + social previews).
  const staticVentureMount = document.querySelector('[data-static-ventures]');
  if (staticVentureMount) {
    wireStaticFilter(staticVentureMount);
  }

  // Legacy: [data-ventures] containers fetch from JSON. Kept for backwards compat.
  const ventureMount = document.querySelector('[data-ventures]');
  if (ventureMount && !ventureMount.hasAttribute('data-static-ventures')) {
    const mode = ventureMount.getAttribute('data-ventures'); // "featured" | "all"
    const dataPath = ventureMount.getAttribute('data-src') || 'data/ventures.json';

    fetch(dataPath)
      .then(r => r.json())
      .then(list => {
        const items = list
          .filter(v => mode === 'all' ? true : v.featured)
          .sort((a, b) => a.order - b.order);
        renderVentures(items, ventureMount);
        if (mode === 'all') wireFilter(items, ventureMount);
        ventureMount.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
      })
      .catch(err => {
        console.error('Ventures load failed', err);
      });
  }

  function wireStaticFilter(mount) {
    const filterBar = document.querySelector('[data-filter]');
    if (!filterBar) return;
    const children = Array.from(mount.children);
    filterBar.addEventListener('click', e => {
      const btn = e.target.closest('.filter-bar__btn');
      if (!btn) return;
      filterBar.querySelectorAll('.filter-bar__btn').forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      const cat = btn.getAttribute('data-cat');

      // Toggle cards, then hide any divider whose following group has nothing visible.
      let pendingDivider = null;
      children.forEach(child => {
        if (child.classList.contains('subsection-divider')) {
          if (pendingDivider) pendingDivider.style.display = 'none';
          pendingDivider = child;
          return;
        }
        if (!child.classList.contains('venture-card')) return;
        const match = cat === 'all' || child.getAttribute('data-category') === cat;
        child.style.display = match ? '' : 'none';
        if (match && pendingDivider) {
          pendingDivider.style.display = '';
          pendingDivider = null;
        }
      });
      if (pendingDivider) pendingDivider.style.display = 'none';
    });
  }

  function renderVentures(items, mount) {
    mount.innerHTML = items.map(v => ventureCardHTML(v)).join('');
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, c => ({
      '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
    })[c]);
  }

  function ventureCardHTML(v) {
    const statusLabel = {
      live: 'Live', launching: 'Launching', growing: 'Growing',
      internal: 'Internal', archived: 'Archived'
    }[v.status] || v.status;

    const stack = (v.stack || []).slice(0, 5).map(s =>
      `<span class="stack-pill">${escapeHtml(s)}</span>`).join('');

    const link = v.url
      ? `<a class="venture-card__link" href="${escapeHtml(v.url)}" target="_blank" rel="noopener">Visit →</a>`
      : `<span class="venture-card__link venture-card__link--muted">No public link</span>`;

    const metrics = v.metrics
      ? `<div class="venture-card__metrics">
           ${v.metrics.ad_spend ? `<div class="venture-card__metric"><strong>${escapeHtml(v.metrics.ad_spend)}</strong>Ad spend (90d)</div>` : ''}
           ${v.metrics.cpa ? `<div class="venture-card__metric"><strong>${escapeHtml(v.metrics.cpa)}</strong>Avg CPA</div>` : ''}
           ${v.metrics.roas ? `<div class="venture-card__metric"><strong>${escapeHtml(v.metrics.roas)}</strong>Blended ROAS</div>` : ''}
         </div>`
      : '';

    return `
      <article class="venture-card fade-in" data-category="${escapeHtml(v.category)}">
        <div class="venture-card__top">
          <h3 class="venture-card__name">${escapeHtml(v.name)}</h3>
          <span class="status-badge status-badge--${escapeHtml(v.status)}">${escapeHtml(statusLabel)}</span>
        </div>
        <div class="venture-card__tagline">${escapeHtml(v.tagline)}</div>
        <p class="venture-card__desc">${escapeHtml(v.description)}</p>
        <div class="stack-list">${stack}</div>
        ${metrics}
        <div class="venture-card__foot">
          <span class="venture-card__category" style="font-size:0.72rem;letter-spacing:1.5px;text-transform:uppercase;color:var(--text-dark);">${escapeHtml(v.category)}</span>
          ${link}
        </div>
      </article>`;
  }

  function wireFilter(items, mount) {
    const filterBar = document.querySelector('[data-filter]');
    if (!filterBar) return;
    filterBar.addEventListener('click', e => {
      const btn = e.target.closest('.filter-bar__btn');
      if (!btn) return;
      filterBar.querySelectorAll('.filter-bar__btn').forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      const cat = btn.getAttribute('data-cat');
      const filtered = cat === 'all' ? items : items.filter(v => v.category === cat);
      renderVentures(filtered, mount);
      mount.querySelectorAll('.fade-in').forEach(el => {
        el.classList.add('visible');
      });
    });
  }

});
