const capitalize = require('./capitalize.js');

test('capitalize first letter 1', () => {
    expect(capitalize("hello")).toBe("Hello");
});

test('capitalize first letter 2', () => {
    expect(capitalize(10)).toMatch("10");
});