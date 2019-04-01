import { ColorDisplayItemModel } from './color-display-item.model';
import { Selectable } from './selectable';

/**
 * Defines a colorable, selectable menu item
 *
 * @export
 */
export interface MenuDisplayItemModel extends ColorDisplayItemModel, Selectable {
    /**
     * Gets or sets the child items.
     */
    childItems: MenuDisplayItemModel[];
}
