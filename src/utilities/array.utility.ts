/**
 * static members for @type {Array}
 *
 * @export
 * @class ArrayUtility
 */
export class ArrayUtility {
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
