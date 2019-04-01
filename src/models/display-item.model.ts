import { Sortable } from './sortable';

/**
 * Model for display item
 */
export interface DisplayItemModel extends Sortable {
    /**
     * Gets or sets the description.
     * @value  The description.
     */
    description: string;

    /**
     * Gets or sets the display text.
     * @value  The display text.
     */
    displayText: string;

    /**
     * Gets or sets the id.
     * @value  The id.
     */
    id: number;

    /**
     * Gets or sets the item name.
     * @value  The item name.
     */
    itemName: string;

    /**
     * Gets or sets the resource indicator.
     * @value
     * The resource indicator.
     */
    resourceIndicator: string;
}
