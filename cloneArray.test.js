const cloneArray = require("./cloneArray");

test("Properly clone a array", () => {
  const arr = [1, 2, 3, 4];
  expect(cloneArray(arr)).toEqual(arr);
});
