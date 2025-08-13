# SIFR‑AI — Public Website

Production-ready static site for Cloudflare Pages.  
Includes Stage 3 homepage and Stage 4 pages: `/capabilities`, `/developers`, `/institutions`.

## Quick Deploy (Cloudflare Pages)
1. Push these files to the `main` branch of `hmralawadhi/sifr-ai-homepage`.
2. Cloudflare Pages will auto-build and deploy.
3. No build step required (pure static).

## Embedded Chat
- A lightweight chat widget is included on all pages.
- To enable real-time responses, set in your HTML or a `<script>` tag:
  ```html
  <script>window.SIFRAI_CHAT_ENDPOINT = "https://YOUR_BACKEND/chat";</script>
  ```
- The widget will POST `{ prompt: string }` to that endpoint and display `reply` or `text` from the JSON response.
- Without a backend, it falls back to a front-end echo so the UI remains interactive.

## Structure
```
/index.html
/capabilities/index.html
/developers/index.html
/institutions/index.html
/assets/css/styles.css
/assets/js/main.js
/assets/js/chat.js
/assets/img/logo.svg
```

## Notes
- Last packaged: 2025-08-13 06:58:26 
- Designed to be accessible and responsive.
