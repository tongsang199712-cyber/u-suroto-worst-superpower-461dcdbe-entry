// Worst Superpower
//
// The joke: the power sounds like the ultimate fantasy — teleport
// anywhere — until the small print lands: only to places you have
// just left. Every heroic escape ends exactly where you started,
// one room behind yourself. The greatest power in the world, spent
// entirely on arriving back where you already were.
//
// Why it is the worst: a teleport that only goes backwards in your
// own footsteps can never save you, impress anyone, or get you
// anywhere new. You can flee a burning building — straight back
// into the room you just fled. You can dodge a villain — by
// reappearing exactly where they already saw you. It is a power
// with a perfect record: zero distance gained, every single time.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "I can teleport anywhere, but only to places I have just left.";

// Length gate: the entry line must be 1-140 characters.
if (LINE.length < 1 || LINE.length > 140) {
  throw new Error(`Line length ${LINE.length} is outside the 1-140 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, { encoding: "utf8" });

const written = readFileSync("/output/entry.txt", "utf8");
if (written !== LINE) {
  throw new Error("Read-back mismatch: /output/entry.txt differs from the line");
}

console.log(`Wrote ${written.length} characters to /output/entry.txt`);
console.log(written);
