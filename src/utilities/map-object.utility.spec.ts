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

test('should return plain object from map', () => {
    const mapForG1 = new Map<string, any>([['group-one', 'Group One']]);
    const mapForG2: Map<string, any> = null;
    const mapForG3 = new Map<string, any>([['group-three', 'Group Three']]);

    const o1 = MapObjectUtility.getObject(mapForG1);
    expect(o1).toBeTruthy();
    expect(Object.keys(o1).filter(i => i ? true : false).length).toBeGreaterThan(0);

    const o2 = MapObjectUtility.getObject(mapForG2);
    expect(o2).toBeTruthy();
    expect(Object.keys(o2).filter(i => i ? true : false).length).toEqual(0);

    const o3 = MapObjectUtility.getObject(mapForG3);
    expect(o3).toBeTruthy();
    expect(Object.keys(o3).filter(i => i ? true : false).length).toBeGreaterThan(0);

    console.log({ o1, o2, o3 });
});
