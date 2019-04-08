import { Sortable } from './sortable';

/**
 * Model for display item
 */
export interface DisplayItemModel extends Sortable {
    /**
     * origin data of the item.
     */
    endDate?: Date;

    /**
     * Gets or sets the description.
     */
    description?: string;

    /**
     * Gets or sets the display text.
     */
    displayText: string;

    /**
     * Gets or sets the id.
     */
    id: number | string;

    /**
     * origin data of the item.
     */
    inceptDate?: Date;

    /**
     * Gets or sets the item name.
     */
    itemName?: string;

    /**
     * origin data of the item.
     */
    modificationDate?: Date;

    /**
     * Gets or sets the resource indicator.
     */
    resourceIndicator?: string;
}
