/**
 * Defines a sortable visual.
 *
 * @export
 */
export interface Sortable {
    /**
     * Gets or sets the item category.
     * @value  The item category.
     */
    itemCategory: string;

    /**
     * Gets or sets the sort ordinal.
     * @value  The sort ordinal.
     */
    sortOrdinal: number | string;

    /**
     * Gets or sets the tag.
     * @value
     * The tag.
     */
    tag: string | null;
}
