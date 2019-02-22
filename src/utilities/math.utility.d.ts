/**
 * shared math routines
 *
 * @export
 * @class MathUtility
 */
export declare class MathUtility {
    /**
     * gets a random integer between min (inclusive) and max (inclusive)
     *
     * @memberof MathUtility
     *
     * @see https://stackoverflow.com/a/1527820/22944
     */
    static getRandom(minimum: number, maximum: number): number;
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
    static round(value: number, decimals: number): number;
}
