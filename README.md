# Forge — Training Log (standalone PWA)

A self-contained progressive web app version of your training log. Runs entirely
in your browser — data is stored in `localStorage` on your device, nothing is
sent to a server.

## What's in this folder
- `index.html` — the app shell (loads React/Recharts from CDN, then runs the app)
- `app.js` — the application itself (same UI/logic as the Claude artifact version)
- `icons.js` — a small self-contained icon set (no external icon library dependency)
- `manifest.json` + `sw.js` — PWA metadata and offline service worker
- `icon-192.png` / `icon-512.png` — placeholder app icons (swap these for your own anytime)

## Deploying (free, ~10–15 minutes) — GitHub Pages

1. Create a free GitHub account if you don't have one: https://github.com/signup
2. Create a new repository (e.g. `forge-fitness`) — public is fine, it's just static files.
3. Upload all the files in this folder to the repository (drag-and-drop works on
   github.com — use "Add file → Upload files").
4. In the repo, go to **Settings → Pages**. Under "Source," choose **Deploy from a branch**,
   pick `main` and `/ (root)`, then save.
5. GitHub gives you a URL like `https://yourusername.github.io/forge-fitness/` —
   that's your live app. It can take a minute or two to go live the first time.

Alternatives that work the same way: **Netlify** or **Vercel** — both let you drag-and-drop
this folder onto their dashboard for an even faster deploy, no git required.

## Adding it to your phone's home screen

Once deployed, open the live URL on your phone:

**iPhone (Safari):** Share icon → Add to Home Screen
**Android (Chrome):** ⋮ menu → Add to Home Screen (or "Install app")

You'll get a real app icon that opens full-screen, works offline after the first
load, and keeps your data on-device.

## Importing from Strava

Same workflow as before: ask Claude (in your chat) to pull an activity from Strava.
Claude will give you a JSON block — paste it into the "Paste from Strava" box on
the Cardio tab.

## Storage limits

Your data lives in the browser's `localStorage`, which typically caps around
5–10MB depending on the browser. That's plenty for structured session logs, but
progress photos are the fastest way to use that space — the app compresses photos
before storing them, but if you're logging a lot of photos over time, keep an eye
on it. (Clearing your browser's site data for this app will erase everything, so
avoid "Clear browsing data" for this site if you want to keep your history.)

## Customizing the icons

`icon-192.png` and `icon-512.png` are simple placeholders. Replace them with your
own square PNGs (same filenames, same folder) any time — no code changes needed.
