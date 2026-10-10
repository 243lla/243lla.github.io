document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  const headerInner = document.getElementById('header-inner');
  const siteLogo = document.getElementById('site-logo');
  const siteBrand = document.getElementById('site-brand');

  const themeToggleDesktop = document.getElementById('theme-toggle-desktop');
  const themeToggleMobileTop = document.getElementById('theme-toggle-mobile-top');
  const themeToggleMobileMenu = document.getElementById('theme-toggle-mobile-menu');

  const iconDesktop = document.getElementById('theme-icon-desktop');
  const iconMobileTop = document.getElementById('theme-icon-mobile-top');
  const iconMobileMenu = document.getElementById('theme-icon-mobile-menu');

  const openBtn = document.getElementById('open-contact');
  const openEmailBtn = document.getElementById('open-contact-email');
  const panel = document.getElementById('panel');
  const wrapper = document.getElementById('contact-panel');
  const closeBtn = document.getElementById('close-panel');
  const backdrop = document.getElementById('contact-backdrop');


  const translationSource = window.MJB_TRANSLATIONS || {};

  const languageDropdowns = [
    {
      wrapper: document.querySelector('#lang-toggle-desktop')?.closest('.language-dropdown'),
      toggle: document.getElementById('lang-toggle-desktop'),
      menu: document.getElementById('lang-menu-desktop')
    },
    {
      wrapper: document.querySelector('#lang-toggle-mobile-top')?.closest('.language-dropdown'),
      toggle: document.getElementById('lang-toggle-mobile-top'),
      menu: document.getElementById('lang-menu-mobile-top')
    },
    {
      wrapper: document.querySelector('#lang-toggle-mobile-menu')?.closest('.language-dropdown'),
      toggle: document.getElementById('lang-toggle-mobile-menu'),
      menu: document.getElementById('lang-menu-mobile-menu')
    }
  ];

  function setThemeIcons(theme) {
    const icon = theme === 'dark' ? 'light_mode' : 'dark_mode';

    if (iconDesktop) iconDesktop.textContent = icon;
    if (iconMobileTop) iconMobileTop.textContent = icon;
    if (iconMobileMenu) iconMobileMenu.textContent = icon;
  }

  function applyTheme(theme) {
    document.body.classList.remove('light-mode', 'dark-mode');
    document.body.classList.add(theme === 'dark' ? 'dark-mode' : 'light-mode');
    localStorage.setItem('mjb-theme', theme);
    setThemeIcons(theme);
  }

  function toggleTheme() {
    const isDark = document.body.classList.contains('dark-mode');
    applyTheme(isDark ? 'light' : 'dark');
  }

  function getLanguagePack(lang) {
    return translationSource[lang] || translationSource.en || {};
  }

  function setActiveLanguageOptions(lang) {
    document.querySelectorAll('.lang-option').forEach(option => {
      option.classList.toggle('is-active', option.dataset.lang === lang);
    });
  }

  function applyLanguage(lang) {
    const languagePack = getLanguagePack(lang);
    const nodes = document.querySelectorAll('[data-i18n]');

    nodes.forEach(node => {
      const key = node.getAttribute('data-i18n');
      const value = languagePack[key];

      if (!value) return;

      if (value.includes('<br>')) {
        node.innerHTML = value;
      } else {
        node.textContent = value;
      }
    });

    document.documentElement.lang =
      lang === 'zh' ? 'zh-CN' :
      lang === 'id' ? 'id' :
      'en';

    localStorage.setItem('mjb-language', lang);
    setActiveLanguageOptions(lang);
  }

  function closeAllLanguageMenus() {
    languageDropdowns.forEach(dropdown => {
      if (dropdown.menu) dropdown.menu.classList.add('hidden');
      if (dropdown.wrapper) dropdown.wrapper.classList.remove('is-open');
      if (dropdown.toggle) dropdown.toggle.setAttribute('aria-expanded', 'false');
    });
  }

  function toggleLanguageMenu(targetDropdown) {
    const isOpen = targetDropdown.menu && !targetDropdown.menu.classList.contains('hidden');

    closeAllLanguageMenus();

    if (!isOpen && targetDropdown.menu) {
      targetDropdown.menu.classList.remove('hidden');
      if (targetDropdown.wrapper) targetDropdown.wrapper.classList.add('is-open');
      if (targetDropdown.toggle) targetDropdown.toggle.setAttribute('aria-expanded', 'true');
    }
  }

  function closeMobileMenu() {
    if (!mobileMenu || !menuBtn) return;
    mobileMenu.classList.add('hidden');
    menuBtn.textContent = '☰';
    closeAllLanguageMenus();
  }

  function openMobileMenu() {
    if (!mobileMenu || !menuBtn) return;
    mobileMenu.classList.remove('hidden');
    menuBtn.textContent = '✕';
  }



  function openPanel() {
    if (!wrapper || !panel) return;
    wrapper.classList.remove('hidden');
    setTimeout(() => {
      panel.classList.remove('translate-y-full');
    }, 10);
  }

  function closePanel() {
    if (!wrapper || !panel) return;
    panel.classList.add('translate-y-full');
    setTimeout(() => {
      wrapper.classList.add('hidden');
    }, 300);
  }

  const savedTheme = localStorage.getItem('mjb-theme') || 'light';
  const savedLanguage = localStorage.getItem('mjb-language') || 'en';

  applyTheme(savedTheme);
  applyLanguage(savedLanguage);

  if (themeToggleDesktop) themeToggleDesktop.addEventListener('click', toggleTheme);
  if (themeToggleMobileTop) themeToggleMobileTop.addEventListener('click', toggleTheme);
  if (themeToggleMobileMenu) themeToggleMobileMenu.addEventListener('click', toggleTheme);

  languageDropdowns.forEach(dropdown => {
    if (dropdown.toggle) {
      dropdown.toggle.addEventListener('click', event => {
        event.stopPropagation();
        toggleLanguageMenu(dropdown);
      });
    }
  });

  document.querySelectorAll('.lang-option').forEach(option => {
    option.addEventListener('click', event => {
      const selectedLang = event.currentTarget.dataset.lang;
      applyLanguage(selectedLang);
      closeAllLanguageMenus();
    });
  });

  document.addEventListener('click', event => {
    const clickedInsideDropdown = event.target.closest('.language-dropdown');
    if (!clickedInsideDropdown) {
      closeAllLanguageMenus();
    }
  });

  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      if (mobileMenu && mobileMenu.classList.contains('hidden')) {
        openMobileMenu();
      } else {
        closeMobileMenu();
      }
    });
  }

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });





  if (openBtn) openBtn.addEventListener('click', openPanel);
  if (openEmailBtn) openEmailBtn.addEventListener('click', openPanel);
  if (closeBtn) closeBtn.addEventListener('click', closePanel);
  if (backdrop) backdrop.addEventListener('click', closePanel);

  const locationTabs = document.getElementById('locationTabs');
  if (locationTabs) {
    locationTabs.addEventListener('shown.bs.tab', () => {
      const currentLang = localStorage.getItem('mjb-language') || 'en';
      applyLanguage(currentLang);
    });
  }

  // CLIENT TAB SWITCH
  const clientTabs = document.querySelectorAll('.client-tab');
  const clientCards = document.querySelectorAll('#client-grid .client-card');

  function switchClientTab(type) {
    clientTabs.forEach(tab => {
      tab.classList.toggle('active', tab.dataset.tab === type);
    });

    clientCards.forEach(card => {
      if (card.dataset.type === type) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  }

  clientTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      switchClientTab(tab.dataset.tab);
    });
  });

  // default state
  switchClientTab('container');
});

// SERVICE CARD EXPANSION
function toggleServiceCard(cardElement) {
  if (!cardElement) return;
  const content = cardElement.querySelector('.expandable-content');
  const icon = cardElement.querySelector('.toggle-icon');

  if (!content) return;

  // Toggle visibility of the expandable content
  content.classList.toggle('hidden');

  // Rotate icon (+ to x)
  if (icon) {
    if (content.classList.contains('hidden')) {
      icon.textContent = '+';
      icon.style.transform = 'rotate(0deg)';
    } else {
      icon.textContent = '+';
      icon.style.transform = 'rotate(45deg)'; // Rotates + to an x
    }
  }
}
window.toggleServiceCard = toggleServiceCard;