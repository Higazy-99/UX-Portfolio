# Mohamed Higazy - UX/CX Designer Portfolio

A modern portfolio website built with React, TypeScript, and Framer Motion featuring a Brutalist Minimal design aesthetic.

## Tech Stack

- **Frontend**: React 19, TypeScript, Vite
- **Styling**: TailwindCSS 4
- **Animations**: Framer Motion / Motion
- **Backend**: Express, tRPC
- **Database**: MySQL with Drizzle ORM

## Getting Started

### Prerequisites
- Node.js 20+
- npm or pnpm

### Installation

```bash
# Install dependencies
npm install

# Copy environment file
cp .env.example .env

# Start development server
npm run dev
```

### Environment Variables

Create a `.env` file with:
```
VITE_APP_TITLE=Mohamed Higazy - UX/CX Designer Portfolio
VITE_APP_LOGO=/favicon.ico
VITE_ANALYTICS_ENDPOINT=
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run test` | Run unit tests |
| `npm run check` | TypeScript type checking |

## Project Structure

```
client/
├── src/
│   ├── components/     # React components
│   │   ├── Hero.tsx
│   │   ├── Navigation.tsx
│   │   ├── CaseStudies.tsx
│   │   ├── Experience.tsx
│   │   ├── About.tsx
│   │   └── Contact.tsx
│   ├── data/           # Static data (projects)
│   ├── lib/            # Utilities and types
│   └── test/           # Test setup
server/
├── _core/              # Server entry point
```

## Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Smooth scroll animations
- ✅ Custom cursor (desktop)
- ✅ Full-screen mobile navigation
- ✅ Project case study dialogs
- ✅ Scroll progress indicator

## Deployment

### Build for Production

```bash
npm run build
```

Output will be in `dist/` directory.

### Deploy to Vercel/Netlify

1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set output directory: `dist/public`

## Contact

- **Email**: eng.mohamedhigazy@gmail.com
- **LinkedIn**: [mohamedhigazy91](https://www.linkedin.com/in/mohamedhigazy91/)
- **Behance**: [mohamedhigazy92](https://www.behance.net/mohamedhigazy92)

## License

MIT
