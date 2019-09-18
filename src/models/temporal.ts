/**
 * Adds temporal properties to an item
 *
 * @export
 */
export interface Temporal {
    /**
     * create date
     * @deprecated use {Temporal.inceptDate} instead
     */
    createDate: Date | string | null;

    /**
     * end date
     */
    endDate?: Date | string | null;

    /**
     * incept date
     */
    inceptDate?: Date | string | null;

    /**
     * modification date
     */
    modificationDate: Date | string | null;
}
