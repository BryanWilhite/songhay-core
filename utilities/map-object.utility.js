/**
 * static members for @type {Map<K, V>}
 *
 * @export
 */
var MapObjectUtility = /** @class */ (function () {
    function MapObjectUtility() {
    }
    /**
     * gets @type {Map<string, TValue>} from an object
     */
    MapObjectUtility.getMap = function (o, valueGetter) {
        if (!o) {
            console.warn('object to be mapped is not truthy');
            return null;
        }
        var iterable = Object.keys(o).map(function (propertyName) {
            var propertyValue = o[propertyName];
            var value = valueGetter ? valueGetter(propertyName, propertyValue) : propertyValue;
            return [propertyName, value];
        });
        return new Map(iterable);
    };
    /**
     * gets @type {Map<string, TValue>} from an object
     * of @type {Array<{ key: string; value: any }>}
     *
     * @see https://stackoverflow.com/a/26265095/22944
     */
    MapObjectUtility.getMapFromKeyValuePairs = function (pairs, valueGetter) {
        var initialValue = {};
        var o = pairs.reduce(function (a, i) {
            a[i.key] = i.value;
            return a;
        }, initialValue);
        return MapObjectUtility.getMap(o, valueGetter);
    };
    /**
     * gets an object with string property names
     * from a map with @types {string | number}
     *
     * @see https://macwright.org/2017/03/13/maps-not-strictly-better.html
     */
    MapObjectUtility.getObject = function (map) {
        var o = {};
        if (!map) {
            return o;
        }
        map.forEach(function (v, k) { return o[k] = v; });
        return o;
    };
    return MapObjectUtility;
}());
export { MapObjectUtility };
//# sourceMappingURL=map-object.utility.js.map