/**
 * static members for @type {Object}
 *
 * @export
 */
export declare class ObjectUtility {
    /**
     * mutates object properties to lowercase
     */
    static lowerCasePropertyChar(o: {
        [index: string]: any;
    }, charIndex?: number): {
        [index: string]: any;
    };
    /**
     * renames a property of an object
     *
     * [https://medium.com/front-end-weekly/immutably-rename-object-keys-in-javascript-5f6353c7b6dd]
     */
    static renameProperty(oldProperty: string, newProperty: string, { [oldProperty]: old, ...others }: {
        [x: string]: any;
    }): {
        [index: string]: any;
    };
}
