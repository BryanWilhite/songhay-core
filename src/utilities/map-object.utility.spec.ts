import { MapObjectUtility } from './map-object.utility';

describe(MapObjectUtility.name, () => {
    it('should map an arbitrary object the same string', () => {
        const o: any = {
            one: 'one',
            two: 2.0,
            three: { v: 'three' }
        };
        const mapped = MapObjectUtility.getMap<string>(
            o,
            (propertyName: string, propertyValue: any) => 'x'
        );
        console.log({ mapped });
    });
});
