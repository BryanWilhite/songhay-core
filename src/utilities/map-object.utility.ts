/**
 * static members for @type {Map<K, V>}
 *
 * @export
 */
export class MapObjectUtility {
    /**
     * gets @type {Map<string, TValue>} from an object
     */
    static getMap<TValue>(
        o: { [index: string]: any },
        valueGetter?: (propertyName: string, propertyValue: TValue) => TValue
    ): Map<string, TValue> | null {
        if (!o) {
            console.log('object to be mapped is not truthy');
            return null;
        }
        const iterable = Object.keys(o).map(propertyName => {
            const propertyValue = o[propertyName] as TValue;
            const value = valueGetter ? valueGetter(propertyName, propertyValue) : propertyValue;
            return [propertyName, value] as [string, TValue];
        });
        return new Map<string, TValue>(iterable);
    }

    /**
     * gets @type {Map<string, TValue>} from an object
     * of @type {Array<{ key: string; value: any }>}
     *
     * @see https://stackoverflow.com/a/26265095/22944
     */
    static getMapFromKeyValuePairs<TValue>(
        pairs: Array<{ key: string; value: any }>,
        valueGetter?: (propertyName: string, propertyValue: TValue) => TValue
    ): Map<string, TValue> | null {
        const initialValue: { [index: string]: TValue } = {};
        const o = pairs.reduce((a, i) => {
            a[i.key] = i.value;
            return a;
        }, initialValue);
        return MapObjectUtility.getMap(o, valueGetter);
    }

    /**
     * gets an object with string property names
     * from a map with @types {string | number}
     *
     * @see https://macwright.org/2017/03/13/maps-not-strictly-better.html
     */
    static getObject(map: Map<string | number, any>): { [key: string]: any } {
        const o: { [key: string]: any } = {};

        if (!map) { return o; }

        map.forEach(pair => o[pair.key as string] = pair.value);

        return o;
    }

}
