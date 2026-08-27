import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

const read = (path) => readFile(new URL(path, root), "utf8");

test("landing page contains the conversion-critical structure", async () => {
  const [page, client, content] = await Promise.all([
    read("app/page.tsx"),
    read("app/interactive.tsx"),
    read("lib/site-content.mjs"),
  ]);
  const source = `${page}\n${client}\n${content}`;

  for (const marker of [
    "Go from curious to confident",
    "36 clear topics",
    "$49.99",
    "99.99",
    "European Champion",
    "Digital education only.",
    'id="pricing"',
    'id="curriculum"',
    'aria-label="Frequently asked questions"',
  ]) {
    assert.match(source, new RegExp(marker.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }

  assert.match(client, /localStorage\.setItem\("reshoot-age-confirmed"/);
  assert.match(client, /prefers-reduced-motion/);
  assert.match(page, /\/brand\/hero-range\.mp4/);
  assert.match(page, /\/brand\/author-range\.mp4/);
  assert.match(page, /\/brand\/confidence-guide\.webp/);
  assert.match(page, /Safety first\. Skills next\./);
  assert.doesNotMatch(page, /player\.vimeo\.com/);
});

test("legal routes preserve the current operator and safety disclosures", async () => {
  const legal = await Promise.all([
    read("app/privacy-policy/page.tsx"),
    read("app/cookie-policy/page.tsx"),
    read("app/terms-and-conditions/page.tsx"),
  ]);
  const source = legal.join("\n");

  assert.match(source, /GO PEP, LLC/);
  assert.match(source, /131 Continental Dr, Suite 305/);
  assert.match(source, /Newark, DE 19713/);
  assert.match(source, /educational purpose(?:s)? only/i);
  assert.match(source, /18/);
});

test("website copy does not use em dashes", async () => {
  const renderedSources = await Promise.all(
    [
      "app/layout.tsx",
      "app/page.tsx",
      "app/interactive.tsx",
      "app/privacy-policy/page.tsx",
      "app/cookie-policy/page.tsx",
      "app/terms-and-conditions/page.tsx",
      "lib/site-content.mjs",
    ].map(read),
  );

  for (const source of renderedSources) {
    assert.doesNotMatch(source, /\u2014/);
  }
});
