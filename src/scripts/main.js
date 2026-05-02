import '../styles/site.css';
import { site, topFacts, services, galleryItems, faqItems, getBusinessSchema } from '../data/site.js';
import { initContactForms } from './forms.js';

document.addEventListener('DOMContentLoaded', () => {
  bindSiteData();
  setCurrentYear();
  initMobileNav();
  highlightCurrentPage();
  renderFactLists();
  renderServiceGrids();
  renderGalleryGrids();
  renderFaqLists();
  setCanonicalUrl();
  injectStructuredData();
  initContactForms(site);
});

function bindSiteData() {
  document.querySelectorAll('[data-bind]').forEach((node) => {
    const value = lookup(site, node.dataset.bind);
    if (value) {
      node.textContent = value;
    } else if (node.dataset.optional === 'true') {
      node.remove();
    }
  });

  document.querySelectorAll('[data-bind-href]').forEach((node) => {
    const value = lookup(site, node.dataset.bindHref);
    if (value) {
      node.setAttribute('href', value);
    } else if (node.dataset.optional === 'true') {
      node.remove();
    }
  });

  document.querySelectorAll('[data-show-if]').forEach((node) => {
    const value = lookup(site, node.dataset.showIf);
    if (!value) {
      node.hidden = true;
    }
  });
}

function lookup(source, path) {
  return path.split('.').reduce((value, key) => value?.[key], source);
}

function setCurrentYear() {
  document.querySelectorAll('[data-current-year]').forEach((node) => {
    node.textContent = `${new Date().getFullYear()}`;
  });
}

function initMobileNav() {
  const toggle = document.querySelector('[data-nav-toggle]');
  const nav = document.querySelector('[data-nav-menu]');

  if (!toggle || !nav) {
    return;
  }

  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', `${!expanded}`);
    nav.classList.toggle('is-open', !expanded);
  });
}

function highlightCurrentPage() {
  const currentPage = document.body.dataset.page;
  if (!currentPage) {
    return;
  }

  document.querySelectorAll('[data-page-link]').forEach((link) => {
    if (link.dataset.pageLink === currentPage) {
      link.setAttribute('aria-current', 'page');
    }
  });
}

function renderFactLists() {
  document.querySelectorAll('[data-fact-list]').forEach((container) => {
    container.innerHTML = topFacts
      .map((fact) => `<li class="fact-pill">${fact}</li>`)
      .join('');
  });
}

function renderServiceGrids() {
  document.querySelectorAll('[data-service-grid]').forEach((container) => {
    const limit = Number(container.dataset.limit || services.length);
    container.innerHTML = services
      .slice(0, limit)
      .map(
        (service) => `
          <article class="service-card">
            <p class="service-card__eyebrow">${service.eyebrow}</p>
            <h3>${service.title}</h3>
            <p>${service.summary}</p>
            <ul class="service-card__list">
              ${service.bullets.map((item) => `<li>${item}</li>`).join('')}
            </ul>
          </article>
        `
      )
      .join('');
  });
}

function renderGalleryGrids() {
  document.querySelectorAll('[data-gallery-grid]').forEach((container) => {
    const limit = Number(container.dataset.limit || galleryItems.length);
    container.innerHTML = galleryItems
      .slice(0, limit)
      .map(
        (item) => `
          <article class="project-card">
            <picture class="project-card__media">
              <img
                src="${item.src}"
                srcset="${item.srcSet}"
                sizes="(max-width: 780px) 100vw, 46vw"
                alt="${item.alt}"
                loading="lazy"
                width="1440"
                height="960"
              />
            </picture>
            <div class="project-card__body">
              <p class="project-card__meta">${item.category}</p>
              <h3>${item.title}</h3>
              <p>${item.summary}</p>
            </div>
          </article>
        `
      )
      .join('');
  });
}

function renderFaqLists() {
  document.querySelectorAll('[data-faq-list]').forEach((container) => {
    container.innerHTML = faqItems
      .map(
        (item) => `
          <details class="faq-item">
            <summary>${item.question}</summary>
            <p>${item.answer}</p>
          </details>
        `
      )
      .join('');
  });
}

function setCanonicalUrl() {
  const path = document.body.dataset.path || '/';
  const currentOrigin =
    window.location.origin.startsWith('http') && !window.location.origin.includes('file:')
      ? window.location.origin
      : site.siteUrl;
  const baseOrigin = site.siteUrl.includes('.invalid') ? currentOrigin : site.siteUrl;
  const resolved = new URL(path, baseOrigin).href;

  const canonical = document.querySelector('#canonical-link');
  if (canonical) {
    canonical.setAttribute('href', resolved);
  }

  const ogUrl = document.querySelector('#og-url');
  if (ogUrl) {
    ogUrl.setAttribute('content', resolved);
  }
}

function injectStructuredData() {
  if (document.body.dataset.schema !== 'business') {
    return;
  }

  const schema = document.createElement('script');
  schema.type = 'application/ld+json';
  schema.textContent = JSON.stringify(getBusinessSchema(document.body.dataset.path || '/'));
  document.head.appendChild(schema);
}
