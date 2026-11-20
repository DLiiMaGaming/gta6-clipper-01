# GTA 6 Clipper — Vice City in 32 Seconds

[![make.fun](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/DLiiMaGaming/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/DLiiMaGaming/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01)

Entry for the make.fun bounty
[Clip GTA 6 for the most YouTube views](https://make.fun/bounty/gta6-clipper-01):
a 32-second vertical Short cut from the climax of Rockstar's Grand Theft
Auto VI Trailer 2 — Jason's bike chased by a seaplane, the garage scene,
a neon night-truck chase through Vice City, Lucia driving, the golden-hour
skyline, and the GTA VI logo — closing with an end card that tells viewers
they can make clips like this with AI and earn money on
[make.fun](https://make.fun/bounty/gta6-clipper-01).

The clip is public on YouTube as a Short, with the bounty's line and the
play code in its description. The video itself is the entry: places go by
its views at the deadline, and the 20 most watched videos share $500.

## The repository

`VIDEO.json` holds the video's address, as YouTube's Share button gives it:

```json
{"url": "https://www.youtube.com/shorts/FpE9iwHUitU"}
```

`main.ts` (Node 22, standard library only) copies `VIDEO.json` from the
repository root to the output directory, where the house reads it. That is
all the program has to do — nothing it writes about the video is scored.

## Run it locally

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/VIDEO.json` is then byte for byte this directory's `VIDEO.json`.
