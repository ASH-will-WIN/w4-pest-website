# Using This Template with Claude Code

**Goal**: Build ANY business website in under 30 minutes using this template and Claude Code.

## Quick Start Commands

Copy these prompts and customize for your specific business:

---

## Command 1: Create New Website from Template

```
Create a website for [BUSINESS TYPE] using the template folder.

Business Details:
- Business Name: [NAME]
- Industry: [RESTAURANT/PEST CONTROL/BAR/RETAIL/SALON/etc]
- Core Offerings: [List main products or services]
- Target Audience: [Who are the customers?]
- Brand Colors (optional): [Preferred colors or "use template default theme"]
- Must-Have Pages: [e.g., Home, Services, Menu, Contact]

Use components from template/components/ and customize with the actual business content. Include the preloader and scroll animations for "woah factor".
```

---

## Command 2: Build Specific Section

```
Build a [HERO/SERVICES/MENU/PRICING/CONTACT/GALLERY] section for a [BUSINESS TYPE] business.

Specific Requirements:
- Business: [BUSINESS NAME]
- Content: [Paste actual text, services, prices, etc]
- Style: [Reference the template example that looks right]
- Add scroll reveal animations
- Make it mobile responsive

Components to reference:
- Hero: template/components/hero/video.html or template/components/hero/simple.html
- Services: template/components/services/grid.html
- Menu: template/components/menu/restaurant.html
- Pricing: template/components/pricing/tables.html
- Contact: template/components/contact/with-map.html
```

---

## Command 3: Customize Existing Example

```
Take the template/examples/restaurant/index.html and customize it for a [NEW BUSINESS TYPE] instead.

Changes needed:
- Business name: [NEW NAME]
- Replace menu items with: [LIST NEW SERVICES/PRODUCTS]
- Update colors to: [NEW COLOR SCHEME]
- Change hero section to: [DESCRIBE NEW HERO]
- Update contact info to: [PHONE/EMAIL/ADDRESS]

Keep the "woah factor" animations and premium feel.
```

---

## Pre-Built Prompts by Industry

### Restaurant Website

```
Create a restaurant website using the template with:
- Preloader with food-related animation
- Hero section with background video of cooking or food
- Menu section showing categories: Appetizers, Main Courses, Desserts, Drinks
- Image gallery of dishes
- Testimonials section
- Contact with hours, location, reservation form

Business Info:
- Name: [Restaurant Name]
- Cuisine Type: [e.g., Italian, Mexican, Japanese]
- Menu items with prices: [paste menu]
- Phone, address, hours: [contact info]
```

### Pest Control / Service Business

```
Create a service business website for [BUSINESS TYPE] with:
- Preloader
- Hero with headline: "Fast, Reliable [SERVICE] in [AREA]"
- Services grid showing 4-6 main services with prices
- "Why Choose Us" section (licensed, insured, guarantees)
- Before/After gallery
- Testimonials
- Contact form + service area map

Business Info:
- Name: [Business Name]
- Services: [list with starting prices]
- Service Area: [cities/counties served]
- License/Cert info: [credentials]
- Phone, email: [contact info]
```

### Bar / Nightclub

```
Create a bar/nightclub website with:
- Preloader with animated logo
- Hero with background video of cocktails, crowd, atmosphere
- Events calendar section
- Drink menu (cocktails, beer, wine)
- Bottle service packages
- Photo gallery of venue
- VIP reservation form
- Location, hours, guest list info

Business Info:
- Name: [Venue Name]
- Vibe: [Upscale, Casual, Party, etc]
- Events: [list recurring events]
- Drink menu/prices: [paste menu]
- VIP packages: [pricing]
```

### Retail / Boutique

```
Create a retail store website with:
- Preloader
- Hero with lifestyle image or product showcase
- Product categories (men, women, accessories, etc)
- Featured products section
- New arrivals gallery
- About/Brand story
- Store location with hours
- Newsletter signup

Business Info:
- Name: [Store Name]
- Products: [categories and items]
- Price range: [e.g., $25-$200]
- Brand story: [short paragraph]
- Store address: [location]
```

---

## Component Customization Guide

### How to Swap in Real Content

**1. Change Colors**

Edit the CSS variables at the top of `css/core.css`:

```css
:root {
  --primary-color: #YOUR_COLOR;    /* e.g., #FF6B6B for coral */
  --secondary-color: #YOUR_COLOR;  /* e.g., #4ECDC4 for teal */
  --accent-color: #YOUR_COLOR;     /* e.g., #FFE66D for gold */
}
```

