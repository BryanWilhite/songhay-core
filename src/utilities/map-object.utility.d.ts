/**
 * static members for @type {Map<K, V>}
 *
 * @export
 * @class MapObjectUtility
 */
export declare class MapObjectUtility {
    /**
     * gets @type {Map<string, TValue>} from an object
     *
     * @static
     * @template TValue
     * @param {{ [index: string]: any }} o
     * @param {(propertyName: string, propertyValue: any) => TValue} valueGetter
     * @returns {(Map<string, TValue> | null)}
     * @memberof MapObjectUtility
     */
    static getMap<TValue>(o: {
        [index: string]: any;
    }, valueGetter: (propertyName: string, propertyValue: any) => TValue): Map<string, TValue> | null;
}
