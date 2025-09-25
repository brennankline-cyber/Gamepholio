# Portfolio Design Guidelines

## Design Approach
**Reference-Based Approach** - Drawing inspiration from modern developer portfolios like GitHub profiles, Vercel showcases, and gaming portfolio sites. The design prioritizes visual appeal to showcase creative work while maintaining professional credibility.

## Core Design Elements

### Color Palette
**Primary Colors:**
- Dark theme primary: 220 15% 15% (deep slate)
- Light theme primary: 220 10% 95% (light gray)
- Brand accent: 270 80% 65% (vibrant purple) - sparingly used for CTAs and highlights

**Supporting Colors:**
- Text primary dark: 220 5% 95%
- Text primary light: 220 15% 20%
- Subtle borders: 220 10% 25% (dark) / 220 10% 85% (light)

### Typography
- **Headers:** Inter or Poppins (Google Fonts) - Bold weights (600-700)
- **Body:** Inter (Google Fonts) - Regular (400) and Medium (500)
- **Code/Tech:** JetBrains Mono (Google Fonts) for tech stack badges

### Layout System
**Spacing Primitives:** Tailwind units of 4, 8, 12, 16, 24
- Consistent padding: p-8, p-12
- Section spacing: space-y-16, space-y-24
- Component margins: m-4, m-8

### Component Library

**Navigation:**
- Fixed header with logo, nav links, theme toggle
- Clean, minimal with subtle backdrop blur

**Hero Section:**
- Full viewport height with centered content
- Large typography introducing developer identity
- Subtle animated background particles or gradient mesh
- Primary CTA button leading to projects

**Project Grid:**
- Masonry-style layout showcasing game thumbnails
- Hover effects revealing project titles and brief descriptions
- Filter/sort functionality by technology or category

**Project Cards:**
- Large preview images/GIFs of games in action
- Tech stack badges with rounded corners
- Clean typography hierarchy
- Subtle shadows and rounded corners (rounded-lg)

**Individual Project Pages:**
- Hero image/video of the game
- Detailed description with development process
- Tech stack breakdown
- Live demo and source code links
- Screenshot gallery

### Images
**Hero Section:** No large hero image - focus on typography and subtle background effects
**Project Showcases:** High-quality screenshots, gameplay GIFs, or short video previews for each game
**About Section:** Professional headshot or creative developer workspace photo

### Interactions
- Smooth scroll between sections
- Subtle hover effects on project cards (slight scale, shadow increase)
- Loading states for project filtering
- Smooth page transitions between project details

### Special Considerations
- Dark mode as default with seamless light mode toggle
- Optimized for showcasing interactive content (games)
- Mobile-responsive grid that adapts from 3 columns to single column
- Fast loading with lazy-loaded project images
- SEO-friendly structure for discoverability

The overall aesthetic balances creative flair with professional polish, ensuring the portfolio appeals to both potential employers and gaming community members.