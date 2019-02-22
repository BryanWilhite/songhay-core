"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var css_red_green_blue_1 = require("../models/css-red-green-blue");
/**
 * routines for inline CSS
 *
 * @export
 * @class CssUtility
 */
var CssUtility = /** @class */ (function () {
    function CssUtility() {
    }
    /**
     * gets #ffffff format from 0xFFFFFF format
     *
     * @param {string} color
     * @returns {string}
     * @memberof CssUtility
     */
    CssUtility.getColorHex = function (color) {
        if (!color) {
            return null;
        }
        return color.replace('0x', '#').toLowerCase();
    };
    /**
     * gets r, g, b format from @type {CssRedGreenBlue} data
     *
     * @param {CssRedGreenBlue} rgb
     * @returns {string}
     * @memberof CssUtility
     */
    CssUtility.getColorRgb = function (rgb) {
        if (!rgb) {
            return null;
        }
        return rgb.r + ", " + rgb.g + ", " + rgb.b;
    };
    /**
     * gets opacity 0.70 format from "70" format
     *
     * @param {string} opacity
     * @returns {number}
     * @memberof CssUtility
     */
    CssUtility.getOpacity = function (opacity) {
        return parseInt(opacity, 10) / 100;
    };
    /**
     * gets 70px pixel format from number 70
     *
     * @param {number} pixels
     * @returns {string}
     * @memberof CssUtility
     */
    CssUtility.getPixelValue = function (pixels) {
        return pixels + "px";
    };
    /**
     * gets @type {CssRedGreenBlue} data from #ffffff (or #fff) format
     *
     * @param {string} hex
     * @returns {CssRedGreenBlue}
     * @memberof CssUtility
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
            ? new css_red_green_blue_1.CssRedGreenBlue(parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16))
            : null;
    };
    /**
     * get linear-gradient CSS from @type {CssLinearGradientData} data
     *
     * @param {CssLinearGradientData} data
     * @returns {string}
     * @memberof CssUtility
     */
    CssUtility.getTintedBackground = function (data) {
        if (!data) {
            return null;
        }
        var tintHex = this.getColorHex(data.backgroundColor);
        var tintColor = this.getColorRgb(this.getRgbFromHex(tintHex));
        var tintAlpha = data.alpha;
        var backgroundImage = this.getUri(data.backgroundImageUri);
        return "linear-gradient(rgba(" + tintColor + ", " + tintAlpha + "), rgba(" + tintColor + ", " + tintAlpha + ")), " + backgroundImage;
    };
    /**
     * get url CSS from the URI
     *
     * @param {string} uri
     * @returns {string}
     * @memberof CssUtility
     */
    CssUtility.getUri = function (uri) {
        return "url('" + uri + "')";
    };
    return CssUtility;
}());
exports.CssUtility = CssUtility;
//# sourceMappingURL=css.utility.js.map