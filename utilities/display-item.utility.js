import { __assign } from "tslib";
import { ArrayUtility } from './array.utility';
import { MapObjectUtility } from './map-object.utility';
import { ReducedGroupUtility } from './reduced-group-utility';
/**
 * the default fallback display item grouping pair
 */
export var DISPLAY_ITEM_GROUP_NONE = { id: 'zzz-group-none', displayText: '[no grouping]' };
/**
 * static routines for display-item models
 *
 * @export
 */
var DisplayItemUtility = /** @class */ (function () {
    function DisplayItemUtility() {
    }
    /**
     * return the data to display a flat list of items
     * as nested groups
     */
    DisplayItemUtility.displayInGroups = function (items, groupId, sortDescending) {
        if (sortDescending === void 0) { sortDescending = false; }
        DisplayItemUtility.setGrouping(items, groupId);
        var groups = DisplayItemUtility.group(items, groupId);
        return DisplayItemUtility.nestIntoGroups(groups, sortDescending);
    };
    /**
     * return the display item pair
     * from the selectable map
     */
    DisplayItemUtility.getItemMapPair = function (item, groupId) {
        var doGroupIdWarning = function (id) {
            var message = [
                'The expected selectable map group display text is not here.',
                " [ID: ".concat((id || '[missing]'), "]")
            ].join('');
            console.warn(message);
        };
        var doGroupMapWarning = function () {
            console.warn('The expected item map is not here.', { item: item });
        };
        var getFirstPair = function () {
            if (!item.map || !item.map.size) {
                doGroupMapWarning();
                return DISPLAY_ITEM_GROUP_NONE;
            }
            var first = Array.from(item.map.entries())[0];
            var id = first[0];
            var displayText = first[1];
            if (!displayText) {
                doGroupIdWarning(id);
            }
            return { id: id, displayText: displayText };
        };
        var getPairWithId = function (id) {
            if (!item.map || !item.map.size) {
                doGroupMapWarning();
                return DISPLAY_ITEM_GROUP_NONE;
            }
            if (!item.map.has(id)) {
                id = Array
                    .from(item.map.keys())
                    .find(function (i) { return i.toString().startsWith(id); });
                if (!id) {
                    console.warn('The expected item map identifier is not here.', { item: item });
                    return DISPLAY_ITEM_GROUP_NONE;
                }
            }
            var displayText = item.map.get(id);
            if (!displayText) {
                doGroupIdWarning(id);
            }
            return { id: id, displayText: displayText };
        };
        var pair = groupId ? getPairWithId(groupId) : getFirstPair();
        return pair;
    };
    /**
     * return items that can stringify as JSON
     */
    DisplayItemUtility.getStringifiableObject = function (item) {
        var mo = (!item.map) ? {} : MapObjectUtility.getObject(item.map);
        return __assign(__assign(__assign(__assign(__assign({}, item), item), item), { map: mo }), { childItems: (!item.childItems || !item.childItems.length) ? [] : item.childItems.map(function (i) { return DisplayItemUtility.getStringifiableObject(i); }) });
    };
    /**
     * groups the specified items
     * into an interim, anonymous object
     */
    DisplayItemUtility.group = function (items, groupId) {
        if (!items) {
            throw new Error('The expected items are not here.');
        }
        var groups = ArrayUtility.groupBy(items, function (i) { return i.groupId; });
        var reduced = ReducedGroupUtility.reduceToObject(groups);
        return reduced;
    };
    /**
     * nests the groups from `DisplayItemUtility.group`
     * for menu display; the groups are sorted by `groupId`
     */
    DisplayItemUtility.nestIntoGroups = function (groups, sortDescending) {
        if (sortDescending === void 0) { sortDescending = false; }
        if (!groups) {
            throw new Error('The expected groups are not here.');
        }
        var sort = function (keys, reverse) {
            var sorted = keys.sort();
            return reverse ? sorted.reverse() : sorted;
        };
        var nested = sort(Object.keys(groups), sortDescending).map(function (i) {
            var group = groups[i];
            if (!group.length) {
                throw new Error('The expected grouping data format is not here.');
            }
            var first = group[0];
            if (!first.groupId) {
                throw new Error('The expected grouping identifier is not here.');
            }
            if (!first.displayText) {
                throw new Error('The expected grouping display text is not here.');
            }
            var menu = {
                id: first.groupId,
                displayText: first.groupDisplayText || '',
                childItems: ArrayUtility.sortItems(groups[i], 'sortOrdinal', false, sortDescending)
            };
            return menu;
        });
        return nested;
    };
    /**
     * sets menu-display grouping data
     * with a `Selectable.map` entry,
     * found by first position or the specified `groupId`.
     *
     * The `groupId` matches an entire `Selectable.map` key
     * or is a prefix, matching the first key.
     */
    DisplayItemUtility.setGrouping = function (items, groupId) {
        if (!items) {
            throw new Error('The expected items are not here.');
        }
        var doGroupPairWarning = function (item) {
            var message = [
                'The expected Selectable map pair and/or groupId/displayText is not here.',
                " [Group ID: ".concat((item.groupId || '[missing]'), "]"),
                " [Group Display Text: ".concat((item.displayText || '[missing]'), "]")
            ].join('');
            console.warn(message, { item: item });
        };
        items
            .filter(function (i) { return i ? true : false; })
            .forEach(function (i) {
            var pair = DisplayItemUtility.getItemMapPair(i, groupId);
            if (!pair) {
                if (!i.groupId || !i.displayText) {
                    doGroupPairWarning(i);
                }
            }
            else {
                i.groupId = pair.id;
                i.groupDisplayText = pair.displayText;
            }
        });
    };
    /**
     * return items as JSON
     */
    DisplayItemUtility.stringify = function (item) {
        if (!item) {
            return null;
        }
        var stringifiable = DisplayItemUtility.getStringifiableObject(item);
        return JSON.stringify(stringifiable);
    };
    /**
     * return items as JSON
     */
    DisplayItemUtility.stringifyAll = function (items) {
        if (!items) {
            return null;
        }
        var stringifiable = items.map(function (item) { return DisplayItemUtility.getStringifiableObject(item); });
        return JSON.stringify(stringifiable);
    };
    return DisplayItemUtility;
}());
export { DisplayItemUtility };
//# sourceMappingURL=display-item.utility.js.map