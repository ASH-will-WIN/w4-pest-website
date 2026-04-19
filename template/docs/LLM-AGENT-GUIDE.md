# LLM Agent Usage Guide - Business Website Template

## Purpose

This guide is for AI coding agents (like Claude, Cursor, etc.) to quickly assemble professional, high-converting business websites using the template components.

## Core Principle: "Woah Factor" First

Every website built should make the business owner say "WOW" immediately. The site must be:
- **Visually stunning** - Premium animations, smooth transitions, beautiful typography
- **Instantly engaging** - Preloader, hero video/images, scroll animations
- **Professional polish** - No generic AI-looking design, every element feels intentional
- **Irresistible** - Business owner immediately sees the value

## Fast Assembly Workflow

### Step 1: Identify Business Type & Goal

```
Example prompts to understand the request:
- "What industry is this business in?"
- "What's the main goal? (Get calls, show menu, book appointments)"
- "What's their unique selling point?"
```

### Step 2: Pick Base Example

Match the business to an existing example:

| Business Type | Base Example | Key Components |
|--------------|--------------|----------------|
| Restaurant, Cafe, Bar | `examples/restaurant/` | menu/, hero/video, testimonials |
| Service (Pest, Plumbing, Cleaning) | `examples/service-business/` | services/, pricing, contact |
| Retail, Boutique, Store | `examples/retail-store/` | gallery/, products, testimonials |
| Bar, Nightclub, Lounge | `examples/bar-nightclub/` | hero/video, gallery, events |

### Step 3: Assemble Components

Copy components in this order:

```html
<!-- 1. Preloader (ALWAYS include) -->
<div class="preloader" id="preloader">
  <div class="brand-loader">
    <!-- Business logo or animated icon -->
  </div>
  <p class="loader-text">Preparing your experience...</p>
</div>

<!-- 2. Navigation (sticky version for most businesses) -->
<header>
  [Copy from components/navigation/sticky.html]
</header>

<!-- 3. Hero Section (video hero for wow factor) -->
<section class="hero">
  [Copy from components/hero/video.html]
</section>

<!-- 4. Main Content (varies by business) -->
<!-- Restaurant: menu/ sections -->
<!-- Service: services/grid + testimonials -->
<!-- Retail: gallery/ + product cards -->
```

### Step 4: Customize With Real Content

Replace placeholder content with actual business info:

**Always Update:**
- Business name (appears in logo, title, footer)
- Contact info (phone, email, address)
- Services/products with real descriptions
- Pricing (if applicable)
- Operating hours
- Actual customer testimonials

**Images:**
- Hero: Use high-quality photo or video (stock from Pixabay if needed)
- Service icons: Use emoji or simple SVG icons
- Gallery: Replace with actual business photos

## Essential "Woah Factor" Elements

### 1. Preloader (NON-NEGOTIABLE)

Every site MUST have a preloader. It creates anticipation and shows polish.

```html
<div class="preloader" id="preloader">
  <div class="comal-loader">
    <div class="brand-icon">💼 or business-specific emoji</div>
  </div>
  <p class="loader-text">Crafting your [industry] experience...</p>
</div>
```

**JavaScript for preloader:**
```javascript
// Always include this in main.js
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    preloader.style.opacity = '0';
    setTimeout(() => preloader.remove(), 500);
  }
});
```

**Customize loader text by industry:**
- Restaurant: "Preparing flavors from [Restaurant Name]..."
- Pest Control: "Setting up your protection plan..."
- Bar: "Shaking up the perfect experience..."
- Retail: "Curating your style journey..."

### 2. Hero Animation

The hero section MUST have visual impact:

**Options (pick one):**
- **Video Background** (best for "wow") - Restaurant, bar, hotel
- **Animated Image Slider** - Retail, real estate, salon
- **Split Screen with Reveal** - Service businesses, professional services

**Essential hero elements:**
```html
<h1 class="hero-title">
  <span class="word-reveal">Clear</span>
  <span class="word-reveal">Headline</span>
  <span class="word-reveal">That Sells</span>
</h1>
<p class="hero-subtitle">Address the customer's pain point or desire</p>
<div class="hero-buttons">
  <a href="#contact" class="btn btn-primary">Primary CTA</a>
  <a href="#services" class="btn btn-secondary">Learn More</a>
</div>
```

### 3. Scroll Animations

All content sections should animate into view:

```html
<!-- Add these classes to sections -->
<section class="reveal-up">       <!-- Fades in from bottom -->
<section class="reveal-scale">    <!-- Scales up when appearing -->
<section class="reveal-left">     <!-- Slides from left -->
<section class="reveal-right">    <!-- Slides from right -->
```

### 4. Hover Effects

Every interactive element should respond to hover:

```css
/* Apply to buttons, cards, menu items */
.element {
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.element:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 15px 40px rgba(0,0,0,0.15);
}
```

## Industry-Specific Guidance

### Restaurant / Food Business

**Must-Have Components:**
1. Hero with food video or image
2. Menu section with categories
3. Food gallery (grid layout)
4. Reviews/testimonials
5. Location/hours/contact

**Content to Gather:**
- Menu items with descriptions and prices
- High-quality food photos (3-5 minimum)
- Restaurant photo (interior or exterior)
- Operating hours
- Reservation/contact info

### Service Business (Pest, Plumbing, Cleaning, etc.)

**Must-Have Components:**
1. Hero with bold headline addressing pain point
2. Services grid (3-6 services)
3. "Why Choose Us" section
4. Pricing/packages (if transparent)
5. Before/after gallery
6. Testimonials
7. Contact form + service area map

