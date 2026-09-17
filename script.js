const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

document.getElementById('year').textContent = new Date().getFullYear();


// Gallery renderer
(function () {
  const grid = document.getElementById('gallery-grid');
  if (!grid || !Array.isArray(window.galleryItems) || window.galleryItems.length === 0) return;

  grid.innerHTML = '';
  window.galleryItems.forEach(item => {
    const article = document.createElement('article');
    article.className = 'gallery-card';

    const img = document.createElement('img');
    img.src = item.image;
    img.alt = item.alt || item.title || 'Academic activity photograph';
    img.loading = 'lazy';

    const caption = document.createElement('div');
    caption.className = 'gallery-caption';

    const title = document.createElement('h3');
    title.textContent = item.title || 'Academic Activity';

    const meta = document.createElement('p');
    meta.textContent = [item.event, item.date].filter(Boolean).join(' · ');

    caption.appendChild(title);
    caption.appendChild(meta);
    article.appendChild(img);
    article.appendChild(caption);
    grid.appendChild(article);
  });
})();

// Upcoming workshops renderer
(function () {
  const grid = document.getElementById('upcoming-grid');
  if (!grid || !Array.isArray(window.upcomingWorkshops) || window.upcomingWorkshops.length === 0) return;

  grid.innerHTML = '';
  window.upcomingWorkshops.forEach(item => {
    const article = document.createElement('article');
    article.className = 'upcoming-card';

    const badge = document.createElement('div');
    badge.className = 'upcoming-badge';
    badge.textContent = item.status || 'Upcoming';

    const title = document.createElement('h3');
    title.textContent = item.title || 'Upcoming Workshop';

    const desc = document.createElement('p');
    desc.className = 'muted';
    desc.textContent = item.description || '';

    const meta = document.createElement('div');
    meta.className = 'upcoming-meta';

    [item.date, item.venue, item.audience].filter(Boolean).forEach(text => {
      const line = document.createElement('span');
      line.textContent = text;
      meta.appendChild(line);
    });

    article.appendChild(badge);
    article.appendChild(title);
    if (item.description) article.appendChild(desc);
    article.appendChild(meta);
    grid.appendChild(article);
  });
})();
