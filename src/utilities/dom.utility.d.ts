/**
 * static members for DOM manipulation
 *
 * @export
 * @class DomUtility
 */
export declare class DomUtility {
    /**
     * gets the element, extending @type {HTMLElement}
     * from the specified @type {ElementRef},
     * usually derived from @ViewChild
     *
     * @static
     * @template TElement
     * @param {{[index:string]: any}} elementRef
     * @returns {TElement}
     * @memberof DomUtility
     */
    static getHtmlElement<TElement extends HTMLElement>(elementRef: {
        [index: string]: any;
    }): TElement | null;
    /**
     * get an array of @type {Element}
     * from the specified collection
     *
     * @static
     * @param {HTMLCollection} collection
     * @returns {Element[]}
     * @memberof DomUtility
     */
    static getHtmlElements(collection: HTMLCollection): Element[];
    /**
     * gets the @type {HTMLHeadingElement}
     * from the specified heading level
     *
     * @static
     * @param {number} level
     * @returns {HTMLHeadingElement}
     * @memberof DomUtility
     * @see https://stackoverflow.com/a/51289849/22944
     */
    static getHtmlHeadingElement(level: number): HTMLHeadingElement;
    /**
     * gets the @type {CSSStyleDeclaration}
     * from the specified @type {Element}
     *
     * @static
     * @param {{ [index: string]: any }} element
     * @returns {CSSStyleDeclaration}
     * @memberof DomUtility
     */
    static getStyleDeclaration(element: {
        [index: string]: any;
    }): CSSStyleDeclaration | null;
}
