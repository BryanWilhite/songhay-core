/**
 * static members for @type {Array}
 *
 * @export
 * @class ArrayUtility
 */
export declare class ArrayUtility {
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
    static findDuplicates<T>(data: T[]): T[];
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
    static isNotTruthyOrIsEmpty<T>(data: T[]): boolean;
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
    static sortItems<T extends {
        [key: string]: any;
    }>(items: T[], propertyName: string): T[];
}
