import { mkdirSync, writeFileSync } from "node:fs";

// Final: "slowly" makes the push deliberate — the cat's calm blame is the punchline.
const joke =
  "My cat slowly pushed my phone off the table, watched it shatter, then looked at me like I'd dropped it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
