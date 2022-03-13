import { MenuDisplayItemModel } from '../models/menu-display-item.model';
/**
 * the default fallback display item grouping pair
 */
export declare const DISPLAY_ITEM_GROUP_NONE: {
    id: string;
    displayText: string;
};
/**
 * static routines for display-item models
 *
 * @export
 */
export declare class DisplayItemUtility {
    /**
     * return the data to display a flat list of items
     * as nested groups
     */
    static displayInGroups(items: MenuDisplayItemModel[], groupId?: string | number, sortDescending?: boolean): MenuDisplayItemModel[];
    /**
     * return the display item pair
     * from the selectable map
     */
    static getItemMapPair(item: MenuDisplayItemModel, groupId?: string | number): {
        id: string | number;
        displayText: string;
    };
    /**
     * return items that can stringify as JSON
     */
    static getStringifiableObject(item: MenuDisplayItemModel): {
        [key: string]: any;
    };
    /**
     * groups the specified items
     * into an interim, anonymous object
     */
    static group(items: MenuDisplayItemModel[], groupId?: string | number): {
        [key: string]: MenuDisplayItemModel[];
    };
    /**
     * nests the groups from `DisplayItemUtility.group`
     * for menu display; the groups are sorted by `groupId`
     */
    static nestIntoGroups(groups: {
        [key: string]: MenuDisplayItemModel[];
    }, sortDescending?: boolean): MenuDisplayItemModel[];
    /**
     * sets menu-display grouping data
     * with a `Selectable.map` entry,
     * found by first position or the specified `groupId`.
     *
     * The `groupId` matches an entire `Selectable.map` key
     * or is a prefix, matching the first key.
     */
    static setGrouping(items: MenuDisplayItemModel[], groupId?: string | number): void;
    /**
     * return items as JSON
     */
    static stringify(item: MenuDisplayItemModel): string | null;
    /**
     * return items as JSON
     */
    static stringifyAll(items: MenuDisplayItemModel[]): string | null;
}
