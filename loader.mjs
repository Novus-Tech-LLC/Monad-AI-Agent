import { pathToFileURL } from "url";

// Dynamically resolve `ts-node`
const tsNodePath = pathToFileURL("./node_modules/ts-node/esm.mjs").href;

import(tsNodePath)
  .then(() => console.log("✅ ts-node loaded successfully"))
  .catch((err) => {
    console.error("❌ Failed to load ts-node:", err);
    process.exit(1);
  });
