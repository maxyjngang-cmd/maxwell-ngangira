const toggle=document.querySelector('.nav-toggle');const links=document.querySelector('.nav-links');if(toggle&&links){toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')==='true';toggle.setAttribute('aria-expanded',String(!open));links.classList.toggle('open',!open)});links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{links.classList.remove('open');toggle.setAttribute('aria-expanded','false')}))}const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}})},{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));document.getElementById('year').textContent=new Date().getFullYear();

document.querySelectorAll('.company-logo img').forEach((logo) => {
  logo.addEventListener('error', () => {
    const figure = logo.closest('.company-logo');
    const caption = figure?.querySelector('figcaption');
    logo.remove();
    if (figure && caption) {
      caption.style.position = 'static';
      caption.style.width = 'auto';
      caption.style.height = 'auto';
      caption.style.margin = '0';
      caption.style.clip = 'auto';
      caption.style.overflow = 'visible';
      caption.style.fontWeight = '700';
      caption.style.letterSpacing = '-0.02em';
    }
  });
});
