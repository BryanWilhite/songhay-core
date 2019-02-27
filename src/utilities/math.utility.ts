/**
 * shared math routines
 *
 * @export
 * @class MathUtility
 */
export class MathUtility {
    /**
     * gets a random integer between min (inclusive) and max (inclusive)
     *
     * @memberof MathUtility
     *
     * @see https://stackoverflow.com/a/1527820/22944
     */
    static getRandom(minimum: number, maximum: number): number {
        return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    }

    /**
     * returns `true` when the specified value is numeric
     * otherwise `false`
     *
     * [https://stackoverflow.com/a/50376498/22944]
     *
     * @static
     * @param {(string | number)} value
     * @returns {boolean}
     * @memberof YappyCommon
     */
    public static isNumeric(value: string | number): boolean {
        if (value === null) {
            return false;
        }
        if (value === undefined) {
            return false;
        }
        return !isNaN(Number(value.toString()));
    }

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
    static round(value: number, decimals: number): number {
        let n = parseFloat(`${value}e${decimals}`);
        n = parseFloat(`${Math.round(n)}e-${decimals}`);
        return n;
    }
}
