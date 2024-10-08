import { leap } from "../src/leap.js";

test("leap", () => {
  // expect(() => leap(-2000)).toThrow(Error);
  // expect(() => leap("hai")).toThrow(TypeError);

  expect(leap(2024)).toBe(true);
  expect(leap(2004)).toBe(true);
  expect(leap(1996)).toBe(true);
  expect(leap(1600)).toBe(true);
  expect(leap(2400)).toBe(true);

  expect(leap(1900)).toBe(false);
  expect(leap(2100)).toBe(false);
  expect(leap(2200)).toBe(false);

  expect(leap(2019)).toBe(false);
  expect(leap(2015)).toBe(false);
  expect(leap(1700)).toBe(false);
});
