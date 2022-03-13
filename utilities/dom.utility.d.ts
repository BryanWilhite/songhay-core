/**
 * static members for DOM manipulation
 *
 * @export
 */
export declare class DomUtility {
    /**
     * gets the element, extending @type {HTMLElement}
     * from the specified @type {ElementRef},
     * usually derived from @ViewChild
     */
    static getHtmlElement<TElement extends HTMLElement>(elementRef: {
        [index: string]: any;
    }): TElement | null;
    /**
     * get an array of @type {Element}
     * from the specified collection
     */
    static getHtmlElements(collection: HTMLCollection): Element[];
    /**
     * gets the @type {HTMLHeadingElement}
     * from the specified heading level
     */
    static getHtmlHeadingElement(level?: number, windowDocument?: Document): HTMLHeadingElement | null;
    /**
     * gets the @type {CSSStyleDeclaration}
     * from the specified @type {Element}
     */
    static getStyleDeclaration(element: {
        [index: string]: any;
    }): CSSStyleDeclaration | null;
    /**
     * returns an element extending @type {HTMLElement[]}
     * from the specified markup
     */
    static parseAsHtmlElement<TElement extends HTMLElement>(markup: string, expectedElementName?: string): TElement | null;
    /**
     * returns an array of elements extending @type {HTMLElement[]}
     * from the specified markup
     */
    static parseAsHtmlElements<TElement extends HTMLElement>(markup: string, expectedElementName: string): TElement[];
    /**
     * returns a @type {Promise} that resolves
     * in the specified milliseconds
     */
    static timeout(ms: number): Promise<unknown>;
}
