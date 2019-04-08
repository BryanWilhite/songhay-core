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
        valueGetter: (propertyName: string, propertyValue: any) => TValue
    ): Map<string, TValue> | null {
        if (!o) {
            console.log('object to be mapped is not truthy');
            return null;
        }
        const iterable = Object.keys(o).map(propertyName => {
            const propertyValue = o[propertyName];
            const value = valueGetter(propertyName, propertyValue);
            return [propertyName, value] as [string, TValue];
        });
        return new Map<string, TValue>(iterable);
    }
}
