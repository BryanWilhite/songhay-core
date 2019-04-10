import { MapObjectUtility } from './map-object.utility';

test('should return `Map<string, string>` from an arbitrary object with the same values', () => {
    const o: any = {
        one: 'x',
        two: 'x',
        three: 'x'
    };
    const mapped = MapObjectUtility.getMap<string>(o);
    expect(mapped).toBeTruthy();
    console.log({ mapped });

    expect(Array.from(mapped.values()).every(i => i === 'x')).toEqual(true);
});

test('should return `Map<string, string>` from an arbitrary object with almost the same values', () => {
    const o: any = {
        one: 'one',
        two: 2.0,
        three: { v: 'three' }
    };
    const mapped = MapObjectUtility.getMap<string>(
        o,
        (propertyName: string, propertyValue: any) => (propertyName === 'three') ? propertyValue.v : 'x'
    );
    expect(mapped).toBeTruthy();
    console.log({ mapped });

    expect(mapped.get('three')).toEqual('three');
});

test('should return `Map<string, number>` from key-value pairs', () => {
    const pairs = [
        { key: 'one', value: 1.0 },
        { key: 'two', value: 2.0 },
        { key: 'three', value: 3.0 }
    ];

    const mapped = MapObjectUtility.getMapFromKeyValuePairs<number>(pairs);
    expect(mapped).toBeTruthy();
    console.log({ mapped });
});
