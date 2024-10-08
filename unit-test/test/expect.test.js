const can1 = {
  name: "pamplemousse",
  ounces: 12,
};

const can2 = {
  name: "pamplemousse",
  ounces: 12,
};

describe("the can", () => {
  test("has 12 ounces", () => {
    expect(can1).toEqual(2);
  });

  test("has a sophisticated name", () => {
    expect(can1).not.toBe(can2);
  });
});
