import { ReducedGroup } from 'src/models/reduced-group';
/**
 * static members for @type {Array}
 *
 * @export
 */
export declare class ArrayUtility {
    /**
     * returns an array of duplicates
     *
     * @tutorial https://js-algorithms.tutorialhorizon.com/2016/01/25/find-duplicates-in-an-array/
     */
    static findDuplicates<T>(data: T[]): T[];
    /**
     * reduces the specified reducible to @type {ReducedGroup} groups
     *
     * @description https://github.com/BryanWilhite/songhay-core/issues/20
     */
    static groupBy(reducible: any[], keyGetter: Function): ReducedGroup[];
    /**
     * returns `true` when the specified array is not truthy
     * or when its length is zero
     */
    static isNotTruthyOrIsEmpty<T>(data: T[]): boolean;
    /**
     * sorts any @type {object} by the specified property.
     *
     * @description https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
     */
    static sortItems<T extends {
        [key: string]: any;
    }>(items: T[], propertyName: string, isNumeric?: boolean, isDescending?: boolean): T[];
}
