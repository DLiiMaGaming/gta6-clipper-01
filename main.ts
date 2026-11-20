// gta6-clipper-01 — hands the entry video's address to the house.
//
// The entry itself is the YouTube Short: a 32-second vertical cut of the
// most kinetic stretch of Rockstar's Grand Theft Auto VI Trailer 2
// (Vice City night chase, Lucia driving, golden-hour skyline, VI logo),
// closing with an end card that pitches make.fun to the viewer.
// This program does nothing about the video beyond copying its address
// from the repository into the output directory, where the gate reads it.
//
// Node 22, standard library only. Run locally with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

// In the grader's sandbox the repository is mounted at /bot; on a local
// machine there is no /bot, so fall back to the working directory. The
// fallback only ever triggers outside the sandbox, never inside it.
const botDir =
  process.env.MAKEFUN_BOT_DIR ?? (existsSync('/bot') ? '/bot' : '.');
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = join(botDir, 'VIDEO.json');
const target = join(outputDir, 'VIDEO.json');

// Read first so a malformed VIDEO.json fails loudly instead of
// silently copying a file the gate would refuse.
const parsed: unknown = JSON.parse(readFileSync(source, 'utf8'));
if (
  typeof parsed !== 'object' ||
  parsed === null ||
  typeof (parsed as { url?: unknown }).url !== 'string'
) {
  console.error('VIDEO.json must be a JSON object with a string "url" field');
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(source, target);
console.log(`VIDEO.json copied to ${target}`);
