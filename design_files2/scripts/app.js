// ============================================
// そろばんあっぷっぷ / APUPU
// Router & UI controller
// ============================================

const PAGES = {
  top: window.PAGE_TOP,
  services: window.PAGE_SERVICES,
  message: window.PAGE_MESSAGE,
  members: window.PAGE_MEMBERS,
  company: window.PAGE_COMPANY,
  news: window.PAGE_NEWS,
  'news-detail': window.PAGE_NEWS_DETAIL,
  contact: window.PAGE_CONTACT,
  privacy: window.PAGE_PRIVACY,
};

const PAGE_LABELS = {
  top: '01 トップ',
  services: '02 事業・サービス',
  message: '03 代表メッセージ',
  members: '04 ボードメンバー',
  news: '05 お知らせ',
  'news-detail': '05-1 お知らせ詳細',
  company: '06 会社概要',
  contact: '07 お問い合わせ',
  privacy: '08 プライバシーポリシー',
};

function renderPage(name) {
  const container = document.getElementById('pageContainer');
  const html = (PAGES[name] || PAGES.top)();
  const label = PAGE_LABELS[name] || name;
  container.innerHTML = `<div class="page" data-screen-label="${label}">${html}</div>`;

  document.querySelectorAll('[data-nav]').forEach(el => {
    el.classList.toggle('is-current', el.dataset.nav === name);
  });

  try { localStorage.setItem('apupu:page', name); } catch (e) {}

  const mm = document.getElementById('mobileMenu');
  mm.classList.remove('is-open');
  mm.setAttribute('aria-hidden', 'true');
  document.getElementById('menuToggle').setAttribute('aria-expanded', 'false');

  window.scrollTo({ top: 0, behavior: 'instant' });
}

function currentPageFromHash() {
  const h = window.location.hash.replace('#', '');
  if (h && PAGES[h]) return h;
  const saved = localStorage.getItem('apupu:page');
  return (saved && PAGES[saved]) ? saved : 'top';
}

document.addEventListener('click', (e) => {
  const link = e.target.closest('[data-nav]');
  if (link) {
    e.preventDefault();
    const target = link.dataset.nav;
    window.location.hash = target;
    renderPage(target);
  }
});

window.addEventListener('hashchange', () => {
  renderPage(currentPageFromHash());
});

// Tone switch
document.getElementById('toneSwitch').addEventListener('click', (e) => {
  const btn = e.target.closest('button[data-tone-set]');
  if (!btn) return;
  const tone = btn.dataset.toneSet;
  document.body.dataset.tone = tone;
  document.querySelectorAll('#toneSwitch button').forEach(b => {
    b.classList.toggle('is-active', b === btn);
  });
  try { localStorage.setItem('apupu:tone', tone); } catch (e) {}
});

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
menuToggle.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('is-open');
  mobileMenu.setAttribute('aria-hidden', String(!isOpen));
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

// Init
(function init() {
  const savedTone = localStorage.getItem('apupu:tone') || 'A';
  document.body.dataset.tone = savedTone;
  document.querySelectorAll('#toneSwitch button').forEach(b => {
    b.classList.toggle('is-active', b.dataset.toneSet === savedTone);
  });
  renderPage(currentPageFromHash());
})();
