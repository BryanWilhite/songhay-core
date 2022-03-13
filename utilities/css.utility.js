import { CssRedGreenBlue } from '../models/css-red-green-blue';
/**
 * routines for inline CSS
 *
 * @export
 */
var CssUtility = /** @class */ (function () {
    function CssUtility() {
    }
    /**
     * gets #ffffff format from 0xFFFFFF format
     */
    CssUtility.getColorHex = function (color) {
        if (!color) {
            return null;
        }
        return color.replace('0x', '#').toLowerCase();
    };
    /**
     * gets r, g, b format from @type {CssRedGreenBlue} data
     */
    CssUtility.getColorRgb = function (rgb) {
        if (!rgb) {
            return null;
        }
        return "".concat(rgb.r, ", ").concat(rgb.g, ", ").concat(rgb.b);
    };
    /**
     * gets @type {CSSStyleDeclaration} data
     */
    CssUtility.getComputedStylePropertyValue = function (element, propertyName) {
        if (!element) {
            return null;
        }
        if (!propertyName) {
            return null;
        }
        var elementStyle = window.getComputedStyle(element);
        return elementStyle.getPropertyValue(propertyName);
    };
    /**
     * gets @type {CSSStyleDeclaration} data
     */
    CssUtility.getComputedStylePropertyValueById = function (elementId, propertyName) {
        if (!elementId) {
            return null;
        }
        if (!propertyName) {
            return null;
        }
        var element = window.document.getElementById(elementId);
        if (!element) {
            return null;
        }
        var elementStyle = window.getComputedStyle(element);
        return elementStyle.getPropertyValue(propertyName);
    };
    /**
     * gets @type {CSSStyleDeclaration} data
     */
    CssUtility.getComputedStylePropertyValueByQuery = function (query, propertyName) {
        if (!query) {
            return null;
        }
        if (!propertyName) {
            return null;
        }
        var element = window.document.querySelector(query);
        if (!element) {
            return null;
        }
        var elementStyle = window.getComputedStyle(element);
        return elementStyle.getPropertyValue(propertyName);
    };
    /**
     * gets opacity 0.70 format from "70" format
     */
    CssUtility.getOpacity = function (opacity) {
        return parseInt(opacity, 10) / 100;
    };
    /**
     * gets 70px pixel format from number 70
     */
    CssUtility.getPixelValue = function (pixels) {
        return "".concat(pixels, "px");
    };
    /**
     * gets @type {CssRedGreenBlue} data from #ffffff (or #fff) format
     *
     * @see http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb/5624139?stw=2#5624139
     */
    CssUtility.getRgbFromHex = function (hex) {
        if (!hex) {
            return null;
        }
        // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
        var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        hex = hex.replace(shorthandRegex, function (r, g, b) {
            return r + r + g + g + b + b;
        });
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result
            ? new CssRedGreenBlue(parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16))
            : null;
    };
    /**
     * get linear-gradient CSS from @type {CssLinearGradientData} data
     */
    CssUtility.getTintedBackground = function (data) {
        if (!data) {
            return null;
        }
        var tintHex = this.getColorHex(data.backgroundColor);
        var tintColor = this.getColorRgb(this.getRgbFromHex(tintHex));
        var tintAlpha = data.alpha;
        var backgroundImage = this.getUri(data.backgroundImageUri);
        return "linear-gradient(rgba(".concat(tintColor, ", ").concat(tintAlpha, "), rgba(").concat(tintColor, ", ").concat(tintAlpha, ")), ").concat(backgroundImage);
    };
    /**
     * get url CSS from the URI
     */
    CssUtility.getUri = function (uri) {
        return "url('".concat(uri, "')");
    };
    /**
     * gets @type {CSSStyleDeclaration} data
     */
    CssUtility.setComputedStylePropertyValue = function (element, propertyName, propertyValue) {
        if (!element) {
            return;
        }
        if (!propertyName) {
            return;
        }
        if (!propertyValue) {
            return;
        }
        element.style.setProperty(propertyName, propertyValue);
    };
    return CssUtility;
}());
export { CssUtility };
//# sourceMappingURL=css.utility.js.map