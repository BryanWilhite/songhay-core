/**
 * static members for @type {Object}
 *
 * @export
 * @class ObjectUtility
 */
export class ObjectUtility {
    /**
     * mutates object properties to lowercase
     *
     * @static
     * @param {{ [index: string]: any }} o
     * @param {number} [charIndex=0]
     * @returns {{ [index: string]: any }}
     * @memberof ObjectUtility
     */
    static lowerCasePropertyChar(
        o: { [index: string]: any },
        charIndex: number = 0
    ): { [index: string]: any } {
        if (!o) {
            return o;
        }

        const lowerCase = (s: string) => {
            return `${s.charAt(charIndex).toLowerCase()}${s.slice(
                charIndex + 1
            )}`;
        };

        Object.keys(o).forEach(k => {
            o = ObjectUtility.renameProperty(k, lowerCase(k), o);
        });

        return o;
    }

    /**
     * renames a property of an object
     *
     * [https://medium.com/front-end-weekly/immutably-rename-object-keys-in-javascript-5f6353c7b6dd]
     *
     * @static
     * @param {string} oldProperty
     * @param {string} newProperty
     * @param {*} { [oldProperty]: old, ...others }
     * @returns {{ [index: string]: any }}
     * @memberof ObjectUtility
     */
    static renameProperty(
        oldProperty: string,
        newProperty: string,
        { [oldProperty]: old, ...others }
    ): { [index: string]: any } {
        return { [newProperty]: old, ...others };
    }
}
