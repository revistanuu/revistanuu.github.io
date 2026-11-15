/* Revista NUU - barra superior e progresso de leitura */
(function () {
  var bar = document.getElementById('bar'), prog = document.getElementById('prog');
  var leitura = document.body.hasAttribute('data-leitura'), t = false;
  function atualizar() {
    var y = window.scrollY, h = document.documentElement.scrollHeight - window.innerHeight;
    bar.classList.toggle('on', leitura || y > window.innerHeight * 0.6);
    prog.style.width = leitura && h > 0 ? (y / h * 100) + '%' : '0';
    t = false;
  }
  window.addEventListener('scroll', function () {
    if (!t) { t = true; requestAnimationFrame(atualizar); }
  }, { passive: true });
  atualizar();
})();
