/**
 * GenericWeb Document
 *
 * @export
 * @interface Document
 */
export interface Document {
    /**
     * identifier of this instance
     *
     * @type {number}
     * @memberof Document
     */
    documentId: number;
    /**
     * title
     *
     * @type {string}
     * @memberof Document
     */
    title: string;
    /**
     * short name
     *
     * @type {string}
     * @memberof Document
     */
    documentShortName: string;
    /**
     * file name
     *
     * @type {string}
     * @memberof Document
     */
    fileName: string;
    /**
     * path
     *
     * @type {string}
     * @memberof Document
     */
    path: string;
    /**
     * incept date
     *
     * @type {(Date | string | null)}
     * @memberof Document
     */
    createDate: Date | string | null;
    /**
     * modification date
     *
     * @type {(Date | string | null)}
     * @memberof Document
     */
    modificationDate: Date | string | null;
    /**
     * template identifier
     *
     * @type {(number | null)}
     * @memberof Document
     */
    templateId: number | null;
    /**
     * Segment identifier
     *
     * @type {(number | null)}
     * @memberof Document
     */
    segmentId: number | null;
    /**
     * is this a ‘root’ document?
     *
     * @type {(boolean | null)}
     * @memberof Document
     */
    isRoot: boolean | null;
    /**
     * is this instance active?
     *
     * @type {(boolean | null)}
     * @memberof Document
     */
    isActive: boolean | null;
    /**
     * sort-order value
     *
     * @type {(number | null)}
     * @memberof Document
     */
    sortOrdinal: number | null;
    /**
     * Client identifier
     *
     * @type {string}
     * @memberof Document
     */
    clientId: string;
    /**
     * tag
     *
     * @type {string}
     * @memberof Document
     */
    tag: string;
}
