/**
 * GenericWeb Document
 *
 * @export
 * @interface Fragment
 */
export interface Fragment {
    /**
     * identifier of this instance
     *
     * @type {number}
     * @memberof Fragment
     */
    fragmentId: number;
    /**
     * name of this instance
     *
     * @type {string}
     * @memberof Fragment
     */
    fragmentName: string;
    /**
     * display name of this instance
     *
     * @type {string}
     * @memberof Fragment
     */
    fragmentDisplayName: string;
    /**
     * sort-order value
     *
     * @type {(number | null)}
     * @memberof Fragment
     */
    sortOrdinal: number | null;
    /**
     * text content of this instance
     *
     * @type {string}
     * @memberof Fragment
     */
    itemChar: string;
    /**
     * text content of this instance
     *
     * @type {string}
     * @memberof Fragment
     */
    itemText: string;
    /**
     * incept date
     *
     * @type {(Date | string | null)}
     * @memberof Fragment
     */
    createDate: Date | string | null;
    /**
     * end date
     *
     * @type {(Date | string | null)}
     * @memberof Fragment
     */
    endDate: Date | string | null;
    /**
     * modification date
     *
     * @type {(Date | string | null)}
     * @memberof Fragment
     */
    modificationDate: Date | string | null;
    /**
     * Document identifier
     *
     * @type {(number | null)}
     * @memberof Fragment
     */
    documentId: number | null;
    /**
     * previous Fragment identifier
     *
     * @type {(number | null)}
     * @memberof Fragment
     */
    prevFragmentId: number | null;
    /**
     * next Fragment identifier
     *
     * @type {(number | null)}
     * @memberof Fragment
     */
    nextFragmentId: number | null;
    /**
     * is this instance previous?
     *
     * @type {(boolean | null)}
     * @memberof Fragment
     */
    isPrevious: boolean | null;
    /**
     * is this instance next?
     *
     * @type {(boolean | null)}
     * @memberof Fragment
     */
    isNext: boolean | null;
    /**
     * is this instance wrapping?
     *
     * @type {(boolean | null)}
     * @memberof Fragment
     */
    isWrapper: boolean | null;
    /**
     * Client identifier
     *
     * @type {string}
     * @memberof Fragment
     */
    clientId: string;
    /**
     * is this instance active?
     *
     * @type {(boolean | null)}
     * @memberof Fragment
     */
    isActive: boolean | null;
}
