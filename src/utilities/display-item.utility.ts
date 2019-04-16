import { ColorDisplayItemModel } from 'src/models/color-display-item.model';
import { Groupable } from 'src/models/groupable';
import { MenuDisplayItemModel } from '../models/menu-display-item.model';

import { ArrayUtility } from './array.utility';
import { MapObjectUtility } from './map-object.utility';

/**
 * static routines for display-item models
 *
 * @export
 */
export class DisplayItemUtility {
    /**
     * return the data to display a flat list of items
     * as nested groups
     */
    public static displayInGroups(items: MenuDisplayItemModel[], groupId?: string | number, sortDescending = false): MenuDisplayItemModel[] {
        DisplayItemUtility.setGrouping(items, groupId);
        const groups = DisplayItemUtility.group(items, groupId);
        return DisplayItemUtility.nestIntoGroups(groups, sortDescending);
    }

    /**
     * return the display item pair
     * from the selectable map
     */
    public static getItemMapPair(item: MenuDisplayItemModel, groupId?: string | number): { id: string | number; displayText: string; } {

        const nonePair = { id: 'group-zzz-none', displayText: '[no grouping]' };

        const doGroupIdWarning = (id: string | number) => {
            const message = [
                'The expected selectable map group display text is not here.',
                ` [ID: ${(id as string || '[missing]')}]`
            ].join('');
            console.warn(message);
        };

        const doGroupMapWarning = () => {
            console.warn('The expected item map is not here.', { item });
        };

        const getFirstPair = () => {
            if (!item.map || !item.map.size) {
                doGroupMapWarning();
                return nonePair;
            }
            const first = Array.from(item.map.entries())[0];
            const id = first[0];
            const displayText = first[1];
            if (!displayText) { doGroupIdWarning(id); }
            return { id, displayText };
        };

        const getPairWithId = (id: string | number) => {

            if (!item.map || !item.map.size) {
                doGroupMapWarning();
                return nonePair;
            }
            if (!item.map.has(id)) {
                id = Array
                    .from(item.map.keys())
                    .find(i => i.toString().startsWith(id as string)) as string;

                if (!id) {
                    doGroupMapWarning();
                    return nonePair;
                }
            }

            const displayText = item.map.get(id);
            if (!displayText) { doGroupIdWarning(id); }
            return { id, displayText };
        };

        const pair = groupId ? getPairWithId(groupId) : getFirstPair();

        return pair;
    }

    /**
     * return items that can stringify as JSON
     */
    public static getStringifiableObject(item: MenuDisplayItemModel): { [key: string]: any } {
        const mo = (!item.map) ? {} : MapObjectUtility.getObject(item.map);
        return {
            ...(item as ColorDisplayItemModel),
            ...(item as Groupable),
            ...(item as {
                isDefaultSelection: boolean | null;
                isEnabled?: boolean | null;
                isSelected?: boolean | null;
            }),
            ...{ map: mo },
            ...{ childItems: (!item.childItems || !item.childItems.length) ? [] : item.childItems.map(i => DisplayItemUtility.getStringifiableObject(i)) }
        };
    }

    /**
     * groups the specified items
     * into an interim, anonymous object
     */
    public static group(items: MenuDisplayItemModel[], groupId?: string | number): { [key: string]: MenuDisplayItemModel[] } {
        if (!items) {
            throw new Error('The expected items are not here.');
        }

        DisplayItemUtility.setGrouping(items, groupId);

        const grouped = ArrayUtility.groupBy(items, i => i.groupId as string);
        return grouped;
    }

    /**
     * nests the groups from `DisplayItemUtility.group`
     * for menu display; the groups are sorted by `groupId`
     */
    public static nestIntoGroups(groups: { [key: string]: MenuDisplayItemModel[] }, sortDescending = false): MenuDisplayItemModel[] {
        if (!groups) {
            throw new Error('The expected groups are not here.');
        }

        const sort = (keys: string[], reverse: boolean) => {
            const sorted = keys.sort();
            return reverse ? sorted.reverse() : sorted;
        };

        const nested = sort(Object.keys(groups), sortDescending).map(i => {

            const group = groups[i] as MenuDisplayItemModel[];
            if (!group.length) {
                throw new Error('The expected grouping data format is not here.');
            }

            const first = group[0];
            if (!first.groupId) {
                throw new Error('The expected grouping identifier is not here.');
            }
            if (!first.displayText) {
                throw new Error('The expected grouping display text is not here.');
            }

            const menu: MenuDisplayItemModel = {
                id: first.groupId,
                displayText: first.groupDisplayText || '',
                childItems: ArrayUtility.sortItems(groups[i], 'sortOrdinal', false, sortDescending)
            };
            return menu;
        });

        return nested;
    }

    /**
     * sets menu-display grouping data
     * with a `Selectable.map` entry,
     * found by first position or the specified `groupId`.
     *
     * The `groupId` matches an entire `Selectable.map` key
     * or is a prefix, matching the first key.
     */
    public static setGrouping(items: MenuDisplayItemModel[], groupId?: string | number): void {
        if (!items) {
            throw new Error('The expected items are not here.');
        }

        const doGroupPairWarning = (item: MenuDisplayItemModel) => {
            const message = [
                'The expected Selectable map pair and/or groupId/displayText is not here.',
                ` [Group ID: ${(item.groupId as string || '[missing]')}]`,
                ` [Group Display Text: ${(item.displayText || '[missing]')}]`
            ].join('');
            console.warn(message, { item });
        };

        items
            .filter(i => i ? true : false)
            .forEach(i => {
                const pair = DisplayItemUtility.getItemMapPair(i, groupId);
                if (!pair) {
                    if (!i.groupId || !i.displayText) { doGroupPairWarning(i); }
                } else {
                    i.groupId = pair.id;
                    i.groupDisplayText = pair.displayText;
                }
            });
    }

    /**
     * return items as JSON
     */
    public static stringify(item: MenuDisplayItemModel): string | null {
        if (!item) { return null; }
        const stringifiable = DisplayItemUtility.getStringifiableObject(item);
        return JSON.stringify(stringifiable);
    }

    /**
     * return items as JSON
     */
    public static stringifyAll(items: MenuDisplayItemModel[]): string | null {
        if (!items) { return null; }
        const stringifiable = items.map(item => DisplayItemUtility.getStringifiableObject(item));
        return JSON.stringify(stringifiable);
    }
}
