// ========================================
// Oaxaca Template - Main JavaScript
// All "woah factor" animations and interactions
// ========================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  initPreloader();
  initScrollAnimations();
  initMobileMenu();
  initCounterAnimation();
  initParallax();
});

// ========================================
// 1. PRELOADER
// Displays on page load, fades out smoothly
// ========================================
function initPreloader() {
  const preloader = document.getElementById('preloader');

  if (!preloader) return;

  // Wait for all resources to load
  window.addEventListener('load', () => {
    // Minimum display time for smooth experience
    setTimeout(() => {
      preloader.classList.add('hide');

      // Remove from DOM after transition
      setTimeout(() => {
        preloader.remove();
      }, 500);
    }, 800);
  });
}

// ========================================
// 2. SCROLL REVEAL ANIMATIONS
// Elements fade/slide in when they enter viewport
// ========================================
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');

        // Optional: unobserve after revealing (animate once)
        // observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all reveal elements
  const revealElements = document.querySelectorAll(
    '.reveal-up, .reveal-scale, .reveal-left, .reveal-right, .reveal-text'
  );

  revealElements.forEach(el => observer.observe(el));
}

// ========================================
// 3. MOBILE MENU TOGGLE
// Hamburger button animation and navigation toggle
// ========================================
function initMobileMenu() {
  const menuBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.querySelector('.nav-links');

  if (!menuBtn || !navLinks) return;

  menuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    menuBtn.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('nav')) {
      menuBtn.classList.remove('active');
      navLinks.classList.remove('active');
    }
  });

  // Close menu when clicking a link
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menuBtn.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });
}

// ========================================
// 4. COUNTER ANIMATION
// Animated numbers that count up when scrolled into view
// ========================================
function initCounterAnimation() {
  const counters = document.querySelectorAll('.stat-number, .counter');

  if (counters.length === 0) return;

  const observerOptions = {
    threshold: 0.5
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.dataset.target);
        const duration = entry.target.dataset.duration || 2000;
        animateCounter(entry.target, 0, target, duration);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element, start, end, duration) {
  const range = end - start;
  const increment = range / (duration / 16); // 60fps
  let current = start;

  const timer = setInterval(() => {
    current += increment;
    if (current >= end) {
      element.textContent = end;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current);
    }
  }, 16);
}

// ========================================
// 5. HERO PARALLAX
// Subtle parallax effect on hero section on scroll
// ========================================
function initParallax() {
  const hero = document.querySelector('.hero');

  if (!hero) return;

  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = hero.querySelectorAll('.parallax, .hero-background');

    parallaxElements.forEach(el => {
      const speed = el.dataset.speed || 0.5;
      el.style.transform = `translateY(${scrolled * speed}px)`;
    });
  });
}

// ========================================
// 6. HERO PARTICLES (Optional)
// Floating particle animation for hero sections
// ========================================
function initHeroParticles() {
  const particles = document.querySelectorAll('.particle');

  particles.forEach((particle, index) => {
    const delay = particle.style.getPropertyValue('--delay') || `${index * 2}s`;
    particle.style.animation = `float 4s ease-in-out infinite`;
    particle.style.animationDelay = delay;
  });
}

// Call after DOM loads
document.addEventListener('DOMContentLoaded', initHeroParticles);

// ========================================
// 7. SMOOTH SCROLL FOR ANCHOR LINKS
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');

    if (targetId === '#') return;

    const target = document.querySelector(targetId);

    if (target) {
      e.preventDefault();

      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// ========================================
// 8. HEADER SCROLL EFFECT
// Add shadow/background when scrolling
// ========================================
const header = document.querySelector('.sticky-header');

if (header) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// ========================================
// 9. FORM SUBMISSION HANDLING
// Optional: enhance Formspree forms
// ========================================
const forms = document.querySelectorAll('form[action*="formspree"]');

forms.forEach(form => {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;

    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        submitBtn.textContent = 'Message Sent! ✓';
        form.reset();

        setTimeout(() => {
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
        }, 3000);
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      submitBtn.textContent = 'Error - Try Again';
      submitBtn.disabled = false;

      setTimeout(() => {
        submitBtn.textContent = originalText;
      }, 3000);
    }
  });
});

// ========================================
// 10. ACTIVE NAVIGATION HIGHLIGHTING
// Highlights current section in navigation
// ========================================
function initActiveNavigation() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

  if (sections.length === 0 || navLinks.length === 0) return;

  window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (window.pageYOffset >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');

      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

// Call on page load
document.addEventListener('DOMContentLoaded', initActiveNavigation);
