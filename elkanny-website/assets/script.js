// Nav scroll state
const nav = document.querySelector('.site-nav');
const onScroll = () => {
  if(!nav) return;
  if(window.scrollY > 30) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
};
document.addEventListener('scroll', onScroll);
onScroll();

// Mobile menu toggle
const toggle = document.querySelector('.nav-toggle');
const panel = document.querySelector('.mobile-panel');
if(toggle && panel){
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    panel.classList.toggle('open');
  });
  panel.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    toggle.classList.remove('open');
    panel.classList.remove('open');
  }));
}

// FAQ accordion
document.querySelectorAll('.faq-item').forEach(item => {
  const q = item.querySelector('.faq-q');
  const a = item.querySelector('.faq-a');
  if(!q || !a) return;
  q.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    item.closest('.faq-list').querySelectorAll('.faq-item.open').forEach(other => {
      if(other !== item){
        other.classList.remove('open');
        other.querySelector('.faq-a').style.maxHeight = null;
      }
    });
    if(isOpen){
      item.classList.remove('open');
      a.style.maxHeight = null;
    } else {
      item.classList.add('open');
      a.style.maxHeight = a.scrollHeight + 'px';
    }
  });
});

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
if('IntersectionObserver' in window && revealEls.length){
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -8% 0px' });
  revealEls.forEach(el => io.observe(el));
  // Safety net: guarantee content is visible even if the observer
  // misses an element (e.g. unusual layouts or very fast scrolling).
  setTimeout(() => revealEls.forEach(el => el.classList.add('in')), 2500);
} else {
  revealEls.forEach(el => el.classList.add('in'));
}

// Contact form (static demo — no backend)
const contactForm = document.querySelector('#contact-form');
if(contactForm){
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('button[type="submit"]');
    const original = btn.textContent;
    btn.textContent = 'Message Sent ✓';
    contactForm.reset();
    setTimeout(() => { btn.textContent = original; }, 3000);
  });
}
