/* OPB Labs · menú superior y pie comunes a todas las páginas.
   Para cambiar el menú o el pie de TODA la web, edita solo este archivo (objeto T: textos en español y en inglés).
   Uso en cada página:
     <script src="assets/site.js" data-part="nav"></script>      justo después de <body>
     <script src="assets/site.js" data-part="footer"></script>   donde va el pie
   Opcional: data-progress en el del menú (barra de progreso de lectura, la usa curso.html)
             data-note="texto" en el del pie (aviso propio de esa página).                      */
(function () {
  var YT = 'https://www.youtube.com/@opb_labs';
  var MAIL = 'contacto@opb-labs.com';

  /* Idioma de la página: <html lang="en"> → inglés (páginas en la carpeta en/). */
  var LANG = (document.documentElement.lang || 'es').slice(0, 2) === 'en' ? 'en' : 'es';
  var ROOT = LANG === 'en' ? '../' : '';   /* las rutas de abajo se escriben desde la raíz de la web */

  /* Páginas equivalentes en cada idioma (para el selector ES / EN).
     curso.html solo existe en español: desde ahí, EN lleva a la presentación del curso en inglés. */
  var PARES = {
    'index.html': 'en/index.html', 'aprende.html': 'en/learn.html', 'curso.html': 'en/learn.html',
    'herramientas.html': 'en/tools.html', 'documentacion.html': 'en/docs.html',
    'aviso-legal.html': 'en/legal.html', 'privacidad.html': 'en/privacy.html'
  };

  /* ---------- TEXTOS POR IDIOMA: menú superior, botón y pie ---------- */
  var T = {
    es: {
      MENU: [
        { t: 'Herramientas', href: 'herramientas.html', items: [
          { t: 'OPB DOM', d: 'Order flow en una escalera de precios', href: 'herramientas.html#dom' },
          { t: 'OPB Limitador', d: 'Control de riesgo para cuentas de fondeo', href: 'herramientas.html#limitador' },
          { t: 'OPB Sticker', d: 'Notas y etiquetas sobre el gráfico', href: 'herramientas.html#sticker' },
          { t: 'En el laboratorio', d: 'Indicadores en desarrollo', href: 'herramientas.html#laboratorio' }
        ]},
        { t: 'Cursos', href: 'aprende.html', items: [
          { t: 'De cero a Orderflow', d: 'Curso gratuito en 10 fases', href: 'aprende.html' },
          { t: 'Plan de estudio', d: 'Todas las fases con animaciones y checklists', href: 'curso.html' },
          { t: 'Empezar por la fase 0', d: 'Diez minutos para entender de qué va esto', href: 'curso.html#fase-0' }
        ]},
        { t: 'Documentación', href: 'documentacion.html', items: [
          { t: 'Primeros pasos', d: 'Requisitos e instalación en NinjaTrader 8', href: 'documentacion.html#instalacion' },
          { t: 'Manuales', d: 'Guía de uso de cada herramienta', href: 'documentacion.html#manuales' },
          { t: 'Preguntas frecuentes', d: 'Compatibilidad, soporte y avisos', href: 'documentacion.html#faq' }
        ]},
        { t: 'YouTube', href: YT }
      ],
      CTA: { t: 'Contacto', href: 'index.html#contacto' },
      PIE: [
        { t: 'Herramientas', items: [['OPB DOM', 'herramientas.html#dom'], ['OPB Limitador', 'herramientas.html#limitador'], ['OPB Sticker', 'herramientas.html#sticker'], ['En el laboratorio', 'herramientas.html#laboratorio']] },
        { t: 'Cursos', items: [['De cero a Orderflow', 'aprende.html'], ['Plan de estudio', 'curso.html']] },
        { t: 'Recursos', items: [['Documentación', 'documentacion.html'], ['Canal de YouTube', YT], ['Contacto', 'mailto:' + MAIL]] },
        { t: 'Legal', items: [['Aviso legal', 'aviso-legal.html'], ['Privacidad', 'privacidad.html']] }
      ],
      about: 'OPB Tech &amp; Trading Labs. Formación y herramientas de order flow para futuros NQ, MNQ y ES.',
      risk: '<b style="color:#BEC2C8">Aviso de riesgo:</b> contenido educativo y herramientas de visualización, ejecución y control de riesgo. No es asesoramiento financiero ni una recomendación de inversión. Operar futuros conlleva un riesgo elevado de pérdidas. Los resultados pasados no garantizan resultados futuros.',
      nt: 'NinjaTrader es una marca registrada de NinjaTrader, LLC. OPB Labs no está afiliado ni respaldado por NinjaTrader, LLC.',
      open: 'Abrir menú', close: 'Cerrar menú', langLabel: 'Idioma'
    },
    en: {
      MENU: [
        { t: 'Tools', href: 'en/tools.html', items: [
          { t: 'OPB DOM', d: 'Order flow on a price ladder', href: 'en/tools.html#dom' },
          { t: 'OPB Limitador', d: 'Risk control for prop firm accounts', href: 'en/tools.html#limitador' },
          { t: 'OPB Sticker', d: 'Notes and labels on the chart', href: 'en/tools.html#sticker' },
          { t: 'In the lab', d: 'Indicators in development', href: 'en/tools.html#laboratorio' }
        ]},
        { t: 'Courses', href: 'en/learn.html', items: [
          { t: 'From Zero to Order Flow', d: 'Free course in 10 phases', href: 'en/learn.html' },
          { t: 'Course plan (Spanish)', d: 'All phases, for now only in Spanish', href: 'curso.html' }
        ]},
        { t: 'Docs', href: 'en/docs.html', items: [
          { t: 'Getting started', d: 'Requirements and NinjaTrader 8 installation', href: 'en/docs.html#instalacion' },
          { t: 'Manuals', d: 'How to use each tool', href: 'en/docs.html#manuales' },
          { t: 'FAQ', d: 'Compatibility, support and notices', href: 'en/docs.html#faq' }
        ]},
        { t: 'YouTube', href: YT }
      ],
      CTA: { t: 'Contact', href: 'en/index.html#contacto' },
      PIE: [
        { t: 'Tools', items: [['OPB DOM', 'en/tools.html#dom'], ['OPB Limitador', 'en/tools.html#limitador'], ['OPB Sticker', 'en/tools.html#sticker'], ['In the lab', 'en/tools.html#laboratorio']] },
        { t: 'Courses', items: [['From Zero to Order Flow', 'en/learn.html'], ['Course plan (Spanish)', 'curso.html']] },
        { t: 'Resources', items: [['Docs', 'en/docs.html'], ['YouTube channel', YT], ['Contact', 'mailto:' + MAIL]] },
        { t: 'Legal', items: [['Legal notice', 'en/legal.html'], ['Privacy', 'en/privacy.html']] }
      ],
      about: 'OPB Tech &amp; Trading Labs. Order flow education and tools for NQ, MNQ and ES futures.',
      risk: '<b style="color:#BEC2C8">Risk notice:</b> educational content and tools for visualisation, execution and risk control. This is not financial advice or an investment recommendation. Trading futures involves a high risk of loss. Past results do not guarantee future results.',
      nt: 'NinjaTrader is a registered trademark of NinjaTrader, LLC. OPB Labs is not affiliated with or endorsed by NinjaTrader, LLC.',
      open: 'Open menu', close: 'Close menu', langLabel: 'Language'
    }
  };
  var L = T[LANG], MENU = L.MENU, CTA = L.CTA, PIE = L.PIE;

  var LOGO = '<img src="' + ROOT + 'assets/logo.svg" alt="" width="30" height="30">';
  /* página actual, escrita desde la raíz: "herramientas.html", "en/tools.html"… (sirve también sin .html) */
  var parts = location.pathname.split('/');
  var file = parts.pop() || 'index'; if (!/\.html$/.test(file)) file += '.html';
  var page = (parts.pop() === 'en' ? 'en/' : '') + file;
  function url(h) { return /^(https?:|mailto:)/.test(h) ? h : ROOT + h; }
  function isCur(href) { return !/^(https?:|mailto:)/.test(href) && href.split('#')[0] === page; }
  function ext(href) { return /^https?:/.test(href) ? ' target="_blank" rel="noopener"' : ''; }
  function other() {
    if (LANG === 'es') return PARES[page] || 'en/index.html';
    for (var k in PARES) if (PARES[k] === page && k !== 'curso.html') return k;
    return 'index.html';
  }
  function langSwitch() {
    var o = url(other()) + location.hash;
    return '<div class="opb-lang" role="group" aria-label="' + L.langLabel + '">' +
      (LANG === 'es' ? '<span aria-current="true">ES</span><a href="' + o + '" hreflang="en" lang="en">EN</a>'
                     : '<a href="' + o + '" hreflang="es" lang="es">ES</a><span aria-current="true">EN</span>') + '</div>';
  }

  var CSS = '' +
    'html{scroll-padding-top:80px}.opb-top{height:6px;background:#1496BE}' +
    '.opb-nav{position:sticky;top:0;z-index:100;background:rgba(11,11,12,.9);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);border-bottom:1px solid #26292f;font-family:Montserrat,system-ui,sans-serif}' +
    '.opb-w{max-width:1120px;margin:0 auto;padding:0 22px}' +
    '.opb-bar{display:flex;align-items:center;justify-content:space-between;height:62px;gap:20px}' +
    '.opb-brand{display:flex;align-items:center;gap:10px;text-decoration:none;color:#F2F2F2;font-weight:800;letter-spacing:.06em;font-size:16px;white-space:nowrap}.opb-brand b{color:#1496BE}' +
    '.opb-panel{display:flex;align-items:center}.opb-menu{display:flex;align-items:center;gap:4px;list-style:none;margin:0;padding:0}' +
    '.opb-menu>li{position:relative}' +
    '.opb-menu>li>a{display:flex;align-items:center;gap:6px;color:#BEC2C8;text-decoration:none;font-weight:600;font-size:14.5px;padding:10px 12px;border-radius:8px}' +
    '.opb-menu>li>a:hover,.opb-menu>li:focus-within>a,.opb-menu>li>a.cur{color:#F2F2F2}' +
    '.opb-menu>li>a.cur{box-shadow:inset 0 -2px 0 #1496BE;border-radius:0}' +
    '.opb-menu .car{width:8px;height:8px;border-right:2px solid currentColor;border-bottom:2px solid currentColor;transform:rotate(45deg) translateY(-3px);opacity:.6}' +
    '.opb-dd{position:absolute;top:100%;left:-8px;min-width:300px;padding:10px;margin-top:6px;background:#131417;border:1px solid #26292f;border-radius:14px;box-shadow:0 24px 60px -20px rgba(0,0,0,.8);opacity:0;visibility:hidden;transform:translateY(6px);transition:.15s}' +
    '.opb-dd:before{content:"";position:absolute;left:0;right:0;top:-10px;height:10px}' +
    '.opb-menu>li:hover .opb-dd,.opb-menu>li:focus-within .opb-dd{opacity:1;visibility:visible;transform:none}' +
    '.opb-dd a{display:block;text-decoration:none;padding:10px 12px;border-radius:9px;color:#F2F2F2;font-weight:700;font-size:14.5px}' +
    '.opb-dd a span{display:block;color:#787C82;font-weight:500;font-size:13px;margin-top:1px}' +
    '.opb-dd a:hover{background:#1a1c20}.opb-dd a:hover span{color:#BEC2C8}' +
    '.opb-cta{display:inline-flex;align-items:center;text-decoration:none;background:#1496BE;color:#fff;font-weight:700;font-size:14px;padding:9px 16px;border-radius:10px;margin-left:10px;white-space:nowrap}.opb-cta:hover{filter:brightness(1.1)}' +
    '.opb-lang{display:flex;border:1px solid #26292f;border-radius:9px;overflow:hidden;margin-left:12px;font-size:12.5px;font-weight:700;letter-spacing:.06em}.opb-lang a,.opb-lang span{padding:7px 10px;text-decoration:none;color:#787C82}.opb-lang a:hover{color:#F2F2F2}.opb-lang span{background:#1a1c20;color:#F2F2F2}' +
    '.opb-burger{display:none;background:none;border:1px solid #26292f;border-radius:10px;width:44px;height:40px;cursor:pointer;padding:0;align-items:center;justify-content:center}' +
    '.opb-burger i,.opb-burger i:before,.opb-burger i:after{display:block;width:18px;height:2px;background:#F2F2F2;position:relative;transition:.2s}' +
    '.opb-burger i:before,.opb-burger i:after{content:"";position:absolute;left:0}.opb-burger i:before{top:-6px}.opb-burger i:after{top:6px}' +
    '.opb-open .opb-burger i{background:transparent}.opb-open .opb-burger i:before{top:0;transform:rotate(45deg)}.opb-open .opb-burger i:after{top:0;transform:rotate(-45deg)}' +
    '.opb-prog{height:2px}.opb-prog div{height:100%;width:0;background:#1496BE}' +
    '@media(max-width:900px){' +
      '.opb-burger{display:flex}' +
      '.opb-panel{display:none;position:absolute;left:0;right:0;top:100%;background:#0B0B0C;border-bottom:1px solid #26292f;max-height:calc(100vh - 70px);overflow:auto;padding:8px 22px 22px}' +
      '.opb-open .opb-panel{display:block}' +
      '.opb-menu{flex-direction:column;align-items:stretch;gap:0}' +
      '.opb-menu>li{border-bottom:1px solid #26292f;padding:6px 0}' +
      '.opb-menu>li>a{font-size:16px;color:#F2F2F2;padding:10px 0}.opb-menu>li>a.cur{box-shadow:none;color:#1496BE}' +
      '.opb-menu .car{display:none}' +
      '.opb-dd{position:static;opacity:1;visibility:visible;transform:none;box-shadow:none;border:0;background:none;padding:0 0 6px;margin:0;min-width:0}' +
      '.opb-dd a{padding:7px 0 7px 12px;font-size:14.5px;font-weight:600;color:#BEC2C8}.opb-dd a span{display:none}' +
      '.opb-cta{display:flex;margin:16px 0 0;justify-content:center;padding:13px}.opb-lang{margin:16px 0 0;align-self:flex-start;display:inline-flex}.opb-panel .opb-lang a,.opb-panel .opb-lang span{padding:9px 16px}' +
    '}' +
    '.opb-foot{border-top:1px solid #26292f;margin-top:40px;padding:50px 0 40px;color:#787C82;font-family:Montserrat,system-ui,sans-serif;font-size:13.5px;line-height:1.6;background:#0B0B0C}' +
    '.opb-fgrid{display:grid;grid-template-columns:1.4fr repeat(4,1fr);gap:28px}' +
    '.opb-foot h4{margin:0 0 10px;color:#F2F2F2;font-size:13px;letter-spacing:.12em;text-transform:uppercase;font-weight:700}' +
    '.opb-foot ul{list-style:none;margin:0;padding:0}.opb-foot li{padding:3px 0}' +
    '.opb-foot a{color:#BEC2C8;text-decoration:none}.opb-foot a:hover{color:#F2F2F2;text-decoration:underline}' +
    '.opb-foot .opb-about p{margin:12px 0 0;max-width:300px}' +
    '.opb-legal{border-top:1px solid #26292f;margin-top:34px;padding-top:20px}.opb-legal p{margin:0 0 8px}' +
    '@media(max-width:860px){.opb-fgrid{grid-template-columns:1fr 1fr}.opb-about{grid-column:1/-1}}';

  function addCSS() {
    if (document.getElementById('opb-site-css')) return;
    var s = document.createElement('style'); s.id = 'opb-site-css'; s.textContent = CSS;
    document.head.appendChild(s);
  }

  function nav(progress) {
    var h = '<div class="opb-top"></div><nav class="opb-nav" aria-label="Principal"><div class="opb-w opb-bar">' +
      '<a class="opb-brand" href="' + url(LANG === 'en' ? 'en/index.html' : 'index.html') + '">' + LOGO + 'OPB <b>LABS</b></a>' +
      '<button class="opb-burger" type="button" aria-label="' + L.open + '" aria-expanded="false"><i></i></button>' +
      '<div class="opb-panel"><ul class="opb-menu">';
    MENU.forEach(function (m) {
      var cur = isCur(m.href) || (m.items || []).some(function (i) { return isCur(i.href); });
      h += '<li><a href="' + url(m.href) + '"' + ext(m.href) + (cur ? ' class="cur" aria-current="page"' : '') + '>' + m.t + (m.items ? '<span class="car" aria-hidden="true"></span>' : '') + '</a>';
      if (m.items) {
        h += '<div class="opb-dd">';
        m.items.forEach(function (i) { h += '<a href="' + url(i.href) + '"' + ext(i.href) + '>' + i.t + (i.d ? '<span>' + i.d + '</span>' : '') + '</a>'; });
        h += '</div>';
      }
      h += '</li>';
    });
    h += '</ul>' + langSwitch() + '<a class="opb-cta" href="' + url(CTA.href) + '">' + CTA.t + '</a></div></div>';
    if (progress) h += '<div class="opb-prog"><div id="snfill"></div></div>';
    return h + '</nav>';
  }

  function footer(note) {
    var h = '<footer class="opb-foot"><div class="opb-w"><div class="opb-fgrid">' +
      '<div class="opb-about"><a class="opb-brand" href="' + url(LANG === 'en' ? 'en/index.html' : 'index.html') + '">' + LOGO + 'OPB <b>LABS</b></a>' +
      '<p>' + L.about + '</p>' +
      '<p><a href="mailto:' + MAIL + '">' + MAIL + '</a></p></div>';
    PIE.forEach(function (c) {
      h += '<div><h4>' + c.t + '</h4><ul>';
      c.items.forEach(function (i) { h += '<li><a href="' + url(i[1]) + '"' + ext(i[1]) + '>' + i[0] + '</a></li>'; });
      h += '</ul></div>';
    });
    h += '</div><div class="opb-legal">' +
      (note ? '<p>' + note + '</p>' : '') +
      '<p>' + L.risk + '</p><p>' + L.nt + '</p>' +
      '<p>© ' + new Date().getFullYear() + ' OPB Labs</p></div></div></footer>';
    return h;
  }

  var me = document.currentScript; if (!me) return;
  addCSS();
  if (me.getAttribute('data-part') === 'footer') {
    me.insertAdjacentHTML('beforebegin', footer(me.getAttribute('data-note')));
  } else {
    me.insertAdjacentHTML('beforebegin', nav(me.hasAttribute('data-progress')));
    var n = me.previousElementSibling, b = n.querySelector('.opb-burger');
    b.addEventListener('click', function () { var o = n.classList.toggle('opb-open'); b.setAttribute('aria-expanded', o); b.setAttribute('aria-label', o ? L.close : L.open); });
    n.querySelectorAll('.opb-panel a').forEach(function (a) { a.addEventListener('click', function () { n.classList.remove('opb-open'); b.setAttribute('aria-expanded', 'false'); }); });
  }
})();
