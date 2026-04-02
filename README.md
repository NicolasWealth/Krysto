# Krysto

> AI study planner that turns your exam goals into structured daily tasks.

Krysto is a landing page and waitlist app built with React, Vite, and Firebase. It collects early-access signups via Firestore and is designed to be deployed on Vercel.

---

## Tech Stack

- **React 18** — UI framework
- **Vite 7** — build tool and dev server
- **Firebase Firestore** — waitlist data storage
- **CSS Variables** — design token system, no CSS framework
- **IntersectionObserver** — scroll-triggered animations, no animation library

---

## Project Structure

```
krysto/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── index.jsx               # App entry point (ReactDOM)
    ├── index.css               # Global styles, design tokens, animations
    ├── App.jsx                 # Root component
    ├── firebase/
    │   └── firebase.js         # Firebase init and Firestore export
    ├── hooks/
    │   └── useReveal.js        # IntersectionObserver scroll reveal hook
    └── components/
        ├── Navbar/
        │   ├── Navbar.jsx
        │   └── Navbar.css
        ├── Hero/
        │   ├── index.jsx
        │   └── Hero.css
        ├── SocialProof/
        │   ├── SocialProof.jsx
        │   └── SocialProof.css
        ├── Features/
        │   ├── Features.jsx
        │   └── Features.css
        ├── Waitlist/
        │   ├── Waitlist.jsx
        │   └── Waitlist.css
        └── Footer/
            ├── Footer.jsx
            └── Footer.css
```

---

## Getting Started

### 1. Clone and install

```bash
git clone https://github.com/YOUR_USERNAME/krysto.git
cd krysto
npm install
```

### 2. Set up environment variables

Create a `.env` file in the root of the project:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

All keys are prefixed with `VITE_` so Vite exposes them to the client. Never commit this file — it is already in `.gitignore`.

### 3. Run the dev server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start local dev server |
| `npm run build` | Build for production to `/dist` |
| `npm run preview` | Preview the production build locally |

---

## Firebase Setup

1. Go to the [Firebase Console](https://console.firebase.google.com) and create a project
2. Enable **Firestore Database** in your project
3. Copy your config values into `.env`
4. Set Firestore security rules to allow writes to the `waitlist` collection

### Firestore data schema

Each waitlist submission writes the following document to the `waitlist` collection:

```js
{
  email: "user@example.com",
  created_at: Timestamp,  // serverTimestamp()
  source: "landing-page",
  status: "pending"
}
```

---

## Deployment (Vercel)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and import the repo
3. Vite is auto-detected — no build config changes needed
4. Add all `VITE_` environment variables in the Vercel dashboard under **Settings → Environment Variables**
5. Deploy — every push to `main` triggers a redeploy automatically

After deploying, add your Vercel URL to **Firebase Console → Authentication → Settings → Authorized Domains** to prevent Firestore from blocking requests.

---

## Design System

All design tokens are defined as CSS variables in `src/index.css`.

| Token | Value | Usage |
|---|---|---|
| `--bg-base` | `#0d0f14` | Page background |
| `--bg-surface` | `#13161e` | Input backgrounds |
| `--bg-card` | `#1a1e2a` | Feature cards |
| `--accent` | `#e8a030` | Buttons, highlights, labels |
| `--font-display` | Instrument Serif | Headings |
| `--font-body` | DM Sans | Body text |

### Animations

- `.reveal` — add to any element to opt into scroll-triggered fade-up via `useReveal`
- `.stagger` — add alongside `.reveal` on a grid container to cascade children in sequence
- `fadeUp` / `pulseGlow` — keyframe animations used in the Hero section

---

## License

MIT
