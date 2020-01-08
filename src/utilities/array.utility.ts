import { ReducedGroup } from 'src/models/reduced-group';

/**
 * static members for @type {Array}
 *
 * @export
 */
export class ArrayUtility {
    /**
     * returns an array of duplicates
     *
     * @tutorial https://js-algorithms.tutorialhorizon.com/2016/01/25/find-duplicates-in-an-array/
     */
    public static findDuplicates<T>(data: T[]): T[] {
        if (!data) { return []; }

        const result: T[] = [];

        data.forEach((element, index) => {
            if (data.indexOf(element, index + 1) === -1) {
                return;
            }
            if (result.indexOf(element) === -1) {
                result.push(element);
            }
        });

        return result;
    }

    /**
     * reduces the specified reducible to @type {ReducedGroup} groups
     *
     * @description https://github.com/BryanWilhite/songhay-core/issues/20
     */
    // tslint:disable-next-line:ban-types
    public static groupBy(reducible: any[], keyGetter: Function): ReducedGroup[] {
        const initialValue = {};
        const groupByObjects = reducible.reduce(
            (
                accumulator: any,
                current: any,
                i: number,
                dataRef: any,
                k: any = keyGetter(current)
            ) => ((accumulator[k] || (accumulator[k] = [])).push(current), accumulator),
            initialValue
        );
        const groupByModels: ReducedGroup[] = [];

        for (const p in groupByObjects) {
            if (!groupByObjects.hasOwnProperty(p)) {
                continue;
            }
            groupByModels.push({
                key: p,
                values: groupByObjects[p]
            });
        }

        return groupByModels;
    }

    /**
     * returns `true` when the specified array is not truthy
     * or when its length is zero
     */
    public static isNotTruthyOrIsEmpty<T>(data: T[]): boolean {
        return !data || !data.length;
    }

    /**
     * sorts any @type {object} by the specified property.
     *
     * @description https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
     */
    public static sortItems<T extends { [key: string]: any }>(
        items: T[],
        propertyName: string,
        isNumeric: boolean = false,
        isDescending: boolean = false
    ) {
        if (!items) {
            return items;
        }
        const sorted = isNumeric
            ? items.sort((a, b) => {
                if ((typeof a.propertyName === 'undefined') || typeof b.propertyName === 'undefined') { return -1; }
                return +a[propertyName] - +b[propertyName];
            })
            : items.sort((a, b) => {
                if ((typeof a.propertyName === 'undefined') || typeof b.propertyName === 'undefined') { return -1; }
                const A = a[propertyName].toUpperCase();
                const B = b[propertyName].toUpperCase();
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
    }
}