**2. Replace Images**

Look for all `<img>` tags and replace the `src` attribute:

```html
<!-- Before (placeholder) -->
<img src="placeholder.jpg" alt="Service image">

<!-- After (real content) -->
<img src="actual-service-photo.jpg" alt="Professional pest inspection">
```

**3. Update Text Content**

Search and replace:
- Business name appears in: `<title>`, logo, footer
- Phone number: header and contact section
- Address: contact section and footer
- Services: services grid section
- Pricing: pricing tables

**4. Add Real Photos**

Best practices:
- Hero image: 1920x1080px, under 300KB
- Service images: 600x400px, under 150KB
- Gallery images: 800x600px, under 200KB
- Use `.webp` format when possible

**5. Connect Form Submission**

For the contact form, use Formspree (free):

1. Go to https://formspree.io and create account
2. Create new form, get your unique URL
3. Update form action:

```html
<form action="https://formspree.io/f/your-form-id" method="POST">
```

---

## Essential JavaScript (Include on Every Page)

```javascript
// Add at bottom of HTML in <script> tag

// 1. Preloader
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  setTimeout(() => {
    preloader.classList.add('hide');
    setTimeout(() => preloader.remove(), 500);
  }, 800);
  
  initScrollAnimations();
  initMobileMenu();
});

// 2. Scroll Animations
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  
  document.querySelectorAll('.reveal-up, .reveal-scale, .reveal-left, .reveal-right')
    .forEach(el => observer.observe(el));
}

// 3. Mobile Menu
function initMobileMenu() {
  const btn = document.getElementById('mobileMenuBtn');
  const nav = document.querySelector('.nav-links');
  
  btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    nav.classList.toggle('active');
  });
}
```

---

## Quality Checklist Before Delivery

Run through this list for every website:

- [ ] Preloader displays and fades out smoothly
- [ ] All images load (check for broken image icons)
- [ ] Scroll animations work on all sections
- [ ] Mobile menu button works
- [ ] All links work and go somewhere
- [ ] Contact form can be submitted (test it!)
- [ ] Site looks good on mobile (375px width)
- [ ] Site looks good on desktop (1920px width)
- [ ] Business name, phone, address are correct
- [ ] All prices and services are accurate
- [ ] Color scheme matches brand
- [ ] Fonts look professional (not Times New Roman)
- [ ] Loading time under 3 seconds

---

## Common Issues and Fixes

### Animations Not Working

**Problem**: Elements don't fade in when scrolling

**Fix**: Ensure this JavaScript is included at bottom of HTML:
```html
<script src="js/main.js"></script>
```

And that elements have the class `class="reveal-up"` or similar

### Mobile Menu Not Working

**Problem**: Hamburger button doesn't open menu

**Fix**: Check:
1. Button has `id="mobileMenuBtn"`
2. Navigation has class `nav-links`
3. JavaScript for mobile menu is included

### Preloader Stuck

**Problem**: Preloader doesn't disappear

**Fix**: Ensure `id="preloader"` is on the preloader div, and JavaScript is included.

---

## LLM Agent Best Practices

### DO:
- Reference specific component files
- Copy entire section, then modify
- Use actual business content from the start
- Test on mobile immediately
- Keep CSS/JS files organized

### DON'T:
- Build from scratch - use components
- Forget the preloader
- Skip mobile testing
- Use placeholder content
- Forget alt text on images

---

## Time-Saving Templates

Here are complete ready-to-use patterns:

### One-Page Business Site

```
Pages:
- Hero
- Services
- About
- Testimonials
- Contact

Perfect for: Restaurants, salons, contractors, consultants
```

### Multi-Page Site

```
Pages:
- index.html (Home with hero + featured content)
- services.html (Detailed services with pricing)
- about.html (Business story, team, credentials)
- gallery.html (Photo portfolio or menu)
- contact.html (Form + map + info)

Perfect for: Larger businesses, hotels, spas, retail
```

---

## Final Notes

This template is designed to be:
- **Fast** - Build websites in minutes, not hours
- **Flexible** - Adapt to any industry
- **Professional** - Business owners will be impressed
- **Mobile-First** - Looks great on phones
- **SEO-Friendly** - Clean HTML, semantic structure
- **Performance** - Fast loading, optimized animations

When in doubt, reference the Oaxaca restaurant example - it shows all the "woah factor" elements in action.

**Need specific component?** Check the `template/components/` folder - there's likely a pre-built version you can just customize!
