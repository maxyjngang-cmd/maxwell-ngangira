const navToggle=document.querySelector('.nav-toggle');const navLinks=document.querySelector('.nav-links');
navToggle?.addEventListener('click',()=>{const open=navLinks.classList.toggle('open');navToggle.setAttribute('aria-expanded',String(open));});
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>{navLinks.classList.remove('open');navToggle?.setAttribute('aria-expanded','false');}));
document.getElementById('year').textContent=new Date().getFullYear();
const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');revealObserver.unobserve(entry.target);}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>reduced?el.classList.add('visible'):revealObserver.observe(el));
function animateMetric(el){const target=parseFloat(el.dataset.count);const prefix=el.dataset.prefix||'';const suffix=el.dataset.suffix||'';const decimals=String(target).includes('.')?1:0;const start=performance.now();const duration=1100;function frame(now){const progress=Math.min((now-start)/duration,1);const eased=1-Math.pow(1-progress,3);const value=target*eased;el.textContent=prefix+value.toFixed(decimals)+suffix;if(progress<1)requestAnimationFrame(frame)}requestAnimationFrame(frame)}
const metricObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){animateMetric(entry.target);metricObserver.unobserve(entry.target);}}),{threshold:.5});
document.querySelectorAll('[data-count]').forEach(el=>{if(!reduced)metricObserver.observe(el)});
