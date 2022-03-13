/**
 * shared math routines
 *
 * @export
 */
var MathUtility = /** @class */ (function () {
    function MathUtility() {
    }
    /**
     * gets a random integer between min (inclusive) and max (inclusive)
     *
     * @see https://stackoverflow.com/a/1527820/22944
     */
    MathUtility.getRandom = function (minimum, maximum) {
        return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    };
    /**
     * returns `true` when the specified value is numeric
     * otherwise `false`
     *
     * [https://stackoverflow.com/a/50376498/22944]
     */
    MathUtility.isNumeric = function (value) {
        if (value === null) {
            return false;
        }
        if (value === undefined) {
            return false;
        }
        return !isNaN(Number(value.toString()));
    };
    /**
     * rounds the specified value
     *
     * @see http://www.jacklmoore.com/notes/rounding-in-javascript/
     */
    MathUtility.round = function (value, decimals) {
        var n = parseFloat("".concat(value, "e").concat(decimals));
        n = parseFloat("".concat(Math.round(n), "e-").concat(decimals));
        return n;
    };
    return MathUtility;
}());
export { MathUtility };
//# sourceMappingURL=math.utility.js.map