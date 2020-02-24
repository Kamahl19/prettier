"use strict";

const prettier = require("prettier/local");

let warnings = "";

beforeAll(() => {
  jest
    .spyOn(console, "warn")
    .mockImplementation(text => (warnings += text + "\n"));
});

beforeEach(() => {
  warnings = "";
});

afterAll(() => {
  jest.restoreAllMocks();
});

test("API format with deprecated parser (postcss) should work", () => {
  expect(() =>
    prettier.format("body { color: #131313; }", { parser: "postcss" })
  ).not.toThrowError();
  expect(warnings).toMatchSnapshot();
});
