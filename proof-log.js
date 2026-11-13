// The Proof Log: a running list of things that shipped. Newest first.
// Add an entry with:   node tools/proof-add.mjs "<what shipped>" "<optional link>"
// Rule: an entry goes in only after the thing exists and someone else could see it or run it.
window.PROOF_LOG = [
  { "date": "2026-11-13", "tag": "faso", "text": "This site went live.", "url": "" },
  { "date": "2026-11-11", "tag": "studio", "text": "49 of 49 automated tests passing on the game studio's main branch.", "url": "" },
  { "date": "2026-11-06", "tag": "studio", "text": "Three more games merged. The test suite grew from 20 tests to 49.", "url": "" },
  { "date": "2026-11-03", "tag": "studio", "text": "First game built end to end by an AI agent passed review and merged.", "url": "" },
  { "date": "2026-11-03", "tag": "studio", "text": "Bot-playtest harness merged: three bots of different skill play a game, and it's rejected if the better one doesn't win.", "url": "" },
  { "date": "2026-11-03", "tag": "studio", "text": "Fifth sandbox gate merged: a game's score must be a real number.", "url": "" },
  { "date": "2026-11-01", "tag": "site", "text": "Sextant product site live.", "url": "https://bisforbenjermin.github.io/sextant-site/" },
  { "date": "2026-10-22", "tag": "studio", "text": "Game generation service built.", "url": "" },
  { "date": "2026-10-20", "tag": "studio", "text": "Tests wired to run on every push, plus a guard that stops AI agents editing the rulebook.", "url": "" },
  { "date": "2026-10-19", "tag": "studio", "text": "Two reference games built against the contract.", "url": "" },
  { "date": "2026-09-06", "tag": "studio", "text": "First commit: the contract every game must satisfy.", "url": "" },
  { "date": "2026-05-16", "tag": "open source", "text": "LogosEngine published: multi-model inquiry with an audit log.", "url": "https://github.com/bisforbenjermin/logosengine" }
];
