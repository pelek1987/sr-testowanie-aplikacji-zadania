import { sum } from '../../utils/sum';

describe('sum function', () => {
    it('should equal 3 when 1 and 2 have been given', () => {
        expect(sum(1, 2)).toBe(3);
    });

    it('should equal 0 when nothing has been given', () => {
        expect(sum()).toBe(0);
    });

    it('should equal 1 when only 1 has been given', () => {
        expect(sum(1)).toBe(1);
    });

    it('throws when type other than number has been given', () => {
        expect(() => {
            sum('1', 2);
        }).toThrow();
    });
})
