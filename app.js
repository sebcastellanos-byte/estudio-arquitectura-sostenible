/**
 * TERRAVIVA - ESTUDIO DE ARQUITECTURA SOSTENIBLE
 * Arq. Sebastián Castellanos Acosta · Universidad de Boyacá
 * Client Application Logic (V4 - Solo los 3 Proyectos Oficiales)
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbarScroll();
  initMobileMenu();
  initPortfolio();
  initContactForm();
});

/* -------------------------------------------------------------------------
   1. NAVBAR SCROLL & MOBILE MENU
   ------------------------------------------------------------------------- */
function initNavbarScroll() {
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

function initMobileMenu() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-links');
  
  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const isOpen = navMenu.classList.contains('open');
      toggleBtn.innerHTML = isOpen ? '✕' : '☰';
    });

    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        toggleBtn.innerHTML = '☰';
      });
    });
  }
}

/* -------------------------------------------------------------------------
   2. PORTFOLIO DATA (LOS 3 PROYECTOS OFICIALES DEL PORTAFOLIO)
   ------------------------------------------------------------------------- */
const projectsData = [
  {
    id: 'geriatrico-rosario',
    num: '01',
    title: 'Geriátrico Nuestra Señora del Rosario',
    subtitle: 'Proyectos Patrimoniales / Equipamiento Asistencial',
    location: 'Tibasosa — Boyacá',
    area: '4.000 m²',
    year: '2026 - 1',
    category: 'equipamientos',
    categoryLabel: 'Equipamiento Asistencial',
    leadImage: 'assets/images/portfolio_pages/pagina_05.png',
    gallery: [
      { title: 'Lámina 1: Memoria & Volumetría', src: 'assets/images/portfolio_pages/pagina_05.png' },
      { title: 'Lámina 2: Plantas, Cortes & Perfil Vial', src: 'assets/images/portfolio_pages/pagina_06.png' },
      { title: 'Render: Fachada Principal', src: 'assets/images/geriatrico_1.png' },
      { title: 'Render: Patio Bioclimático Interior', src: 'assets/images/geriatrico_2.png' }
    ],
    shortDesc: 'Equipamiento asistencial de 4.000 m² con enfoque de arquitectura humanizada y deshospitalización del espacio en el entorno patrimonial de Tibasosa.',
    fullDesc: 'La propuesta se fundamenta en la necesidad de generar un espacio que trascienda el modelo asistencial tradicional, planteando un enfoque de arquitectura humanizada, en el cual el adulto mayor es concebido como un usuario activo dentro de un entorno digno, seguro y confortable. En este sentido, el proyecto retoma principios del referente funcional, orientados a la deshospitalización del espacio, mediante la configuración de ambientes domésticos, cálidos y con una fuerte relación interior-exterior.',
    specs: [
      { label: 'Ubicación', value: 'Tibasosa — Boyacá' },
      { label: 'Tipo', value: 'Equipamiento Asistencial' },
      { label: 'Área', value: '4.000 m²' },
      { label: 'Año', value: '2026 - 1' }
    ],
    features: [
      'Planta Nivel 1 con zonificación médica, talleres y áreas de recreación.',
      'Planta Nivel 2, Altillo y Cubiertas verdes transitables.',
      'Perfil vial integrado con la Iglesia Patrimonial de Tibasosa.',
      'Corte longitudinal que demuestra la captación solar pasiva.',
      'Patios interiores ajardinados para microclima y protección del viento.'
    ],
    docLink: 'assets/docs/portafolio_completo_sebastian_castellanos.pdf',
    docLabel: 'Ver Láminas Originales en Portafolio (PDF)'
  },
  {
    id: 'parque-oriente-verde',
    num: '02',
    title: 'Parque Oriente Verde',
    subtitle: 'Espacio y Territorio / Espacio Público Sostenible',
    location: 'Tunja — Boyacá',
    area: '10.000 m²',
    year: '2025 - 2',
    category: 'espacio-publico',
    categoryLabel: 'Espacio Público & Territorio',
    leadImage: 'assets/images/portfolio_pages/pagina_07.png',
    gallery: [
      { title: 'Lámina 1: Memoria & Perspectiva General', src: 'assets/images/portfolio_pages/pagina_07.png' },
      { title: 'Lámina 2: Planta General, Isométrico & Cortes', src: 'assets/images/portfolio_pages/pagina_08.png' }
    ],
    shortDesc: 'Intervención de 10.000 m² en Tunja que articula educación ambiental, puntos ecológicos, comercio local integrado y recreación comunitaria activa.',
    fullDesc: 'El proyecto no solo busca un espacio recreativo, sino un lugar que eduque y fomente el respeto ambiental mediante puntos ecológicos y estaciones de interpretación de la vegetación y fauna local. Esto promueve la apropiación social del espacio, impulsa el desarrollo económico local mediante pequeños comercios integrados y activa la vida comunitaria con actividades culturales, deportivas y artísticas.',
    specs: [
      { label: 'Ubicación', value: 'Tunja — Boyacá' },
      { label: 'Tipo', value: 'Espacio Público & Parque Urbano' },
      { label: 'Área', value: '10.000 m²' },
      { label: 'Año', value: '2025 - 2' }
    ],
    features: [
      'Planta general e isométrico detallado con 14 convenciones programáticas.',
      'Miradores paisajísticos, plazoletas de recibimiento y conexión urbana.',
      'Zona de chorros de agua lúdicos, áreas de picnic y gimnasio al aire libre.',
      'Estructuras arquitectónicas ligeras y gaviones para manejo topográfico.',
      'Puntos de reciclaje ecológico y módulos comerciales de escala barrial.'
    ],
    docLink: 'assets/docs/portafolio_completo_sebastian_castellanos.pdf',
    docLabel: 'Ver Planimetría en Portafolio (PDF)'
  },
  {
    id: 'garden-house',
    num: '03',
    title: 'Garden House',
    subtitle: 'Vivienda Unifamiliar Sostenible & Bioclimática',
    location: 'Yopal — Casanare',
    area: '80 m²',
    year: '2025 - 1',
    category: 'vivienda',
    categoryLabel: 'Vivienda Sostenible',
    leadImage: 'assets/images/portfolio_pages/pagina_09.png',
    gallery: [
      { title: 'Lámina 1: Memoria & Render Exterior', src: 'assets/images/portfolio_pages/pagina_09.png' },
      { title: 'Lámina 2: Plantas, Alzados & Detalle Fachada Verde', src: 'assets/images/portfolio_pages/pagina_10.png' }
    ],
    shortDesc: 'Vivienda bioclimática de 80 m² en Yopal. Integra ventilación cruzada, paneles solares, fachadas verdes termoacústicas y captación de aguas lluvias.',
    fullDesc: 'El diseño integra estrategias pasivas, como la ventilación cruzada y el uso de aleros para optimizar la iluminación natural, junto con soluciones tecnológicas eficientes. Entre estas destacan la implementación de paneles solares fotovoltaicos, fachadas verdes que actúan como aislamiento termoacústico natural y un sistema de recolección de aguas lluvias destinado al riego y usos no potables. El resultado es un proyecto arquitectónico que equilibra alta eficiencia energética, habitabilidad y respeto absoluto por su entorno.',
    specs: [
      { label: 'Ubicación', value: 'Yopal — Casanare' },
      { label: 'Tipo', value: 'Vivienda Unifamiliar' },
      { label: 'Área', value: '80 m²' },
      { label: 'Año', value: '2025 - 1' }
    ],
    features: [
      'Plantas arquitectónicas completas: Nivel 1, Nivel 2 y Nivel 3.',
      'Detalle constructivo de Fachada Verde: estructura metálica, muro permeabilizado y riego.',
      'Paneles solares fotovoltaicos y recolección de aguas lluvias para riego.',
      'Aleros calculados para sombra e iluminación natural diurna óptima.',
      'Esquemas de ventilación cruzada continua para clima cálido de Yopal.'
    ],
    docLink: 'assets/docs/portafolio_completo_sebastian_castellanos.pdf',
    docLabel: 'Ver Detalles y Planos en Portafolio (PDF)'
  }
];

