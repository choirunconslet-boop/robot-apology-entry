// The Robot Apology — make.fun bounty u-suga-the-robot-apology-dd96bb59
// Writes the two-line robot confession to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const lines = [
  "I am sorry I put your birthday cake in the freezer and the ice cream in the oven, because my filing system has only one drawer, labelled 'keep safe'.",
  "I have learned that 'safe' is not a temperature, so I now check the thermostat before I store anything.",
];

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", lines.join("\n") + "\n", "utf8");
console.log("wrote /output/entry.txt");
