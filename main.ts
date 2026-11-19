// gta6-meme-x-01 entry (Node 22, standard library only).
//
// The entry is the X post itself: a GTA 6 meme (a Leonida Airlines
// boarding pass to Vice City, 13 years late) posted from @ikoshn91 with
// make.fun and the entrant's play code in its text. This program only
// hands the house the post's address: it copies POST.json from the
// repository root to /output/POST.json, where the gate reads it and
// looks the post up on X. Nothing this program writes is judged.
//
// Before copying, it checks POST.json is a JSON object naming an X
// post address (https://x.com/<handle>/status/<digits>); anything else
// fails loudly instead of handing the gate a bad file. The two runs of
// an entry must write the same bytes, so this program is deterministic:
// no network, no clock, no files outside the repository.
//
// Run the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POST_URL = /^https:\/\/(www\.|mobile\.)?(x\.com|twitter\.com)\/[^/]+\/status\/\d+$/;

const postPath = join(BOT_DIR, 'POST.json');
const post = JSON.parse(readFileSync(postPath, 'utf8')) as unknown;
if (
  typeof post !== 'object' ||
  post === null ||
  typeof (post as { url?: unknown }).url !== 'string' ||
  !POST_URL.test((post as { url: string }).url)
) {
  console.error('POST.json does not name an X post address');
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(postPath, join(OUTPUT_DIR, 'POST.json'));
