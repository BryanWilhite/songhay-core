import { MathUtility } from './math.utility';

describe(MathUtility.name, () => {
    it('should round a number', () => {
        expect(MathUtility.round(4.35, 1)).toBe(4.4);
    });
});
