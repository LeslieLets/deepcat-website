// Deepcat Investments — shared behaviour
(function(){
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  var toggle = document.getElementById('navToggle');
  var links = document.getElementById('navLinks');
  if (toggle && links){
    toggle.addEventListener('click', function(){
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open);
    });
    links.addEventListener('click', function(e){
      if (e.target.tagName === 'A'){
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded','false');
      }
    });
  }

  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(en){
      if (en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target); }
    });
  }, {threshold: 0.1});
  document.querySelectorAll('.reveal').forEach(function(el){ io.observe(el); });
})();
