# Aqua ViTea — Premium Website Redesign (Concept Demo)

> **Concept Redesign** — *This is a creative frontend concept demo prepared for pitch purposes, not the official Aqua ViTea website.*

---

## 1. Quick Start & Execution

### Prerequisites
- Node.js (v18+ or v22+)
- npm or pnpm

### Installation & Launch
```bash
# 1. Install dependencies
npm install

# 2. Launch the local development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build locally
npm run preview
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 2. Creative Concept & Architecture Overview

The goal of this redesign was to transform Aqua ViTea's standard Shopify storefront into an award-winning, cinematic beverage-brand experience while preserving 100% of the authentic brand identity, verified claims, and genuine product catalog.

### Key Creative Highlights:
- **Authentic Official Can Photography & 3D Tilt:** Real high-resolution transparent packaging renders directly from `aquavitea.com` with responsive 3D perspective mouse tilt, dynamic rim lighting, and floating botanical art elements.
- **Liquid Pouring Background Stream:** Smooth animated cascading kombucha liquid wave with viscous gradient flow, effervescent fizzy micro-bubbles rising, and dynamic ambient lighting matching each flavor.
- **Drink Splash & Droplets Effect (Hero):** Energetic liquid spray arcs and fizzy bursting droplets around the floating hero can.
- **Single-Line White Dynamic Navbar:** Pure white header with unbreakable single-line navigation (`flex-nowrap whitespace-nowrap`), dynamic hover color tied to the active drink in the hero section, audio fizz toggle, and full mobile drawer.
- **Product-Type Switcher (Vieve Reference):** Seamless switching between **Raw Kombucha (6 flavors)** and **Aqua Seltzer Probiotic (4 flavors)** with dynamic headline styling and stat chips.
- **Compact Flavor Cards:** Sleek cards where the official can takes up 75% of the card height, with tasting profile, nutrition strip, and zoom hover.
- **Editorial Brand Story:** Highlighting founder Jeff Weaber and Dr. Katina Martin's Vermont farmhouse origins (2005–2007), "food as medicine" philosophy, Middlebury facility (153 Pond Lane), 30 local jobs, and pioneering kombucha-on-tap model.
- **The 10 Official Quality Badges:** Verified alcohol extracted (<0.5% ABV), live natural probiotics, certified organic ingredients, lower sugar, clean ingredients, GMO-free, gluten-free, antioxidants & enzymes, vegan-friendly, and paleo-friendly.
- **Official Retailer Strip:** High-contrast presentation of the 6 official stockists (Hannaford, Price Chopper / Market 32, Shaw's, Healthy Living Market & Cafe, City Market Onion River Co-op, and Middlebury Natural Foods Co-op).

---

## 3. Comprehensive Source Map

Strict compliance with the source rules was maintained. Zero invented products, zero fake prices, and zero fictional claims.

| Content / Asset Element | Exact Source URL | Verified Details & Usage |
| :--- | :--- | :--- |
| **Official Logos** | `https://aquavitea.com/cdn/shop/files/AquaViTea_Footer_Logo_500x_...` | Original official brand vector-rendered PNGs in header, mobile menu, and footer. |
| **Hero Tagline** | `https://aquavitea.com/` | *"FUNKtionally good for you"* |
| **Brand Story & Founders** | `https://aquavitea.com/pages/about-us` | Jeff Weaber & Katina Martin, Portland Lucky Labrador brewing craft, Salisbury farmhouse, 2007 launch, 30 Middlebury employees. |
| **Middlebury Facility** | `https://aquavitea.com/pages/about-us` | 153 Pond Lane, Middlebury, Vermont 05753, USA |
| **Non-Alcoholic Compliance** | `https://aquavitea.com/pages/about-us` & product pages | Proprietary spinning cone disc extraction (< 0.5% ABV) without pasteurization. |
| **Strawberry Sage (Featured)** | `https://aquavitea.com/pages/strawberry-sage` | *"Soft & Sweet"* — soft strawberries with subtle notes of sage, basil, and mint. |
| **Blueberry Social** | `https://aquavitea.com/pages/blueberry-social` | Blueberry sweetness, lemon tang, cool cardamom smokiness. |
| **Elderberry** | `https://aquavitea.com/pages/elderberry` | Sweet & delicious, immune-studied elderberries, cold season sidekick. |
| **Peach Out** | `https://aquavitea.com/pages/peach-out` | Juicy peach, refreshing mint, and bubbly raw kombucha. |
| **Blood Orange** | `https://aquavitea.com/pages/blood-orange` | Creamsicle notes, real organic Madagascar vanilla beans. |
| **Hibiscus Ginger Lime** | `https://aquavitea.com/pages/hibiscus-ginger-lime` | Floral lime and spicy ginger juice to awaken taste buds. |
| **Raspberry + Lime Seltzer** | `https://aquavitea.com/pages/raspberry-lime-aqua-seltzer` | 15 calories, 1g sugar, Bacillus Subtilis DE111® probiotics. |
| **Pomegranate + Cherry Seltzer** | `https://aquavitea.com/pages/pomegranate-cherry-aqua-seltzer` | Sun-ripened cherry & tart pomegranate, DE111® probiotics. |
| **Cucumber + Mint Seltzer** | `https://aquavitea.com/pages/cucumber-mint-aqua-seltzer` | Cool cucumber, tangy lime, clean mint, 15 calories. |
| **Grapefruit + Thyme Seltzer** | `https://aquavitea.com/pages/grapefruit-thyme-aqua-seltzer` | Ruby grapefruit, subtle floral wild thyme notes, 15 calories. |
| **10 Official Health Badges** | `https://aquavitea.com/` (badge image CDN links) | Alcohol Extracted, Live Probiotics, Organic Ingredients, Lower Sugar, Clean Ingredients, GMO Free, Gluten Free, Antioxidants & Enzymes, Vegan, Paleo. |
| **6 Retailers** | `https://aquavitea.com/` (retailer logos) | Hannaford, Price Chopper / Market 32, Shaw's, Healthy Living, City Market, Middlebury Natural Foods Co-op. |
| **Contact & Inquiries** | `https://aquavitea.com/pages/contact` & `/pages/sales-inquiries` | `contact@aquavitea.com` |
| **Social Handles** | `https://aquavitea.com/` footer | Instagram/TikTok: `@aquaviteakombucha`, Twitter: `@aquavitea`, Facebook: `/AquaVitea/` |

