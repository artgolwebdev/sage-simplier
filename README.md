# SAGE - Professional Tattoo Shop Website

A brutal minimalistic tattoo shop website featuring graffiti-style typography, 3D cube gallery, video backgrounds, and an interactive booking system.

![SAGE Tattoo Shop](https://img.shields.io/badge/Status-Live-success?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

## 🔥 Live Demo

**[https://artgolwebdev.github.io/sage-simplier/](https://artgolwebdev.github.io/sage-simplier/)**

## ✨ Features

### 🎨 Design
- **Brutal Minimalistic Aesthetic** - High contrast black & white design
- **Graffiti/Urban Typography** - Black Ops One & Bebas Neue fonts
- **Fully Responsive** - Mobile-first design that works on all devices
- **Smooth Animations** - Hover effects, transitions, and loading animations

### 🖼️ Gallery System
- **3D Cube Gallery** - Powered by Swiper.js with cube effect
- **8 Artist Portfolios** - 105+ tattoo images across 8 artists
- **Artist Profile Navigation** - Circular profile images as interactive indicators
- **Auto-play & Manual Control** - Gallery auto-rotates with manual navigation

### 📹 Video Backgrounds
- **Dual Video Layout** - Split-screen video backgrounds in About section
- **Responsive Video Grid** - Adapts to mobile (stacked) and desktop (side-by-side)

### 📝 Multi-Step Booking Form
- **Step 1: Placement** - 8 body placement options with icons
- **Step 2: Size** - S, M, L, XL size selection with measurements
- **Step 3: Date** - Calendar picker for preferred appointment date
- **Step 4: Budget** - 4 budget tiers (Basic, Standard, Premium, Luxury)
- **WhatsApp Integration** - Automatically generates formatted message and redirects

### 🎯 Navigation
- **Fixed Header** - Sticky navigation with icons and CTA button
- **Smooth Scrolling** - Seamless section navigation
- **Icon-Based Menu** - Visual indicators for Home, About, Contact

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Custom styling with CSS Grid & Flexbox
- **Vanilla JavaScript** - No frameworks, pure JS
- **Swiper.js v11** - 3D cube gallery slider
- **SweetAlert2** - Beautiful modal dialogs for booking form
- **Google Fonts** - Black Ops One & Bebas Neue

## 📁 Project Structure

```
sage-tattoo-shop-simplier/
├── assets/
│   ├── about/
│   │   ├── lady-mostera.mp4
│   │   └── groc-paint.mp4
│   └── artists/
│       ├── dani/
│       ├── derk/
│       ├── gosha/
│       ├── groc/
│       ├── jenya/
│       ├── shon/
│       ├── sunches/
│       └── tact/
├── index.html
├── style.css
├── script.js
└── README.md
```

## 🚀 Quick Start

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/artgolwebdev/sage-simplier.git
   cd sage-simplier
   ```

2. **Open in browser**
   - Simply open `index.html` in your browser
   - Or use a local server (recommended):
   ```bash
   # Using Python
   python -m http.server 8000

   # Using PHP
   php -S localhost:8000

   # Using Node.js (http-server)
   npx http-server
   ```

3. **Visit**
   ```
   http://localhost:8000
   ```

## 📱 Sections

### HOME
- SAGE branding with massive typography
- "Professional Tattoo Shop" tagline
- 3D cube gallery showcasing artist work
- Artist profile navigation dots

### ABOUT
- Full-screen dual video backgrounds
- "Guest Spots is Open" message
- "Walk-ins Always Welcome" message

### CONTACT
- Phone & WhatsApp contact
- Instagram link
- Studio hours (Sunday-Saturday)
- Location with Google Maps & Waze integration
- Powered by Groc & Sunches

## 🎨 Customization

### Update Artist Gallery

Edit the `artists` array in `script.js`:

```javascript
const artists = [
    {
        name: 'artist-name',
        profile: 'assets/artists/artist-name/profile/profile.jpg',
        images: [
            'assets/artists/artist-name/image1.jpg',
            'assets/artists/artist-name/image2.jpg',
            // Add more images...
        ]
    },
    // Add more artists...
];
```

### Update Contact Information

Edit the contact details in `index.html`:

```html
<a href="tel:+972503288193" class="info-link">+972 50-328-8193</a>
<a href="https://instagram.com/sage.tattooshop" target="_blank" class="info-link">@sage.tattooshop</a>
```

### Update WhatsApp Number

Edit the phone number in `script.js`:

```javascript
const phoneNumber = '972526967850'; // Your WhatsApp number
```

### Change Colors

Edit CSS variables in `style.css`:

```css
:root {
    --black: #000000;
    --white: #FFFFFF;
    --gray: #333333;
}
```

## 📊 Artist Portfolio

The site showcases work from 8 talented tattoo artists:

| Artist | Images | Style |
|--------|--------|-------|
| Dani | 7 | Various styles |
| Derk | 11 | Colorful, neo-traditional |
| Gosha | 12 | Traditional, bold |
| Groc | 6 | Artwork & design |
| Jenya | 13 | Oriental, floral |
| Shon | 14 | Ornamental, geometric |
| Sunches | 17 | Illustrative, colorful |
| Tact | 25 | Traditional, flash |

**Total: 105+ tattoo images**

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

MIT License - feel free to use this project for your own tattoo shop or portfolio!

## 👨‍💻 Credits

- **Powered by**: Groc & Sunches
- **Location**: Eilat Street 22, Tel Aviv-Yafo
- **Phone**: +972 50-328-8193
- **Instagram**: [@sage.tattooshop](https://instagram.com/sage.tattooshop)

## 🤖 Development

Built with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>

---

**Made with ❤️ for SAGE Tattoo Shop**
