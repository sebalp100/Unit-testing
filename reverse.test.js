const reverseString = require('./reverse.js');

test('reverse string 1', () => {
    expect(reverseString("hello world")).toBe("dlrow olleh");
});