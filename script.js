document.getElementById('year').textContent=new Date().getFullYear();
const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('#main-nav');
toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open)});
nav.addEventListener('click',event=>{if(event.target.closest('a')){toggle.setAttribute('aria-expanded','false');nav.classList.remove('open')}});
document.addEventListener('keydown',event=>{if(event.key==='Escape'){toggle.setAttribute('aria-expanded','false');nav.classList.remove('open')}});
const revealTargets=document.querySelectorAll('.hero > *, .section-head, .motion-card, .work-card, .about > *, .contact-inner > *');
if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');revealObserver.unobserve(entry.target)}}),{threshold:.08});revealTargets.forEach(element=>{element.classList.add('reveal-ready');revealObserver.observe(element)})}
const filters=document.querySelectorAll('.filter');
const projects=document.querySelectorAll('.motion-card,.work-card');
filters.forEach(button=>button.addEventListener('click',()=>{filters.forEach(item=>item.classList.toggle('active',item===button));const kind=button.dataset.filter;projects.forEach(project=>project.classList.toggle('hidden',kind!=='all'&&project.dataset.kind!==kind))}));
