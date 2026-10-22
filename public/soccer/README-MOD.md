# Super Liquid Soccer — modded build (mod-v5)

Drop this whole `soccer/` folder into your project's `public/` folder.
Full control guide: see the "Super Liquid Soccer – Mobile Controls" doc.

## What's modded
- Select (switch player): touch button + Q. Closest to the ball, or next-closest if that's you. Off while you have the ball.
- Switch prediction arrow over the player select will pick (colour or off in Settings > gameplay+)
- Player switch auto / manual (Settings > gameplay+)
- Pressure (press button / E): hold to jockey goal-side of the ball carrier
- Shots: hold SELECT + shoot = finesse, hold SPRINT + shoot = power, shoot then PASS = fake shot (nearby defenders 10-30% chance to bite). Arrow on the grass shows the shot type.
- Corners: aim + power with an exact guide arc; thru toggles lofted/driven; select changes taker
- Free kicks: aim on goal, hold shoot and release in the green zone (partial arc only); >=90% = knuckleball; select changes taker
- Penalties revamped (match + shootouts): marker = where it goes, hold shoot for power, over-hitting can go high
- Throw-ins (eFootball style): joystick turns the thrower, pass = throw to the teammate you face, chip = long throw
- Match stats (pause menu "stats", and beside the half/full-time screens)
- Pause menu: restart, edit buttons (drag to move), stats
- Settings > gameplay+: button size, button opacity, reset layout
- Poki SDK runs locally from patch/poki/ with an offline fallback in index.html

## Redeploying an updated index.pck
Bump `CACHE_VERSION` in `index.service.worker.js` (currently mod-v5 -> mod-v6 ...),
otherwise browsers that already played keep the old cached game.
