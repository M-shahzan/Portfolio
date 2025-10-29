(function(){
  'use strict';
  function initSmoothScroll(){
    const links=document.querySelectorAll('a[href^="#"]');
    links.forEach(link=>{
      link.addEventListener('click',e=>{
        e.preventDefault();
        const target=document.querySelector(link.getAttribute('href'));
        if(target){
          const offset=target.getBoundingClientRect().top+window.scrollY-60;
          window.scrollTo({top:offset,behavior:'smooth'});
        }
      });
    });
  }
  function updateActiveNav(){
    const sections=document.querySelectorAll('section[id]');
    const navLinks=document.querySelectorAll('header nav a');
    let current='';
    sections.forEach(sec=>{
      if(window.scrollY>=sec.offsetTop-100){current=sec.id;}
    });
    navLinks.forEach(link=>{
      link.classList.remove('text-primary');
      if(link.getAttribute('href')==='#'+current) link.classList.add('text-primary');
    });
  }
  function init(){
    initSmoothScroll();
    window.addEventListener('scroll',updateActiveNav);
    updateActiveNav();
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init);
  else init();
})();