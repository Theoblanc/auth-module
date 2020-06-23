const component = require("./LoginContainer.tsx");

test("it is test that component is working", () => {
  expect(component).rejects.toMatch("errors");
});
