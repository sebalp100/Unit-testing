const calculator = require('./calculator');

describe('sum', () => {
    test('add 1', () => {
        expect(calculator.add(1, 3)).toBe(4);
    });

    test('add 2', () => {
        expect(calculator.add(3, 1)).toBe(4);
    });

    test('add 3', () => {
        expect(calculator.add(199, 30)).toBe(229);
    });
});

describe('subtract', () => {
    test('subtract 1', () => {
        expect(calculator.subtract(1, 3)).toBe(-2);
    });

    test('subtract 2', () => {
        expect(calculator.subtract(3, 1)).toBe(2);
    });

    test('subtract 3', () => {
        expect(calculator.subtract(199, 20)).toBe(179);
    });
});

describe('divide', () => {
    test('divide 1', () => {
        expect(calculator.divide(4, 2)).toBe(2);
    });

    test('divide 2', () => {
        expect(calculator.divide(1, 2)).toBe(0.5);
    });

    test('divide 3', () => {
        expect(calculator.divide(3, 1)).toBe(3);
    });
});

describe('multiply', () => {
    test('multiply 1', () => {
        expect(calculator.multiply(1, 3)).toBe(3);
    });

    test('multiply 2', () => {
        expect(calculator.multiply(3, 3)).toBe(9);
    });

    test('multiply 3', () => {
        expect(calculator.multiply(10, -10)).toBe(-100);
    });
});