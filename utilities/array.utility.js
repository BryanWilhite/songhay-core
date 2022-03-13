/**
 * static members for @type {Array}
 *
 * @export
 */
var ArrayUtility = /** @class */ (function () {
    function ArrayUtility() {
    }
    /**
     * returns an array of duplicates
     *
     * @tutorial https://js-algorithms.tutorialhorizon.com/2016/01/25/find-duplicates-in-an-array/
     */
    ArrayUtility.findDuplicates = function (data) {
        if (!data) {
            return [];
        }
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
     * reduces the specified reducible to @type {ReducedGroup} groups
     *
     * @description https://github.com/BryanWilhite/songhay-core/issues/20
     */
    // tslint:disable-next-line:ban-types
    ArrayUtility.groupBy = function (reducible, keyGetter) {
        var initialValue = {};
        var groupByObjects = reducible.reduce(function (accumulator, current, i, dataRef, k) {
            if (k === void 0) { k = keyGetter(current); }
            return ((accumulator[k] || (accumulator[k] = [])).push(current), accumulator);
        }, initialValue);
        var groupByModels = [];
        for (var p in groupByObjects) {
            if (!groupByObjects.hasOwnProperty(p)) {
                continue;
            }
            groupByModels.push({
                key: p,
                values: groupByObjects[p]
            });
        }
        return groupByModels;
    };
    /**
     * returns `true` when the specified array is not truthy
     * or when its length is zero
     */
    ArrayUtility.isNotTruthyOrIsEmpty = function (data) {
        return !data || !data.length;
    };
    /**
     * sorts any @type {object} by the specified property.
     *
     * @description https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
     */
    ArrayUtility.sortItems = function (items, propertyName, isNumeric, isDescending) {
        if (isNumeric === void 0) { isNumeric = false; }
        if (isDescending === void 0) { isDescending = false; }
        if (!items) {
            return items;
        }
        var sorted = isNumeric
            ? items.sort(function (a, b) {
                if ((typeof a.propertyName === 'undefined') || typeof b.propertyName === 'undefined') {
                    return -1;
                }
                return +a[propertyName] - +b[propertyName];
            })
            : items.sort(function (a, b) {
                if ((typeof a.propertyName === 'undefined') || typeof b.propertyName === 'undefined') {
                    return -1;
                }
                var A = a[propertyName].toUpperCase();
                var B = b[propertyName].toUpperCase();
                if (A < B) {
                    return -1;
                }
                if (A > B) {
                    return 1;
                }
                // A must equal B:
                return 0;
            });
        if (isDescending) {
            return sorted.reverse();
        }
        return sorted;
    };
    return ArrayUtility;
}());
export { ArrayUtility };
//# sourceMappingURL=array.utility.js.map