function initPortfolio() {
  const grid = document.getElementById('portfolio-grid');
  const chips = document.querySelectorAll('.filter-chip');
  const modal = document.getElementById('project-modal');
  const modalClose = document.getElementById('modal-close-btn');

  if (!grid) return;

  function render(filter = 'all') {
    grid.innerHTML = '';
    const filtered = filter === 'all' 
      ? projectsData 
      : projectsData.filter(p => p.category === filter);

    filtered.forEach(p => {
      const card = document.createElement('div');
      card.className = 'card-project';
      card.innerHTML = `
        <div class="card-project-media">
          <img src="${p.leadImage}" alt="${p.title}" loading="lazy">
          <span class="card-badge">PROYECTO ${p.num} · ${p.categoryLabel}</span>
          <span class="card-year">${p.year}</span>
        </div>
        <div class="card-project-body">
          <div class="card-loc">📍 ${p.location} · Área: ${p.area}</div>
          <h3 class="card-title">${p.title}</h3>
          <p class="card-desc">${p.shortDesc}</p>
          <div class="card-tags">
            ${p.features.slice(0, 3).map(f => `<span class="tag-pill">${f.split(' ').slice(0, 3).join(' ')}</span>`).join('')}
          </div>
          <div class="card-footer">
            <button class="btn btn-primary btn-open-modal" data-id="${p.id}" style="padding: 9px 18px; font-size: 0.85rem;">
              Revisar Proyecto ${p.num} <span>→</span>
            </button>
            <a href="${p.docLink}" target="_blank" class="btn btn-secondary" style="padding: 8px 14px; font-size: 0.82rem;" title="Ver Láminas en PDF">
              📄 Ver en PDF
            </a>
          </div>
        </div>
      `;
      grid.appendChild(card);
    });

    grid.querySelectorAll('.btn-open-modal').forEach(btn => {
      btn.addEventListener('click', () => {
        openModal(btn.getAttribute('data-id'));
      });
    });
  }

  render('all');

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      render(chip.getAttribute('data-filter'));
    });
  });

  function openModal(id) {
    const project = projectsData.find(p => p.id === id);
    if (!project) return;

    document.getElementById('modal-title').textContent = `[${project.num}] ${project.title}`;
    document.getElementById('modal-loc').textContent = `📍 ${project.location} · Área: ${project.area} · Año: ${project.year}`;
    document.getElementById('modal-badge').textContent = project.categoryLabel;
    document.getElementById('modal-desc').textContent = project.fullDesc;

    const mainImg = document.getElementById('modal-main-img');
    const thumbs = document.getElementById('modal-thumbs');
    mainImg.src = project.gallery[0].src;
    thumbs.innerHTML = '';

    project.gallery.forEach((item, idx) => {
      const btn = document.createElement('button');
      btn.className = `modal-thumb ${idx === 0 ? 'active' : ''}`;
      btn.title = item.title;
      btn.innerHTML = `<img src="${item.src}" alt="${item.title}">`;
      btn.addEventListener('click', () => {
        mainImg.src = item.src;
        thumbs.querySelectorAll('.modal-thumb').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
      thumbs.appendChild(btn);
    });

    const metaGrid = document.getElementById('modal-meta-grid');
    metaGrid.innerHTML = project.specs.map(s => `
      <div class="meta-field">
        <span class="meta-field-label">${s.label}</span>
        <span class="meta-field-val">${s.value}</span>
      </div>
    `).join('');

    const featuresList = document.getElementById('modal-features');
    featuresList.innerHTML = project.features.map(f => `<li>✔ ${f}</li>`).join('');

    const docBtn = document.getElementById('modal-doc-btn');
    docBtn.href = project.docLink;
    docBtn.textContent = `📥 ${project.docLabel}`;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (modalClose) modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
  });
}

/* -------------------------------------------------------------------------
   3. CONTACT FORM
   ------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const alert = document.getElementById('form-alert');

  if (form && alert) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      btn.disabled = true;
      btn.textContent = 'Enviando solicitud...';

      setTimeout(() => {
        alert.style.display = 'block';
        alert.innerHTML = `
          <strong>¡Solicitud enviada con éxito!</strong><br>
          El equipo de TERRAVIVA y el Arq. Sebastián Castellanos revisarán tu consulta técnica para contactarte a la brevedad.
        `;
        form.reset();
        btn.disabled = false;
        btn.textContent = 'Enviar Solicitud de Asesoría';

        setTimeout(() => {
          alert.style.display = 'none';
        }, 7000);
      }, 800);
    });
  }
}