**Content to Gather:**
- List of services offered
- Service area (cities/regions)
- License/certification info
- Insurance info
- Pricing ranges or starting prices
- Customer testimonials

### Bar / Nightclub

**Must-Have Components:**
1. Video hero (cocktails, crowd, vibe)
2. Events/Calendar
3. Menu (drinks/food)
4. Photo gallery
5. Booking/Special events
6. Location/contact

**Content to Gather:**
- Event schedule
- Drink menu
- Bottle service packages (if applicable)
- Photos of venue
- Guest list/reservation info

### Retail / Boutique

**Must-Have Components:**
1. Hero with lifestyle image
2. Product categories
3. Featured products
4. Gallery / Lookbook
5. About/Brand story
6. Contact/Location

**Content to Gather:**
- Product photos
- Product descriptions and prices
- Size guides (if applicable)
- Store location
- Return policy

## Common Patterns & Copy-Paste Code

### Sticky Header with Animated Underline

```html
<header class="sticky-header">
  <nav>
    <div class="logo">
      <img src="logo.png" alt="Business Name">
    </div>
    <ul class="nav-links">
      <li><a href="#home">Home</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
</header>
```

### Service Card with Icon

```html
<div class="service-card reveal-scale">
  <div class="service-icon">🔧</div>
  <h3>Service Name</h3>
  <p>Description of what's included and the benefit to customer</p>
  <span class="service-price">Starting at $XX</span>
</div>
```

### Testimonial Card

```html
<div class="testimonial-card reveal-up">
  <div class="quote-icon">"</div>
  <p>"Customer quote about how great the service was."</p>
  <div class="testimonial-author">
    <span class="name">John D.</span>
    <span class="location">Verified Customer</span>
  </div>
  <div class="rating">⭐⭐⭐⭐⭐</div>
</div>
```

### Contact Form (Standalone)

```html
<form class="contact-form" action="https://formspree.io/f/your-form-id" method="POST">
  <div class="form-group">
    <label for="name">Name</label>
    <input type="text" id="name" name="name" required>
  </div>
  <div class="form-group">
    <label for="email">Email</label>
    <input type="email" id="email" name="email" required>
  </div>
  <div class="form-group">
    <label for="phone">Phone</label>
    <input type="tel" id="phone" name="phone">
  </div>
  <div class="form-group">
    <label for="message">How can we help?</label>
    <textarea id="message" name="message" rows="5" required></textarea>
  </div>
  <button type="submit" class="btn btn-primary">Send Message</button>
</form>
```

**For form submission:**
Use Formspree (free tier: https://formspree.io) or Netlify Forms

## Essential JavaScript Functions

### Preloader (Include on Every Page)

```javascript
// Place at bottom of HTML in <script> tag
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    setTimeout(() => {
      preloader.style.opacity = '0';
      preloader.style.pointerEvents = 'none';
      setTimeout(() => preloader.remove(), 500);
    }, 800); // Minimum 800ms for smooth transition
  }
  
  // Initialize other animations
  initScrollAnimations();
  initMobileMenu();
});
```

### Scroll Reveal Animations

```javascript
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  document.querySelectorAll('.reveal-up, .reveal-scale, .reveal-left, .reveal-right')
    .forEach(el => observer.observe(el));
}

// Call after DOM loads
document.addEventListener('DOMContentLoaded', initScrollAnimations);
```

### Mobile Menu Toggle

```javascript
function initMobileMenu() {
  const menuBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.querySelector('.nav-links');
  
  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
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
  }
}
```

## Performance Optimization Checklist

After building the site, verify:

- [ ] Preloader works and removes itself
- [ ] All images optimized (max 300KB, WebP preferred)
- [ ] CSS under 25KB (gzipped)
- [ ] JavaScript under 15KB (gzipped)
- [ ] Site loads in under 2 seconds on 4G
- [ ] All animations are smooth (60fps)
- [ ] Mobile menu works
- [ ] All links work and lead somewhere
- [ ] Contact form submits (test it!)

## Testing Before Delivery

**Always test:**
1. Mobile view (resize browser to 375px width)
2. Scroll through entire page
3. Click all navigation links
4. Submit test form
5. Check preloader on fresh page load
6. Verify all images load
7. Test on different browsers (Chrome, Firefox, Safari)

## Quick Template Commands for LLM

When the user asks for something, reference these patterns:

**"Create a restaurant website":**
→ Use `examples/restaurant/` as base
→ Add hero/video.html, menu/, gallery/, testimonials/cards/
→ Customize with actual menu items and photos

**"Create a pest control website":**
→ Use `examples/service-business/` as base
→ Add hero/split.html, services/grid.html, pricing/tables.html, contact/with-map.html
→ Customize with services, pricing, service areas

**"Add animations to existing site":**
→ Add `class="reveal-up"` to sections
→ Include scroll animation JS
→ Add preloader if not present

**"Make it mobile responsive":**
→ Check all grids use `grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))`
→ Mobile menu button present
→ Test at 375px width

## Final Quality Standards

A template-built website should NEVER look like:
- Generic Bootstrap template
- AI-generated with placeholder text
- Lacks personality or brand identity
- No animations or interactions
- Slow loading or clunky

A template-built website SHOULD always be:
- Visually stunning and professional
- Fast and smooth
- Brand-appropriate but polished
- Full of delightful micro-interactions
- Business owner says "wow"

---

**Remember**: You're not just building a website. You're creating an irresistible first impression that makes the business owner immediately see the value and say YES.
