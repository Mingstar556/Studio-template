# Studio Template — Visibility Studio 🎬📸

A high-end, futuristic 3D & motion-driven photography and videography shooting studio website template. Built with **Next.js 16**, **TypeScript**, **Tailwind CSS v4**, **Three.js**, **GSAP**, and **Framer Motion**.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Mingstar556/Studio-template)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)
[![Three.js](https://img.shields.io/badge/Three.js-WebGL-black?logo=three.js)](https://threejs.org/)
[![GSAP](https://img.shields.io/badge/GSAP-ScrollTrigger-88CE02?logo=greensock)](https://greensock.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-Animation-black?logo=framer)](https://www.framer.com/motion/)

---

## 🌟 Key Features

1. **3D Interactive Camera Lens (Three.js / WebGL)**
   - Custom 3D mechanical camera assembly with 9 rotating aperture blades, metallic optical finishes, and studio spot/rim lighting.
   - Smooth mouse-responsive parallax and auto-rotational idle state.

2. **Glass UI & 3D Interactive Buttons**
   - Reusable `GlassButton` component with real-time 3D cursor-tracking tilt (`perspective(600px) rotateX/Y`).
   - Backdrop blur, frosted glass borders (`border-white/10`), and dynamic radial light reflections.

3. **Motion Architecture (GSAP + Framer Motion)**
   - GSAP ScrollTrigger for pinned timeline narratives and smooth reveals.
   - Framer Motion staggered entrance choreographies, layout transition pills (`layoutId`), and animated metric counters.
   - Accessible by default — respects `prefers-reduced-motion`.

4. **Multi-Page Production Architecture**
   - **`/` (Home)**: Viewfinder HUD, 3D Hero, Services 2×2, Selected Work Masonry, Animated Stats, Testimonials, and Interactive CTA.
   - **`/work` (Our Work)**: 12-project showcase with interactive category filtering, technical lens telemetry, and modal view.
   - **`/about` (About)**: Studio philosophy, stage specifications, team leadership profiles, and core values.
   - **`/background` (Our Background)**: Heritage vertical timeline (2012–2024), soundstage facilities, and luxury client roster.
   - **`/contact` (Contact)**: Booking inquiry form with budget selectors, studio location info, GPS radar HUD, and interactive FAQ accordions.

5. **Camera Studio Aesthetic & Dark Theme**
   - Deep cinematic black palette (`#000000`, `#18181B`, `#27272A`, `#F8FAFC`).
   - Reticle crosshairs, optical metadata overlays (`f/1.4`, `1/250s`, `ISO 100`, `REC [4K 60FPS]`).
   - Verified license badge in footer (`License #VS-2024-PRO`) with live status indicator.

---

## 🚀 Quick Start

### 1. Clone the repository
```bash
git clone https://github.com/Mingstar556/Studio-template.git
cd Studio-template
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to experience the site.

### 4. Build for production
```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
├── src/
│   ├── app/
│   │   ├── about/page.tsx         # About studio & team
│   │   ├── background/page.tsx    # Studio heritage & timeline
│   │   ├── contact/page.tsx       # Booking & inquiries
│   │   ├── work/page.tsx          # Filterable project portfolio
│   │   ├── globals.css            # Tailwind v4 theme & glass tokens
│   │   ├── layout.tsx             # Root layout with Archivo & Space Grotesk fonts
│   │   └── page.tsx               # Studio homepage
│   ├── components/
│   │   ├── home/                  # Hero, Services, Featured Work, Stats, Testimonials, CTA
│   │   ├── layout/                # Floating Glass Navbar & Studio Footer with License
│   │   ├── providers/             # SmoothScroll provider
│   │   ├── three/                 # Three.js 3D Camera Scene
│   │   └── ui/                    # 3D Tilt GlassButton, SectionHeading, PageTransition
└── public/                        # Static assets
```

---

## 📄 License & Verification

Licensed & Verified Studio © 2024 Visibility Studio. All Rights Reserved.  
Official License `#VS-2024-PRO`.
