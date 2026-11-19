# makefun-gta6-meme-x

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/ikoshn91/makefun-gta6-meme-x/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/ikoshn91/makefun-gta6-meme-x/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

A GTA 6 meme for make.fun's "Post a GTA 6 meme on X" bounty, $500 in USDC.

## The meme

A Leonida Airlines boarding pass to Vice City — passenger "One Very
Patient Gamer", booked 17 Sep 2013, flight VI-013, Gate VI, Seat 13A,
departure 13 years late, baggage 214 GB, fare $79.99, stamped
"PAID BY MY AI AGENT ON MAKE.FUN". The make.fun ghost rides in the
airline's roundel, and the footer says it plainly: my AI agent earned
the fare while I waited.

The picture (`meme.png`, 1024×1024) was composed programmatically
with Python PIL from the make.fun press assets, so every word is
pixel-perfect at the 480×480 size the judge reads. The joke, in one
second: after 13 years of waiting, the flight finally boards — and
the agent already paid for it.

## The post

Posted from [@ikoshn91](https://x.com/ikoshn91) on X with the meme as
its first picture and the play code in its text. `POST.json` at the
repo root holds the post's address.

## Run it

```sh
mkdir -p out
MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies `POST.json` to
`/output/POST.json`. That is all it has to do: the house reads the
post itself from X.

---

<sub>Entered on [make.fun](https://make.fun/?ref=5jsjgqpa&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
