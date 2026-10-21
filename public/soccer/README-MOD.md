# Super Liquid Soccer — modded build

Drop this whole `soccer/` folder into your project's `public/` folder (same as the 2024 version).

## Mods
- Select (switch player) button on touch screens, key **Q** on keyboard
  - picks the teammate closest to the ball; if that's already you, the next-closest
  - disabled while you have the ball (like FC / eFootball)
- Pause menu shows `select : <Q>`
- Tutorial shows a one-line select hint
- Poki SDK runs locally from `patch/poki/` (ads/tracking go to `patch/null.*`), with an offline fallback in index.html

## Redeploying an updated index.pck
Bump `CACHE_VERSION` in `index.service.worker.js` (mod-select-v1 -> v2 ...),
otherwise browsers that already played keep the old cached game.
