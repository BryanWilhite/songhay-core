/**
 * shared math routines
 *
 * @export
 */
export declare class MathUtility {
    /**
     * gets a random integer between min (inclusive) and max (inclusive)
     *
     * @see https://stackoverflow.com/a/1527820/22944
     */
    static getRandom(minimum: number, maximum: number): number;
    /**
     * returns `true` when the specified value is numeric
     * otherwise `false`
     *
     * [https://stackoverflow.com/a/50376498/22944]
     */
    static isNumeric(value: string | number): boolean;
    /**
     * rounds the specified value
     *
     * @see http://www.jacklmoore.com/notes/rounding-in-javascript/
     */
    static round(value: number, decimals: number): number;
}
