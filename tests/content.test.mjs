import assert from "node:assert/strict";
import test from "node:test";

import {
  courseStats,
  faqItems,
  firstWins,
  offers,
  proofPoints,
  testimonials,
  valueCards,
} from "../lib/site-content.mjs";

test("preserves the original products, prices, access windows, and inclusions", () => {
  assert.deepEqual(
    offers.map(({ id, price, accessMonths }) => ({ id, price, accessMonths })),
    [
      { id: "basic", price: 49.99, accessMonths: 6 },
      { id: "premium", price: 99.99, accessMonths: 12 },
    ],
  );

  assert.ok(offers[0].features.some((feature) => feature.includes("36")));
  assert.ok(offers[1].features.some((feature) => /direct.*Dmitrii/i.test(feature)));
});

test("makes the value equation concrete without inventing a new product", () => {
  assert.deepEqual(courseStats, {
    topics: 36,
    videos: 71,
    exercises: 20,
    lessonMinutes: "10–15",
  });

  assert.ok(proofPoints.some((item) => /European Champion/i.test(item.label)));
  assert.ok(proofPoints.some((item) => /8,500/i.test(item.value)));
  assert.ok(faqItems.some((item) => /instant access/i.test(item.answer)));
  assert.equal(valueCards.length, 3);
  assert.equal(firstWins.length, 3);
});

test("keeps the original testimonial set and video proof", () => {
  assert.equal(testimonials.length, 4);
  assert.deepEqual(
    testimonials.map((item) => item.name),
    ["Ana", "Vasiliy", "Alyona", "Stan"],
  );
  assert.ok(testimonials.every((item) => item.vimeoId));
  assert.ok(testimonials.every((item) => item.videoSrc.endsWith(".mp4")));
  assert.match(testimonials[0].quote, /shooting-club instructor/i);
  assert.match(testimonials[0].quote, /coach beginners/i);
});
