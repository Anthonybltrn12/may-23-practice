
const calculator = require("./index");
const odd = calculator.odd
const multiply = calculator.multiply

describe('testing suite 1', () => {




    describe("multiplication tests:", () => {
        test('product(2,3): mulitplying 2 * 3 should return 6', () => {
            expect(multiply.product(2, 3)).toBe(6);
        })

        test('product(5,6): mulitplying 5 * 6 should return 30', () => {
            expect(multiply.product(5, 6)).toBe(30);
        })

        test('product(1,2): mulitplying 1 * 2 should return 2', () => {
            expect(multiply.product(1, 2)).toBe(2);
        })
    })





    describe('concatOdds tests:', () => {
        test('odd([1 ,2 ,3], [4, 5, 6]): concatenating these arrays should return [1, 3, 5] ', () => {
            expect(odd.concat([1, 2, 3])).toBe([1, 3, 5]);
        }) 
        test('odd([2 ,4 ,6], [1, 3, 7]): concatenating these arrays should return [1, 3, 7] ', () => {
            expect(odd.concat([2, 4, 6])).toBe([1, 3, 7]);
        })
        test('odd([1 ,8 ,5], [7, 5, 11]): concatenating these arrays should return [1, 5, 7, 11] ', () => {
            expect(odd.concat([1, 8, 5])).toBe([7, 5, 11]);
        })
    })

})