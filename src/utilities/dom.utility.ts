/**
 * static members for DOM manipulation
 *
 * @export
 */
export class DomUtility {
    /**
     * gets the child element, extending @type {HTMLElement}
     * from the specified query @type {string},
     */
    static getChildHtmlElementByQuery<TElement extends HTMLElement>(element: HTMLElement, query: string): TElement | null {

        if (!element) {
            console.warn('the expected parent element is not here');

            return null;
        }

        return element.querySelector(query);
    }

    /**
     * gets the child elements, extending @type {HTMLElement}
     * from the specified query @type {string},
     */
    static getChildHtmlElementsByQuery<TElement extends HTMLElement>(element: HTMLElement, query: string): NodeListOf<TElement> | null {

        if (!element) {
            console.warn('the expected parent element is not here');

            return null;
        }

        return element.querySelectorAll(query);
    }

    /**
     * gets the child elements, extending @type {HTMLElement}
     * from the specified query @type {string},
     */
    static getClosestHtmlElementByQuery<TElement extends HTMLElement>(element: HTMLElement, query: string): TElement | null {

        if (!element) {
            console.warn('the expected parent element is not here');

            return null;
        }

        return element.closest(query);
    }

    /**
     * gets the element, extending @type {HTMLElement}
     * from the specified @type {ElementRef},
     * usually derived from @ViewChild
     */
    static getHtmlElement<TElement extends HTMLElement>(elementRef: {
        [index: string]: any;
    }): TElement | null {
        const el = elementRef['nativeElement'] as TElement;

        if (!el) {
            console.warn('the expected element is not here');

            return null;
        }

        return el;
    }

    /**
     * get an array of @type {Element}
     * from the specified collection
     */
    static getHtmlElements(collection: HTMLCollection): Element[] {
        const children = Array.from(collection);

        if (!children) {
            console.warn('the expected element children are not here');

            return [];
        }

        if (!children.length) {
            console.warn('the expected number of element children is not here');

            return [];
        }

        return children;
    }

    /**
     * gets the @type {HTMLHeadingElement}
     * from the specified heading level
     */
    static getHtmlHeadingElement(
        level: number = 0,
        windowDocument: Document = document
    ): HTMLHeadingElement | null {
        if (!windowDocument) {
            return null;
        }
        const heading =
            0 < level && level < 7
                ? (windowDocument.createElement(
                      `h${level}`
                  ) as HTMLHeadingElement)
                : (windowDocument.createElement('h2') as HTMLHeadingElement);
        return heading;
    }

    /**
     * gets the @type {CSSStyleDeclaration}
     * from the specified @type {Element}
     */
    static getStyleDeclaration(element: {
        [index: string]: any;
    }): CSSStyleDeclaration | null {
        if (!element) {
            return null;
        }

        const style = element['style'] as CSSStyleDeclaration;

        if (!style) {
            console.warn('the expected CSS style declaration is not here');
            return null;
        }

        return style;
    }

    /**
     * returns an element extending @type {HTMLElement[]}
     * from the specified markup
     */
    static parseAsHtmlElement<TElement extends HTMLElement>(
        markup: string,
        expectedElementName: string = 'div'
    ): TElement | null {
        if (!markup) {
            return null;
        }

        const elements = DomUtility.parseAsHtmlElements(
            markup,
            expectedElementName
        );

        if (!elements.length) {
            return null;
        }

        return elements[0] as TElement;
    }

    /**
     * returns an array of elements extending @type {HTMLElement[]}
     * from the specified markup
     */
    static parseAsHtmlElements<TElement extends HTMLElement>(
        markup: string,
        expectedElementName: string
    ): TElement[] {
        if (!markup) {
            return [];
        }

        const parser = new DOMParser();
        const supportedType = 'text/xml';
        const localDocument = parser.parseFromString(markup, supportedType);
        const elements = localDocument.getElementsByTagName(
            expectedElementName
        );
        return Array.from(elements).map(e => e as TElement);
    }

    /**
     * returns a @type {Promise} that resolves
     * in the specified milliseconds
     */
    static timeout(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}
