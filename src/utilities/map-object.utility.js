"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * static members for @type {Map<K, V>}
 *
 * @export
 * @class MapObjectUtility
 */
var MapObjectUtility = /** @class */ (function () {
    function MapObjectUtility() {
    }
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
    MapObjectUtility.getMap = function (o, valueGetter) {
        if (!o) {
            console.log('object to be mapped is not truthy');
            return null;
        }
        var iterable = Object.keys(o).map(function (propertyName) {
            var propertyValue = o[propertyName];
            var value = valueGetter(propertyName, propertyValue);
            return [propertyName, value];
        });
        return new Map(iterable);
    };
    return MapObjectUtility;
}());
exports.MapObjectUtility = MapObjectUtility;
//# sourceMappingURL=map-object.utility.js.map