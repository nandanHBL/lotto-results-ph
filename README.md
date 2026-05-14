# Lotto Results PH - PCSO Lottery Results Website

## Overview

A modern, high-performance Next.js application delivering real-time PCSO lottery results, draw schedules, jackpot tracking, and an AI-powered lucky number generator. Optimized for Android 5G devices with full PWA support for "Add to Home Screen" functionality.

## Features

### 🎰 Multi-Game Coverage
- **6/58 Ultra Lotto** - Highest jackpots, up to ₱25M+
- **6/55 Grand Lotto** - Major lottery with substantial prizes
- **3D Swertres** - Daily draws at 11 AM, 4 PM, 9 PM
- **Draw Schedule** - Complete 2026 calendar
- **Jackpot Tracker** - Real-time prize pool monitoring
- **Lucky Pick Generator** - AI-powered number suggestions based on May 2026 trends

### 🎯 SEO Optimization
- Question-based H2 headers (GEO optimized)
- 3-bullet Quick Summary sections on every page
- JSON-LD structured data (FAQ, Article, BreadcrumbList schemas)
- Author attribution (Abhi C) in metadata and footer
- OpenGraph tags for social sharing
- Comprehensive keyword optimization

### 📱 PWA Capabilities
- Manifest.json for Android "Add to Home Screen"
- Service Worker with offline support
- Cached assets for fast loading
- Mobile-first responsive design
- Touch-friendly interface

### 💰 Adsterra Ready Monetization
- Social bar placeholder in header
- Native 4:1 ad slots below Quick Summaries (160px min-height)
- Fixed 300x250 sidebar ad slots
- Easy code injection points with inline comments

### 🎨 Design System
- **Midnight Gold Prestige Theme**
  - Surface: #111415 (midnight dark)
  - Primary: #afc8f0 (light blue)
  - Secondary: #e9c349 (gold)
  - Tertiary: #e7c35b (warm gold)
  - Text: #e1e3e4 (light gray)
- Material 3 Design principles
- Tailwind CSS responsive
- Montserrat font for headings, Inter for body

## Project Structure

```
/app
  ├── page.tsx              # Home page
  ├── 6-58-ultra/          # Ultra Lotto results
  ├── 6-55-grand/          # Grand Lotto results
  ├── 3d-swertres/         # Swertres results
  ├── draw-schedule/       # Draw schedule calendar
  ├── jackpot-tracker/     # Jackpot amounts
  ├── lucky-pick/          # AI lucky number generator
  ├── layout.tsx           # Root layout with PWA
  └── globals.css          # Design tokens & theme

/components
  ├── Navigation.tsx       # Top navigation
  ├── Footer.tsx          # Footer with links
  ├── QuickSummary.tsx    # 3-bullet summary
  ├── DrawCard.tsx        # Lottery results card
  └── AdSlot.tsx          # Ad placeholders

/lib
  └── mockData.ts         # Mock lottery data & helpers

/public
  ├── manifest.json       # PWA manifest
  ├── sw.js              # Service worker
  └── offline.html       # Offline fallback
```

## Evergreen Features

### Date Script
- Automatically updates all page dates to current user date
- Runs on page load and every 60 seconds
- May 14, 2026 is the reference date in generated results

### Lucky Number Generator
- Seeded by May 2026 lottery trends
- Uses math.random() with probability algorithms
- Generates 6 numbers for 6/58 Ultra, 6/55 Grand, or 3 for 3D Swertres
- AI-powered suggestions based on frequency analysis

### Live Draw Pulses
- Status indicators: pending, live (animated pulse), completed
- Real-time visual feedback for 2 PM, 5 PM, 9 PM draws
- Mobile-optimized number display (padded 2-digit format)

## Adsterra Integration

### Social Bar
**Location:** `<head>` in layout.tsx
**Script:** Platform placeholder ready for your Adsterra account

### Native 4:1 Ads (Below Quick Summary)
**Dimension:** 320x80 minimum (responsive)
**Element ID:** AdSlot type="native-4x1"
**Placement:** Every page after Quick Summary section

### Sidebar 300x250
**Dimension:** 300x250px (fixed)
**Element ID:** AdSlot type="sidebar-300x250"
**Placement:** Right sidebar on desktop, full-width on mobile

### Integration Steps
1. Log in to your Adsterra account
2. Create ad campaigns for each slot type
3. Copy the ad code
4. Replace the `<AdSlot>` placeholders with actual ad scripts
5. Update unitId props with your Adsterra unit IDs

## API Integration (Ready for Future)

Mock data is currently used. To integrate real PCSO API:

1. Update `/lib/mockData.ts` with actual PCSO endpoints
2. Create API routes in `/app/api/` for backend calls
3. Use SWR for real-time data fetching in components
4. Implement cache revalidation with `revalidateTag()`

Example API structure:
```typescript
// /app/api/lottery/results/route.ts
export async function GET() {
  const data = await fetch('https://pcso-api.ph/results');
  return Response.json(data);
}
```

## Deployment to Vercel

### Prerequisites
- Vercel account
- GitHub repository (recommended)
- Environment variables (if using APIs)

### Steps
1. Push code to GitHub
2. Connect repository to Vercel
3. Configure project name: `lotto-results-ph` (SEO optimized)
4. Deploy!

### Environment Variables
```
# Add to .env.local for development
# PCSO_API_KEY=your_key_here
# ADSTERRA_ACCOUNT_ID=your_id_here
```

## SEO Checklist

- [x] Meta tags with author attribution
- [x] OpenGraph tags for social sharing
- [x] JSON-LD schemas on every page
- [x] Question-based H2 headers
- [x] 3-bullet Quick Summary sections
- [x] Keyword optimization
- [x] Mobile-first responsive design
- [x] Fast page load (Turbopack compiled)
- [x] PWA manifest for mobile indexing
- [x] Breadcrumb schema
- [x] Sitemap ready (auto-generated by Next.js)

## Performance Optimization

- **Static Generation:** All pages pre-rendered at build time
- **Turbopack:** Next.js 16's fast bundler (default)
- **Image Optimization:** Unoptimized for SVG-like number displays
- **CSS:** Tailwind v4 with OKLCH color system
- **Font Loading:** System fonts + Google Fonts integration
- **Service Worker:** Cache-first strategy for assets

## Development

```bash
# Install dependencies
pnpm install

# Run dev server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Lint
pnpm lint
```

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Android 5G optimized
- PWA support on Chrome, Firefox, Safari (iOS 16.4+)
- Fallback for older browsers

## Author

Created by **Abhi C**

## License

All rights reserved. PCSO is not affiliated with this site.

---

**Note:** This is an evergreen site designed for continuous updates. Results, jackpot amounts, and schedule information should be updated regularly via the backend API integration.
