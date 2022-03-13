import { ColorDisplayItemModel } from './color-display-item.model';
import { Groupable } from './groupable';
import { Selectable } from './selectable';
/**
 * Defines a colorable, selectable menu item
 *
 * @export
 */
export interface MenuDisplayItemModel extends ColorDisplayItemModel, Groupable, Selectable {
    /**
     * Gets or sets the child items.
     */
    childItems?: MenuDisplayItemModel[];
}
