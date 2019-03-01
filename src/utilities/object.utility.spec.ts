import { ObjectUtility } from './object.utility';

test('should make camel case', () => {
    let o: any = { One: 0, Two: false, Eight: '8' };
    o = ObjectUtility.lowerCasePropertyChar(o);
    console.log(o);
    const actual = Object.keys(o)
        .sort()
        .reduce((a, k, i) => {
            if (i === 1) {
                return a.substring(0, 1).concat(k.substring(0, 1));
            }
            return a.concat(k.substring(0, 1));
        });
    const expected = 'eot';
    expect(actual).toEqual(expected);
});
