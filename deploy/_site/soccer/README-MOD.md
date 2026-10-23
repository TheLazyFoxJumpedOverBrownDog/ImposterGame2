# Super Liquid Soccer — modded build (mod-v8)

Drop this whole `soccer/` folder into your project's `public/` folder.
Full control guide: see the "Super Liquid Soccer – Mobile Controls" doc.

## What's modded
- Select (switch player): touch button + Q. Closest to the ball, or next-closest if that's you. Off while you have the ball.
- Switch prediction arrow over the player select will pick (colour or off in Settings > gameplay+)
- Player switch auto / manual (Settings > gameplay+)
- Pressure (press button / E): hold to jockey goal-side of the ball carrier
- Shots: hold SELECT + shoot = finesse, hold SPRINT + shoot = power, shoot then PASS = fake shot (nearby defenders 10-30% chance to bite). Arrow on the grass shows the shot type. Finesse = curled shot into the far/aimed corner: longer hold = higher + faster (full = top corner); accurate for every player, stats change pace and bend.
- Corners: aim + power with an exact guide arc; thru toggles lofted/driven; select changes taker
- Free kicks: aim on goal, hold shoot and release in the green zone (partial arc only); >=90% = knuckleball; select changes taker
- Penalties revamped (match + shootouts): marker = where it goes, hold shoot for power, over-hitting can go high
- Goal kicks (eFootball style): select switches normal <-> aimed (remembered). Aimed: joystick turns, hold shoot = high kick / pass = low kick, release; flies straight, no curl. Keeper's SHOOT stat = kicking leg (max distance + accuracy)
- Main menu "World Cup '26" renamed "All Time Cup '26" (legends); the 26/27 panel keeps "World Cup '26"
- Throw-ins (eFootball style, teammates hold position while you aim): joystick turns the thrower, pass = throw to the teammate you face, chip = long throw
- Match stats (pause menu "stats", and beside the half/full-time screens)
- Pause menu: restart, edit buttons (drag to move), stats
- Settings > gameplay+: button size, button opacity, reset layout
- 26/27 squads mode (green button under Play Game): play match / penalties / World Cup '26 / Chumps League with real current squads (res://TeamsNow/). All clubs unlocked there. Updated: all 68 national teams + all 38 Chumps League clubs
- Menu label shows the mod version (mod_v7)
- Poki SDK runs locally from patch/poki/ with an offline fallback in index.html

## Redeploying an updated index.pck
Bump `CACHE_VERSION` in `index.service.worker.js` (currently mod-v8 -> mod-v9 ...).
Since mod-v7b the page checks for a new build on every load and reloads itself once onto it.
If a device is stuck on an old build from before mod-v7b, open the game once as
`.../soccer/index.html?v=7` (any new number) - after that the normal link updates by itself.
The menu shows the build in the bottom-right corner ("version: mod_v8").
