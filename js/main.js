// Search overlay logic (vanilla JS)

document.addEventListener('DOMContentLoaded', function () {
  // Search overlay open
  var searchToggleBtn = document.getElementById('searchToggleBtn');
  var searchOverlay = document.getElementById('searchOverlay');
  var closeSearchBtn = document.getElementById('closeSearchBtn');
  var searchInput = searchOverlay.querySelector('input[type="text"]');
  var searchForm = searchOverlay.querySelector('.search-form');

  if (searchToggleBtn && searchOverlay) {
    searchToggleBtn.addEventListener('click', function () {
      searchOverlay.style.display = 'flex';
      setTimeout(function() { searchInput && searchInput.focus(); }, 100);
    });
  }
  if (closeSearchBtn && searchOverlay) {
    closeSearchBtn.addEventListener('click', function () {
      searchOverlay.style.display = 'none';
    });
  }
  // Close overlay when clicking outside modal
  if (searchOverlay) {
    searchOverlay.addEventListener('click', function (e) {
      if (e.target === searchOverlay) {
        searchOverlay.style.display = 'none';
      }
    });
    var searchModal = searchOverlay.querySelector('.search-modal');
    if (searchModal) {
      searchModal.addEventListener('click', function (e) {
        e.stopPropagation();
      });
    }
  }
  // Search form submit
  if (searchForm) {
    searchForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var searchTerm = searchInput.value.trim();
      if (searchTerm) {
        alert('Searching for: ' + searchTerm); // Replace with real search logic
        searchOverlay.style.display = 'none';
      }
    });
  }

  // Theme toggle logic with persistence
  var themeToggleBtn = document.getElementById('themeToggleBtn');
  var themeIcon = document.getElementById('themeIcon');
  function setTheme(isLight) {
    if (isLight) {
      document.body.classList.add('light-theme');
      if (themeIcon) {
        themeIcon.classList.remove('fa-moon-o');
        themeIcon.classList.add('fa-sun-o');
      }
      localStorage.setItem('theme', 'light');
    } else {
      document.body.classList.remove('light-theme');
      if (themeIcon) {
        themeIcon.classList.remove('fa-sun-o');
        themeIcon.classList.add('fa-moon-o');
      }
      localStorage.setItem('theme', 'dark');
    }
  }
  // On load, set theme from localStorage
  var theme = localStorage.getItem('theme');
  setTheme(theme === 'light');
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', function () {
      var isLight = !document.body.classList.contains('light-theme');
      setTheme(isLight);
    });
  }

  // Mobile Navigation Logic
  var hamburger = document.querySelector('.ham-burger');
  var nav = document.querySelector('.nav');
  var header = document.querySelector('header');
  var navLinks = document.querySelectorAll('.nav ul li a');

  function toggleMobileMenu() {
    hamburger.classList.toggle('active');
    nav.classList.toggle('open');
    header.classList.toggle('nav-open');
    
    // Prevent body scroll when menu is open
    if (nav.classList.contains('open')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  function closeMobileMenu() {
    hamburger.classList.remove('active');
    nav.classList.remove('open');
    header.classList.remove('nav-open');
    document.body.style.overflow = '';
  }

  // Hamburger menu toggle
  if (hamburger) {
    hamburger.addEventListener('click', function(e) {
      e.preventDefault();
      toggleMobileMenu();
    });
  }

  // Close menu when clicking on nav links
  navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      if (window.innerWidth <= 991) {
        closeMobileMenu();
      }
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', function(e) {
    if (nav && nav.classList.contains('open')) {
      if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
        closeMobileMenu();
      }
    }
  });

  // Close menu on window resize
  window.addEventListener('resize', function() {
    if (window.innerWidth > 991) {
      closeMobileMenu();
    }
  });

  // Handle escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && nav && nav.classList.contains('open')) {
      closeMobileMenu();
    }
  });
}); 