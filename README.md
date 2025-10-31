## BUXI DIGITAL · Trading Automation Site

Dark, modern marketing site for BUXI DIGITAL built with Next.js 16 (App Router) and Tailwind CSS v4. The experience promotes the BUXI trading ecosystem, affiliate partners, and the BUXI Trading Assistant.

### Features
- Futuristic dark UI with Inter + Playfair typography, neon accent utilities, and animated glow effects.
- Dedicated routes for Systems, Trading Assistant, About, Learn, and Legal content.
- Responsive navigation with mobile-friendly chips and desktop header.
- Email capture form backed by a configurable webhook (`/api/signup`).
- Placeholder holographic and headshot assets in `public/assets` for rapid theming.

### Getting Started
```bash
npm install
npm run dev
```
Then open http://localhost:3000.

### Environment Variables
Copy `.env.example` to `.env.local` and provide your MailerLite/Zapier endpoint:
```
SIGNUP_WEBHOOK_URL="https://hooks.zapier.com/..."
```

### Available Scripts
- `npm run dev` – start local development server.
- `npm run build` – create an optimized production build.
- `npm run start` – serve the production build.
- `npm run lint` – run ESLint checks.

### Deployment
Deploy straight to Vercel. Connect the GitHub repository, add `SIGNUP_WEBHOOK_URL` in project settings, and enable production builds with `npm run build`. Aim for Lighthouse scores above 90 (performance + accessibility).
