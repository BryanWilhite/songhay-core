/**
 * static members for @type {Map<K, V>}
 *
 * @export
 */
export declare class MapObjectUtility {
    /**
     * gets @type {Map<string, TValue>} from an object
     */
    static getMap<TValue>(o: {
        [index: string]: any;
    }, valueGetter?: (propertyName: string, propertyValue: TValue) => TValue): Map<string, TValue> | null;
    /**
     * gets @type {Map<string, TValue>} from an object
     * of @type {Array<{ key: string; value: any }>}
     *
     * @see https://stackoverflow.com/a/26265095/22944
     */
    static getMapFromKeyValuePairs<TValue>(pairs: Array<{
        key: string;
        value: any;
    }>, valueGetter?: (propertyName: string, propertyValue: TValue) => TValue): Map<string, TValue> | null;
    /**
     * gets an object with string property names
     * from a map with @types {string | number}
     *
     * @see https://macwright.org/2017/03/13/maps-not-strictly-better.html
     */
    static getObject(map: Map<string | number, any>): {
        [key: string]: any;
    };
}