---

## 4. Asset Directory Structure

```text
assets/
├── badges/
│   ├── antioxidants-enzymes.png
│   ├── clean-ingredients.png
│   ├── gluten-free.png
│   ├── gmo-free.png
│   ├── lower-sugar.png
│   ├── natural-probiotics.png
│   ├── organic-ingredients.png
│   ├── paleo-friendly.png
│   ├── vegan-friendly.png
│   └── verified-alcohol-extracted.png
├── cutouts/
│   ├── blood-orange/can.png
│   ├── blueberry-social/can.png
│   ├── cucumber-mint/can.png
│   ├── elderberry/can.png
│   ├── grapefruit-thyme/can.png
│   ├── hibiscus-ginger-lime/can.png
│   ├── peach-out/can.png
│   ├── pomegranate-cherry/can.png
│   ├── raspberry-lime/can.png
│   └── strawberry-sage/can.png
├── logo/
│   ├── logo-main.png
│   └── logo-footer.png
├── original/
│   ├── [10 flavors with original can.png, lifestyle.jpg, art.png]
├── retailers/
│   ├── city-market.png
│   ├── hannaford.png
│   ├── healthy-living.png
│   ├── middlebury-coop.png
│   ├── price-chopper.png
│   └── shaws.png
└── story/
    ├── brewing-process.png
    ├── brewery-facility.jpg
    ├── founder-jeff.png
    ├── hero-funktionally.png
    ├── tractor-farm.png
    └── vermont-map.jpg
```

---

## 5. Technology Stack

- **Framework:** React 19 + TypeScript + Vite
- **Styling:** Tailwind CSS (custom Vermont palette, fluid typography, responsive layout)
- **3D Graphics:** Three.js (WebGL, ACES Filmic Tone Mapping, PBR materials, custom UV texture wrapping, studio lights)
- **Icons:** Lucide React
- **Animations:** CSS keyframes (subtle fizz bubbles, continuous ticker marquee, smooth transitions)
