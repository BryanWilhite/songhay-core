/**
 * static members for DOM manipulation
 *
 * @export
 */
var DomUtility = /** @class */ (function () {
    function DomUtility() {
    }
    /**
     * gets the element, extending @type {HTMLElement}
     * from the specified @type {ElementRef},
     * usually derived from @ViewChild
     */
    DomUtility.getHtmlElement = function (elementRef) {
        var el = elementRef['nativeElement'];
        if (!el) {
            console.warn('the expected element is not here');
            return null;
        }
        return el;
    };
    /**
     * get an array of @type {Element}
     * from the specified collection
     */
    DomUtility.getHtmlElements = function (collection) {
        var children = Array.from(collection);
        if (!children) {
            console.warn('the expected element children are not here');
            return [];
        }
        if (!children.length) {
            console.warn('the expected number of element children is not here');
            return [];
        }
        return children;
    };
    /**
     * gets the @type {HTMLHeadingElement}
     * from the specified heading level
     */
    DomUtility.getHtmlHeadingElement = function (level, windowDocument) {
        if (level === void 0) { level = 0; }
        if (windowDocument === void 0) { windowDocument = document; }
        if (!windowDocument) {
            return null;
        }
        var heading = 0 < level && level < 7
            ? windowDocument.createElement("h".concat(level))
            : windowDocument.createElement('h2');
        return heading;
    };
    /**
     * gets the @type {CSSStyleDeclaration}
     * from the specified @type {Element}
     */
    DomUtility.getStyleDeclaration = function (element) {
        if (!element) {
            return null;
        }
        var style = element['style'];
        if (!style) {
            console.warn('the expected CSS style declaration is not here');
            return null;
        }
        return style;
    };
    /**
     * returns an element extending @type {HTMLElement[]}
     * from the specified markup
     */
    DomUtility.parseAsHtmlElement = function (markup, expectedElementName) {
        if (expectedElementName === void 0) { expectedElementName = 'div'; }
        if (!markup) {
            return null;
        }
        var elements = DomUtility.parseAsHtmlElements(markup, expectedElementName);
        if (!elements.length) {
            return null;
        }
        return elements[0];
    };
    /**
     * returns an array of elements extending @type {HTMLElement[]}
     * from the specified markup
     */
    DomUtility.parseAsHtmlElements = function (markup, expectedElementName) {
        if (!markup) {
            return [];
        }
        var parser = new DOMParser();
        var supportedType = 'text/xml';
        var localDocument = parser.parseFromString(markup, supportedType);
        var elements = localDocument.getElementsByTagName(expectedElementName);
        return Array.from(elements).map(function (e) { return e; });
    };
    /**
     * returns a @type {Promise} that resolves
     * in the specified milliseconds
     */
    DomUtility.timeout = function (ms) {
        return new Promise(function (resolve) { return setTimeout(resolve, ms); });
    };
    return DomUtility;
}());
export { DomUtility };
//# sourceMappingURL=dom.utility.js.map