import { __assign, __rest } from "tslib";
/**
 * static members for @type {Object}
 *
 * @export
 */
var ObjectUtility = /** @class */ (function () {
    function ObjectUtility() {
    }
    /**
     * mutates object properties to lowercase
     */
    ObjectUtility.lowerCasePropertyChar = function (o, charIndex) {
        if (charIndex === void 0) { charIndex = 0; }
        if (!o) {
            return o;
        }
        var lowerCase = function (s) {
            return "".concat(s.charAt(charIndex).toLowerCase()).concat(s.slice(charIndex + 1));
        };
        Object.keys(o).forEach(function (k) {
            o = ObjectUtility.renameProperty(k, lowerCase(k), o);
        });
        return o;
    };
    /**
     * renames a property of an object
     *
     * [https://medium.com/front-end-weekly/immutably-rename-object-keys-in-javascript-5f6353c7b6dd]
     */
    ObjectUtility.renameProperty = function (oldProperty, newProperty, _a) {
        var _b;
        var _c = oldProperty, old = _a[_c], others = __rest(_a, [typeof _c === "symbol" ? _c : _c + ""]);
        return __assign((_b = {}, _b[newProperty] = old, _b), others);
    };
    return ObjectUtility;
}());
export { ObjectUtility };
//# sourceMappingURL=object.utility.js.map