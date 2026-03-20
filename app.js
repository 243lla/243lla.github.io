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
  
    const langToggleDesktop = document.getElementById('lang-toggle-desktop');
    const langToggleMobileTop = document.getElementById('lang-toggle-mobile-top');
    const langToggleMobileMenu = document.getElementById('lang-toggle-mobile-menu');
  
    const langLabelDesktop = document.getElementById('lang-label-desktop');
    const langLabelMobileTop = document.getElementById('lang-label-mobile-top');
    const langLabelMobileMenu = document.getElementById('lang-label-mobile-menu');
  
    const serviceCards = document.querySelectorAll('.service-card');
  
    const openBtn = document.getElementById('open-contact');
    const openEmailBtn = document.getElementById('open-contact-email');
    const panel = document.getElementById('panel');
    const wrapper = document.getElementById('contact-panel');
    const closeBtn = document.getElementById('close-panel');
    const backdrop = document.getElementById('contact-backdrop');
  
    const translations = {
      en: {
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.services': 'Services',
        'nav.location': 'Location',
        'nav.clients': 'Clients',
        'nav.contact': 'Contact',
  
        'cta.contactUs': 'Contact Us',
        'cta.exploreServices': 'Explore Services',
  
        'hero.title': 'Integrated Logistics, Depot & Customs Solutions',
        'hero.desc': 'Supporting reliable cargo movement through container depot, ISO tank depot, transportation, customs brokerage, and warehousing services.',
  
        'services.title': 'Services',
        'services.intro': 'Select a service to view more details about our operational capabilities.',
        'services.containerDepot.title': 'Container Depot',
        'services.containerDepot.desc': 'Our depot offers secure and efficient container storage and maintenance.',
        'services.isoTank.title': 'ISO Tank Depot',
        'services.isoTank.desc': 'Specialized storage and maintenance for ISO tanks.',
        'services.trucking.title': 'Trucking & Transportation',
        'services.trucking.desc': 'Reliable trucking and transportation services for goods and containers.',
        'services.customs.title': 'Customs Brokerage',
        'services.customs.desc': 'Expert customs clearance and documentation handling.',
        'services.logistics.title': 'Logistics',
        'services.logistics.desc': 'Complete logistics option.',
        'services.warehousing.title': 'Warehousing',
        'services.warehousing.desc': 'Complete warehouse storage options.',
  
        'about.label': 'About',
        'about.title': 'Decades of experience supporting international trade',
        'about.desc': 'Founded in 1985, MJB has expanded from freight forwarding and customs services into depot, isotank and logistics operations to support evolving cargo demands.',
        'about.founded': 'Founded',
        'about.expanded': 'Expanded into Container Depot Services',
        'about.isotank': 'Established Isotank Depot Capability',
  
        'location.label': 'Location',
        'location.title': 'Strategically located in Belawan',
        'location.desc': 'Our operations are based in Belawan, North Sumatra — one of Indonesia’s key port areas, enabling efficient access to international shipping routes, container handling, and logistics infrastructure.',
        'location.depot': 'Belawan Depot',
        'location.address': 'Jalan Raya Pelabuhan Gabion, Belawan<br>North Sumatra, Indonesia',
        'location.map': 'View on Google Maps →',
  
        'clients.label': 'Clients',
        'clients.title': 'Trusted by our partners',
        'clients.desc': 'We work with a range of clients across logistics, shipping, and industrial sectors.',
  
        'contact.title': 'Need a logistics partner?',
        'contact.callUs': 'Call Us',
        'contact.emailUs': 'Email Us',
        'contact.panelTitle': 'Contact Our Offices',
        'contact.medan': 'Medan',
        'contact.belawan': 'Belawan',
        'contact.emailBelawan': 'Email (Belawan)',
        'contact.call': 'Call',
        'contact.email': 'Email',
        'contact.close': 'Close'
      },
      zh: {
        'nav.home': '首页',
        'nav.about': '关于我们',
        'nav.services': '服务',
        'nav.location': '地点',
        'nav.clients': '客户',
        'nav.contact': '联系',
  
        'cta.contactUs': '联系我们',
        'cta.exploreServices': '查看服务',
  
        'hero.title': '综合物流、堆场与报关解决方案',
        'hero.desc': '提供可靠的货物流转支持，涵盖集装箱堆场、ISO 罐箱堆场、运输、报关与仓储服务。',
  
        'services.title': '服务',
        'services.intro': '选择服务项目以查看我们的运营能力详情。',
        'services.containerDepot.title': '集装箱堆场',
        'services.containerDepot.desc': '我们的堆场提供安全高效的集装箱存放与维护服务。',
        'services.isoTank.title': 'ISO 罐箱堆场',
        'services.isoTank.desc': '为 ISO 罐箱提供专业的存放与维护服务。',
        'services.trucking.title': '卡车运输',
        'services.trucking.desc': '为货物与集装箱提供可靠的卡车运输服务。',
        'services.customs.title': '报关服务',
        'services.customs.desc': '提供专业的清关与报关文件处理服务。',
        'services.logistics.title': '物流服务',
        'services.logistics.desc': '提供完整的物流解决方案。',
        'services.warehousing.title': '仓储服务',
        'services.warehousing.desc': '提供完整的仓储存放方案。',
  
        'about.label': '关于我们',
        'about.title': '数十年国际贸易支持经验',
        'about.desc': 'MJB 成立于 1985 年，最初专注于货运代理与报关服务，随后扩展至堆场、ISO 罐箱与综合物流业务，以满足不断变化的货运需求。',
        'about.founded': '公司成立',
        'about.expanded': '拓展至集装箱堆场服务',
        'about.isotank': '建立 ISO 罐箱堆场能力',
  
        'location.label': '地点',
        'location.title': '战略布局于勿拉湾',
        'location.desc': '我们的业务位于印度尼西亚北苏门答腊勿拉湾——该地区是印尼重要港口之一，可高效连接国际航线、集装箱操作与物流基础设施。',
        'location.depot': '勿拉湾堆场',
        'location.address': 'Jalan Raya Pelabuhan Gabion, Belawan<br>North Sumatra, Indonesia',
        'location.map': '在 Google 地图查看 →',
  
        'clients.label': '客户',
        'clients.title': '合作伙伴的信赖之选',
        'clients.desc': '我们服务于物流、航运及工业领域的多类客户。',
  
        'contact.title': '需要可靠的物流合作伙伴？',
        'contact.callUs': '致电我们',
        'contact.emailUs': '发送邮件',
        'contact.panelTitle': '联系我们的办公室',
        'contact.medan': '棉兰',
        'contact.belawan': '勿拉湾',
        'contact.emailBelawan': '电子邮箱（勿拉湾）',
        'contact.call': '拨打',
        'contact.email': '邮件',
        'contact.close': '关闭'
      }
    };
  
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
  
    function setLanguageLabels(lang) {
      const nextLabel = lang === 'en' ? '中文' : 'EN';
  
      if (langLabelDesktop) langLabelDesktop.textContent = nextLabel;
      if (langLabelMobileTop) langLabelMobileTop.textContent = nextLabel;
      if (langLabelMobileMenu) langLabelMobileMenu.textContent = nextLabel;
    }
  
    function applyLanguage(lang) {
      const languagePack = translations[lang] || translations.en;
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
  
      document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
      localStorage.setItem('mjb-language', lang);
      setLanguageLabels(lang);
    }
  
    function toggleLanguage() {
      const current = localStorage.getItem('mjb-language') || 'en';
      applyLanguage(current === 'en' ? 'zh' : 'en');
    }
  
    function closeMobileMenu() {
      if (!mobileMenu || !menuBtn) return;
      mobileMenu.classList.add('hidden');
      menuBtn.textContent = '☰';
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
  
    if (langToggleDesktop) langToggleDesktop.addEventListener('click', toggleLanguage);
    if (langToggleMobileTop) langToggleMobileTop.addEventListener('click', toggleLanguage);
    if (langToggleMobileMenu) langToggleMobileMenu.addEventListener('click', toggleLanguage);
  
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