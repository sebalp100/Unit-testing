const stringLength = require('./index.js');

test('string length', () => {
  expect(stringLength("Hello World")).toBe(10);
});

test('string length content', () => {
  expect(stringLength("Hello good world")).toBe('string not long enough')
});