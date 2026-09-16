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
(function(){
  const grid=document.getElementById('gallery-grid');
  if(!grid||!Array.isArray(window.galleryItems)||window.galleryItems.length===0)return;
  grid.innerHTML='';
  window.galleryItems.forEach(item=>{
    const article=document.createElement('article'); article.className='gallery-card';
    const img=document.createElement('img'); img.src=item.image; img.alt=item.alt||item.title||'Academic activity photograph'; img.loading='lazy';
    const cap=document.createElement('div'); cap.className='gallery-caption';
    const h=document.createElement('h3'); h.textContent=item.title||'Academic Activity';
    const p=document.createElement('p'); p.textContent=[item.event,item.date].filter(Boolean).join(' · ');
    cap.append(h,p); article.append(img,cap); grid.appendChild(article);
  });
})();
// Upcoming workshops renderer
(function(){
  const grid=document.getElementById('upcoming-grid');
  if(!grid||!Array.isArray(window.upcomingWorkshops)||window.upcomingWorkshops.length===0)return;
  grid.innerHTML='';
  window.upcomingWorkshops.forEach(item=>{
    const article=document.createElement('article'); article.className='upcoming-card';
    const badge=document.createElement('div'); badge.className='upcoming-badge'; badge.textContent=item.status||'Upcoming';
    const h=document.createElement('h3'); h.textContent=item.title||'Upcoming Workshop';
    const p=document.createElement('p'); p.className='muted'; p.textContent=item.description||'';
    const meta=document.createElement('div'); meta.className='upcoming-meta';
    [item.date,item.venue,item.audience].filter(Boolean).forEach(t=>{const s=document.createElement('span');s.textContent=t;meta.appendChild(s)});
    article.append(badge,h); if(item.description) article.appendChild(p); article.appendChild(meta); grid.appendChild(article);
  });
})();
