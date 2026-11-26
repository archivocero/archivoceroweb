/* Archivo Cero: suscripcion al newsletter (formulario de Brevo, con doble confirmacion por email) */
(function () {
  'use strict';
  var ACTION = 'https://5ae6c970.sibforms.com/serve/MUIFAPN0edqQURoxvviGSyNaFxAeIFBvqOjiKRIitwddyN8SC1z3VZYc7NCUtGQdaVKXT6YUtH7xktbOXp9dbIyf9x4hyPIijGoLr2d2gnTdIHfnQ-fFJJnXHtoroc58qeldA_wMlgdAlR7E6nfNrD1sHfjVQO7gEegSInwjFoF0qzSSjDzwZeF1b-hHDRfL576tOyEmqIoihYx50Q==';

  function ev(n, p) { try { if (typeof gtag === 'function') gtag('event', n, p || {}); } catch (e) {} }

  function init() {
    if (document.querySelector('.cero-nl')) return;
    var foot = document.querySelector('footer');
    if (!foot) return;

    var st = document.createElement('style');
    st.textContent =
      '.cero-nl{border-top:1px solid rgba(240,236,224,.09);border-bottom:1px solid rgba(240,236,224,.09);background:linear-gradient(135deg,rgba(192,57,43,.14),rgba(11,9,7,0) 70%);padding:3.2rem 1.5rem;text-align:center}' +
      '.cero-nl-in{max-width:600px;margin:0 auto}' +
      '.cero-nl-k{font-family:"Courier Prime",monospace;font-size:.72rem;letter-spacing:.28em;text-transform:uppercase;color:#d4a017;margin:0 0 .6rem}' +
      '.cero-nl h2{font-family:"Bebas Neue",cursive;font-weight:400;font-size:2.4rem;line-height:1;letter-spacing:.04em;margin:0 0 .6rem;color:#f0ece0}' +
      '.cero-nl-t{font-family:Georgia,serif;font-size:1rem;line-height:1.6;color:rgba(240,236,224,.8);margin:0 0 1.3rem}' +
      '.cero-nl form{display:flex;gap:.6rem;flex-wrap:wrap;justify-content:center;margin:0}' +
      '.cero-nl input[type=email]{flex:1 1 250px;min-width:0;background:#0b0907;border:1px solid rgba(240,236,224,.3);color:#f0ece0;padding:.95rem 1rem;font-family:"Courier Prime",monospace;font-size:.92rem;border-radius:0}' +
      '.cero-nl input[type=email]:focus{outline:0;border-color:#d4a017}' +
      '.cero-nl button{background:#d4a017;color:#0b0907;border:1px solid #d4a017;padding:.95rem 1.6rem;font-family:"Courier Prime",monospace;font-weight:700;font-size:.8rem;letter-spacing:.14em;text-transform:uppercase;cursor:pointer;border-radius:0}' +
      '.cero-nl button:hover{background:#e8b82a}' +
      '.cero-nl-hp{position:absolute;left:-9999px;width:1px;height:1px;opacity:0}' +
      '.cero-nl-s{font-family:"Courier Prime",monospace;font-size:.68rem;letter-spacing:.04em;color:rgba(240,236,224,.5);margin:1rem 0 0;line-height:1.6}' +
      '.cero-nl-ok{font-family:Georgia,serif;font-size:1.1rem;line-height:1.6;color:#f0ece0;border:1px solid #d4a017;background:rgba(212,160,23,.08);padding:1.1rem 1.2rem}';
    document.head.appendChild(st);

    var sec = document.createElement('section');
    sec.className = 'cero-nl';
    sec.setAttribute('aria-label', 'Suscripción al newsletter');
    sec.innerHTML =
      '<div class="cero-nl-in">' +
      '<p class="cero-nl-k">// Novedades</p>' +
      '<h2>Casos nuevos, descuentos y pistas</h2>' +
      '<p class="cero-nl-t">Suscribite y recibí los nuevos casos, promociones y novedades de Archivo Cero. Sin spam.</p>' +
      '<form method="post" action="' + ACTION + '" target="cero-nl-frame" novalidate>' +
      '<label for="cero-nl-email" class="cero-nl-hp">Email</label>' +
      '<input type="email" id="cero-nl-email" name="EMAIL" placeholder="tu@email.com" autocomplete="email" required>' +
      '<input type="text" name="email_address_check" value="" class="cero-nl-hp" tabindex="-1" autocomplete="off" aria-hidden="true">' +
      '<input type="hidden" name="locale" value="es">' +
      '<input type="hidden" name="html_type" value="simple">' +
      '<button type="submit">Suscribirme</button>' +
      '</form>' +
      '<p class="cero-nl-s">Te vamos a mandar un email para confirmar tu suscripción. Podés darte de baja cuando quieras.</p>' +
      '</div>' +
      '<iframe name="cero-nl-frame" title="" style="display:none" aria-hidden="true"></iframe>';
    foot.parentNode.insertBefore(sec, foot);

    var form = sec.querySelector('form'), input = sec.querySelector('#cero-nl-email'), nota = sec.querySelector('.cero-nl-s');
    form.addEventListener('submit', function (e) {
      var v = (input.value || '').trim();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) {
        e.preventDefault();
        input.focus();
        nota.textContent = 'Revisá el email: parece que falta algo.';
        return;
      }
      ev('newsletter_suscripcion', { origen: location.pathname });
      setTimeout(function () {
        form.outerHTML = '<div class="cero-nl-ok" role="status">¡Casi listo! Te enviamos un email para confirmar tu suscripción. Si no lo ves, revisá spam o promociones.</div>';
        nota.style.display = 'none';
      }, 400);
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
