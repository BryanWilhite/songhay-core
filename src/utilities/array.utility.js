"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * static members for @type {Array}
 *
 * @export
 * @class ArrayUtility
 */
var ArrayUtility = /** @class */ (function () {
    function ArrayUtility() {
    }
    /**
     * returns an array of duplicates
     *
     * [https://js-algorithms.tutorialhorizon.com/2016/01/25/find-duplicates-in-an-array/]
     *
     * @static
     * @template T
     * @param {T[]} data
     * @returns {T[]}
     * @memberof ArrayUtility
     */
    ArrayUtility.findDuplicates = function (data) {
        var result = [];
        data.forEach(function (element, index) {
            if (data.indexOf(element, index + 1) === -1) {
                return;
            }
            if (result.indexOf(element) === -1) {
                result.push(element);
            }
        });
        return result;
    };
    /**
     * returns `true` when the specified array is not truthy
     * or when its length is zero
     *
     * @static
     * @template T
     * @param {T[]} data
     * @returns {boolean}
     * @memberof ArrayUtility
     */
    ArrayUtility.isNotTruthyOrIsEmpty = function (data) {
        return !data || !data.length;
    };
    /**
     * sorts any @type {object} by the specified property.
     *
     * [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort]
     *
     * @static
     * @template T
     * @param {T[]} items
     * @param {string} propertyName
     * @returns
     * @memberof ArrayUtility
     */
    ArrayUtility.sortItems = function (items, propertyName) {
        if (!items) {
            return items;
        }
        return items.sort(function (a, b) {
            var nameA = a[propertyName].toUpperCase(); // ignore upper and lowercase
            var nameB = b[propertyName].toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            // names must be equal
            return 0;
        });
    };
    return ArrayUtility;
}());
exports.ArrayUtility = ArrayUtility;
//# sourceMappingURL=array.utility.js.map