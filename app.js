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

  const serviceCards = document.querySelectorAll('.service-card');
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

  function updateHeaderOnScroll() {
    const isScrolled = window.scrollY > 24;

    if (!headerInner || !siteLogo || !siteBrand) return;

    if (isScrolled) {
      headerInner.classList.remove('py-5');
      headerInner.classList.add('py-3');

      siteLogo.classList.remove('h-12', 'md:h-14');
      siteLogo.classList.add('h-9', 'md:h-10');

      siteBrand.classList.remove('text-base', 'md:text-lg', 'tracking-[0.14em]');
      siteBrand.classList.add('text-sm', 'md:text-base', 'tracking-[0.1em]');
    } else {
      headerInner.classList.remove('py-3');
      headerInner.classList.add('py-5');

      siteLogo.classList.remove('h-9', 'md:h-10');
      siteLogo.classList.add('h-12', 'md:h-14');

      siteBrand.classList.remove('text-sm', 'md:text-base', 'tracking-[0.1em]');
      siteBrand.classList.add('text-base', 'md:text-lg', 'tracking-[0.14em]');
    }
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

  window.addEventListener('scroll', updateHeaderOnScroll);
  updateHeaderOnScroll();

  serviceCards.forEach(card => {
    card.addEventListener('click', () => {
      const isOpen = card.getAttribute('aria-expanded') === 'true';

      serviceCards.forEach(otherCard => {
        otherCard.setAttribute('aria-expanded', 'false');
        otherCard.classList.remove('ring-1', 'ring-blue-400/30');

        const otherContent = otherCard.querySelector('.service-content');
        const otherIcon = otherCard.querySelector('.service-icon');

        if (otherContent) {
          otherContent.classList.remove('grid-rows-[1fr]');
          otherContent.classList.add('grid-rows-[0fr]');
        }

        if (otherIcon) {
          otherIcon.classList.remove('rotate-45');
        }
      });

      if (!isOpen) {
        card.setAttribute('aria-expanded', 'true');
        card.classList.add('ring-1', 'ring-blue-400/30');

        const content = card.querySelector('.service-content');
        const icon = card.querySelector('.service-icon');

        if (content) {
          content.classList.remove('grid-rows-[0fr]');
          content.classList.add('grid-rows-[1fr]');
        }

        if (icon) {
          icon.classList.add('rotate-45');
        }
      }
    });
  });

  if (openBtn) openBtn.addEventListener('click', openPanel);
  if (openEmailBtn) openEmailBtn.addEventListener('click', openPanel);
  if (closeBtn) closeBtn.addEventListener('click', closePanel);
  if (backdrop) backdrop.addEventListener('click', closePanel);
});