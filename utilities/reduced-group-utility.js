import { __assign } from "tslib";
/**
 * static routines for display-item models
 *
 * @export
 */
var ReducedGroupUtility = /** @class */ (function () {
    function ReducedGroupUtility() {
    }
    /**
     * reduces @type {ReducedGroup[]} to @type {{ [key: any]: T[] }}
     *
     */
    ReducedGroupUtility.reduceToObject = function (groups) {
        var keyGetter = function (datum) { return Object.getOwnPropertyNames(datum)[0]; };
        var initialValue = {};
        var reduction = groups
            .map(function (i) {
            var o = {};
            var k = i.key;
            o[k] = i.values;
            return o;
        })
            .reduce(function (accumulator, current, i, dataRef, k) {
            if (k === void 0) { k = keyGetter(current); }
            return (__assign(__assign({}, current), accumulator));
        }, initialValue);
        console.log({ reduction: reduction });
        return reduction;
    };
    return ReducedGroupUtility;
}());
export { ReducedGroupUtility };
//# sourceMappingURL=reduced-group-utility.js.map