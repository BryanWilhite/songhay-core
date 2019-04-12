import { MenuDisplayItemModel } from '../models/menu-display-item.model';
import { ArrayUtility } from './array.utility';

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
    public static displayInGroups(items: MenuDisplayItemModel[], groupId?: string | number, sortAscending = false): MenuDisplayItemModel[] {
        DisplayItemUtility.setGrouping(items, groupId);
        const groups = DisplayItemUtility.group(items, groupId);
        return DisplayItemUtility.nestIntoGroups(groups, sortAscending);
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
    public static nestIntoGroups(groups: { [key: string]: MenuDisplayItemModel[] }, sortAscending = false): MenuDisplayItemModel[] {
        if (!groups) {
            throw new Error('The expected groups are not here.');
        }

        const sort = (keys: string[], reverse: boolean) => {
            const sorted = keys.sort();
            return reverse ? sorted.reverse() : sorted;
        };

        const nested = sort(Object.keys(groups), sortAscending)
            .map(i => {
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
                    childItems: groups[i]
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

        const getFirstPair = (item: MenuDisplayItemModel) => {
            if (!item.map || !item.map.size) {
                return null;
            }
            const first = Array.from(item.map.entries())[0];
            const id = first[0];
            const groupDisplayText = first[1];
            if (!groupDisplayText) {
                throw new Error('The expected selectable map group display text is not here.');
            }
            const pair = { id, groupDisplayText };

            return pair;
        };

        const getPairWithId = (item: MenuDisplayItemModel, id: string | number) => {
            if (!item.map || !item.map.size) {
                return null;
            }
            if (!item.map.has(id)) {
                id = Array.from(item.map.keys())
                    .find(i => i.toString().startsWith(id as string)) as string;
            }
            const groupDisplayText = item.map.get(id);
            if (!groupDisplayText) {
                throw new Error('The expected selectable map group display text is not here.');
            }
            const pair = { id, groupDisplayText };

            return pair;
        };

        if (groupId) {
            items.forEach(i => {
                const pair = getPairWithId(i, groupId);
                if (!pair) {
                    if (!i.groupId || !i.displayText) {
                        throw new Error('The expected Selectable map pair and/or groupId/displayText is not here.');
                    }
                    return;
                }
                i.groupId = pair.id;
                i.groupDisplayText = pair.groupDisplayText;
            });
        } else {
            items.forEach(i => {
                const pair = getFirstPair(i);
                if (!pair) {
                    if (!i.groupId || !i.displayText) {
                        throw new Error('The expected Selectable map pair and/or groupId/displayText is not here.');
                    }
                    return;
                }
                i.groupId = pair.id;
                i.groupDisplayText = pair.groupDisplayText;
            });
        }
    }
}
