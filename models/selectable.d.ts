/**
 * Defines a selectable visual.
 *
 * @export
 */
export interface Selectable {
    /**
     * Gets or sets whether this is default selection.
     */
    isDefaultSelection?: boolean | null;
    /**
     * Gets or sets whether this is enabled.
     */
    isEnabled?: boolean | null;
    /**
     * Gets or sets whether this is selected.
     */
    isSelected?: boolean | null;
    /**
     * appends arbitrary values for item selection.
     */
    map?: Map<string | number, any>;
}
