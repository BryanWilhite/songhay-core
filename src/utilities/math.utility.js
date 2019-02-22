"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * shared math routines
 *
 * @export
 * @class MathUtility
 */
var MathUtility = /** @class */ (function () {
    function MathUtility() {
    }
    /**
     * gets a random integer between min (inclusive) and max (inclusive)
     *
     * @memberof MathUtility
     *
     * @see https://stackoverflow.com/a/1527820/22944
     */
    MathUtility.getRandom = function (minimum, maximum) {
        return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    };
    /**
     * rounds the specified value
     *
     * @param {number} value
     * @param {number} decimals
     * @returns {number}
     * @memberof MathUtility
     *
     * @see http://www.jacklmoore.com/notes/rounding-in-javascript/
     */
    MathUtility.round = function (value, decimals) {
        var n = parseFloat(value + "e" + decimals);
        n = parseFloat(Math.round(n) + "e-" + decimals);
        return n;
    };
    return MathUtility;
}());
exports.MathUtility = MathUtility;
//# sourceMappingURL=math.utility.js.map