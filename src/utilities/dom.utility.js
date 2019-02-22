"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * static members for DOM manipulation
 *
 * @export
 * @class DomUtility
 */
var DomUtility = /** @class */ (function () {
    function DomUtility() {
    }
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
     *
     * @static
     * @param {HTMLCollection} collection
     * @returns {Element[]}
     * @memberof DomUtility
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
     *
     * @static
     * @param {number} level
     * @returns {HTMLHeadingElement}
     * @memberof DomUtility
     * @see https://stackoverflow.com/a/51289849/22944
     */
    DomUtility.getHtmlHeadingElement = function (level) {
        var heading = 0 < level && level < 7
            ? document.createElement("h" + level)
            : document.createElement('h2');
        return heading;
    };
    /**
     * gets the @type {CSSStyleDeclaration}
     * from the specified @type {Element}
     *
     * @static
     * @param {{ [index: string]: any }} element
     * @returns {CSSStyleDeclaration}
     * @memberof DomUtility
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
    return DomUtility;
}());
exports.DomUtility = DomUtility;
//# sourceMappingURL=dom.utility.js.map