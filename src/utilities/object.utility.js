"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * static members for @type {Object}
 *
 * @export
 * @class ObjectUtility
 */
var ObjectUtility = /** @class */ (function () {
    function ObjectUtility() {
    }
    /**
     * mutates object properties to lowercase
     *
     * @static
     * @param {{}} o
     * @param {number} [charIndex=0]
     * @returns {{}}
     * @memberof ObjectUtility
     */
    ObjectUtility.lowerCasePropertyChar = function (o, charIndex) {
        if (charIndex === void 0) { charIndex = 0; }
        if (!o) {
            return o;
        }
        var lowerCase = function (s) {
            return "" + s.charAt(charIndex) + s.slice(charIndex + 1);
        };
        Object.keys(o).forEach(lowerCase);
        return o;
    };
    return ObjectUtility;
}());
exports.ObjectUtility = ObjectUtility;
//# sourceMappingURL=object.utility.js.map