# Universal Business Website Template

A simple, component-based HTML/CSS template system for creating websites for any business type.

## Quick Start for LLM Agents

1. **Pick a business type** from the examples folder
2. **Copy the example** to your new project folder
3. **Swap out content** (text, images, prices) with your actual business info
4. **Optional**: Mix and match components from other examples

## Template Structure

```
template/
├── README.md                 # This file - start here
├── USAGE-LLM.md             # Detailed instructions for AI coding agents
├── css/
│   ├── core.css             # Base styles, variables, resets
│   ├── components.css       # All reusable component styles
│   └── themes/              # Pre-made color themes
│       ├── warm.css         # Reds, oranges, browns (restaurants)
│       ├── cool.css         # Blues, teals, grays (service businesses)
│       ├── dark.css         # Black, gold, accent colors (bars/nightlife)
│       └── vibrant.css      # Bright, colorful (retail/creative)
├── js/
│   ├── main.js              # Core JavaScript (mobile menu, animations)
│   └── components/          # Optional component-specific scripts
├── components/              # Reusable HTML components
│   ├── navigation/
│   │   ├── basic.html       # Simple horizontal nav
│   │   ├── sticky.html      # Fixed header that stays on scroll
│   │   └── mega-menu.html   # Multi-level dropdown nav
│   ├── hero/
│   │   ├── simple.html      # Single headline + CTA
│   │   ├── split.html       # Half image, half text
│   │   ├── video.html       # Background video hero
│   │   └── slider.html      # Image carousel hero
│   ├── services/
│   │   ├── grid.html        # Services in card grid
│   │   ├── list.html        # Services in numbered list
│   │   └── accordion.html   # Collapsible service details
│   ├── menu/                # Restaurant menu layouts
│   ├── pricing/
│   │   ├── tables.html      # Pricing tables side by side
│   │   └── packages.html    # Tiered packages with badges
│   ├── contact/
│   │   ├── basic-form.html  # Simple contact form
│   │   ├── with-map.html    # Form + embedded Google Map
│   │   └── info-only.html   # Just contact info, no form
│   ├── gallery/
│   │   ├── grid.html        # Image grid gallery
│   │   └── masonry.html     # Pinterest-style layout
│   ├── testimonials/
│   │   ├── cards.html       # Testimonial cards
│   │   └── slider.html      # Rotating testimonials
│   └── footer/
│       ├── basic.html       # Simple footer
│       └── multi-column.html # Footer with multiple sections
├── docs/
│   ├── CUSTOMIZATION.md     # How to customize everything
│   ├── COMPONENT-GUIDE.md   # Documentation for each component
│   ├── CONTENT-CHECKLIST.md # What content you need to gather
│   └── INDUSTRY-SPECIFIC/   # Industry-specific guidance
│       ├── restaurant.md
│       ├── service-business.md
│       ├── bar-nightclub.md
│       └── retail.md
└── examples/                # Complete example websites
    ├── restaurant/
    │   ├── index.html
    │   ├── menu.html
    │   ├── about.html
    │   └── contact.html
    ├── service-business/
    │   ├── index.html
    │   ├── services.html
    │   └── contact.html
    ├── bar-nightclub/
    │   └── index.html
    └── retail-store/
        └── index.html
```

## Core Components Overview

### Navigation Options
- **Basic**: Simple horizontal menu (best for 3-5 pages)
- **Sticky**: Fixed header that stays visible (recommended)
- **Mega-Multi-level nav**: For sites with many sections

### Hero Sections
- **Simple**: Headline + subheadline + button
- **Split**: Image on one side, text on other
- **Video**: Background video with overlay text
- **Slider**: Multiple images that rotate

### Content Sections
- **Services Grid**: 3-6 service cards with icons/images
- **Pricing Tables**: Side-by-side comparison tables
- **Contact Forms**: With or without embedded map
- **Gallery**: Image grids for portfolios/menu items
- **Testimonials**: Customer reviews in cards or slider

## Quick Component Assembly Example

Want to build a **plumbing company website**? Here's what to copy:

```
- navigation/sticky.html → Copy to your header
- hero/split.html → Customize with "Emergency Plumbing" headline
- services/grid.html → Add plumbing services (pipe repair, water heaters, etc.)
- testimonials/cards.html → Copy real customer reviews
- contact/with-map.html → Add your phone number and service area
- footer/multi-column.html → Add business hours and quick links
```

## CSS Variables for Easy Branding

All colors are defined in `css/core.css`:

```css
:root {
  --primary-color: #C25E00;    /* Main brand color */
  --secondary-color: #8B4513;  /* Accent color */
  --accent-color: #D4AF37;     /* Highlights, buttons */
  --text-dark: #2C1810;        /* Headings, important text */
  --text-light: #FAF3E0;       /* Light text on dark backgrounds */
  --bg-light: #FFF8F0;         /* Light background */
}
```

**To rebrand**: Just update these 6 variables and the whole site updates!

## File Size Guidelines

- Keep CSS under 25KB (gzipped) for fast loading
- Images: Max 300KB per image, use WebP format
- Hero video: Max 5MB, compressed

## Accessibility Checklist

- [ ] All images have alt text
- [ ] Color contrast ratio 4.5:1 minimum
- [ ] All interactive elements have focus states
- [ ] Form inputs have labels
- [ ] Mobile-friendly tap targets (44px minimum)

## Common Customizations

### Change Font Pairing
Edit the Google Fonts link in your HTML:

```html
<!-- Current: Cinzel + Lato (elegant, professional) -->
<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Lato:wght@400;700&display=swap" rel="stylesheet">

<!-- Modern/Tech: Inter + Poppins -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Poppins:wght@400;600&display=swap" rel="stylesheet">

<!-- Playful/Fun: Fredoka + Open Sans -->
<link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;600&family=Open+Sans:wght@400;600&display=swap" rel="stylesheet">
```

### Remove Animations
If you want a simpler, faster site:
- Remove `animations.css` import
- Delete `class="reveal-up"`, `class="reveal-scale"` from elements
- Site will load instantly with no scroll animations

## Support & Resources

- **Component Guide**: See `docs/COMPONENT-GUIDE.md` for detailed component docs
- **Content Checklist**: See `docs/CONTENT-CHECKLIST.md` for what you need to gather
- **Industry Guides**: Check `docs/INDUSTRY-SPECIFIC/` for business-specific tips

## LLM Agent Instructions

**Important**: When using this template with an AI coding agent:

1. Reference the specific component file you want (e.g. "use components/services/grid.html")
2. Specify which example to model after (e.g. "like the restaurant example but for a hair salon")
3. Provide the actual content (business name, services, prices, contact info)
4. Ask for modifications to specific sections only - don't rebuild from scratch

This template is designed for **fast assembly**, not从零开始 creation.
