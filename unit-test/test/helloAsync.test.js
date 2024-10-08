import { helloAsync } from "../src/helloAsync.js";

test("hello Async", async () => {
  expect(await helloAsync("barra")).resolves.toBe("Hello barra");
});
