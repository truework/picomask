import tap from "tap";

import { picomask } from "../index";

tap.test("no pattern", async (t) => {
  const res = picomask("123");

  t.equal(res.value, "");
});

tap.test("limits length, aggregates", async (t) => {
  const res = picomask("123456", "aaa");

  t.equal(res.value, "123");
  t.equal(res.a, "123");
});

tap.test("respects spacers", async (t) => {
  const res = picomask("123456", "a-a a(a)");

  t.equal(res.value, "1-2 3(4)");
  t.equal(res.a, "1234");
});

tap.test("short string", async (t) => {
  const res = picomask("123", "aaaaaa");

  t.equal(res.value, "123");
});
