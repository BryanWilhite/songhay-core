/**
 * static members for @type {Array}
 *
 * @export
 * @class ArrayUtility
 */
export class ArrayUtility {
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
    public static findDuplicates<T>(data: T[]): T[] {
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
    public static sortItems<T extends { [key: string]: any }>(
        items: T[],
        propertyName: string
    ) {
        if (!items) {
            return items;
        }
        return items.sort((a, b) => {
            const nameA = a[propertyName].toUpperCase(); // ignore upper and lowercase
            const nameB = b[propertyName].toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }

            // names must be equal
            return 0;
        });
    }
}
