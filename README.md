# ShareStash Web App

A standalone Next.js web application for the ShareStash peer-to-peer rental marketplace. Connects to the same Firebase backend as the mobile app.

## Pages

| Page | URL | Description |
|------|-----|-------------|
| Landing | `/` | Marketing home page |
| Browse | `/browse` | Item grid with search & category filters |
| Item Details | `/item/[id]` | Full item view with pricing & owner |
| Login | `/login` | Email/password sign in |
| Register | `/register` | Create new account |
| Profile | `/profile` | View your profile, sign out |
| Public Profile | `/user/[id]` | View another user's profile & items |
| Privacy | `/privacy` | Privacy policy |
| Terms | `/terms` | Terms of service |
| Help | `/help` | Help center |

## Setup Instructions

### 1. Install dependencies

```bash
cd sharestash-web
npm install
```

### 2. Run locally

```bash
npm run dev
```

Open http://localhost:3000

### 3. Build for production

```bash
npm run build
```

This creates a static export in the `out/` folder.

### 4. Deploy to Firebase Hosting

Update `firebase.json` in your PeerRentalApp project to point hosting to the `out/` folder:

```json
{
  "hosting": {
    "public": "../sharestash-web/out",
    "rewrites": [{ "source": "**", "destination": "/index.html" }]
  }
}
```

Or deploy as a separate Firebase Hosting site. See Firebase docs for multi-site hosting.

```bash
firebase deploy --only hosting
```

## Tech Stack

- **Next.js 14** — React framework with App Router
- **Tailwind CSS** — Utility-first CSS
- **Firebase** — Auth, Firestore, Storage (same backend as mobile)
- **Lucide React** — Icon library
- **TypeScript** — Type safety
