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
     * returns `true` when the specified array is not truthy
     * or when its length is zero
     *
     * @static
     * @template T
     * @param {T[]} data
     * @returns {boolean}
     * @memberof ArrayUtility
     */
    public static isNotTruthyOrIsEmpty<T>(data: T[]): boolean {
        return !data || !data.length;
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
     * @param {boolean} [isNumeric=false]
     * @param {boolean} [isDescending=false]
     * @returns
     * @memberof ArrayUtility
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
            ? items.sort((a, b) => +a[propertyName] - +b[propertyName])
            : items.sort((a, b) => {
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
