/**
 * GenericWeb Document
 *
 * @export
 */
export interface Document {
    /**
     * identifier of this instance
     */
    documentId: number;

    /**
     * title
     */
    title: string;

    /**
     * short name
     */
    documentShortName?: string;

    /**
     * file name
     */
    fileName: string;

    /**
     * path
     */
    path: string;

    /**
     * incept date
     */
    createDate: Date | string | null;

    /**
     * modification date
     */
    modificationDate: Date | string | null;

    /**
     * template identifier
     */
    templateId?: number | null;

    /**
     * Segment identifier
     */
    segmentId?: number | null;

    /**
     * is this a ‘root’ document?
     */
    isRoot?: boolean | null;

    /**
     * is this instance active?
     */
    isActive?: boolean | null;

    /**
     * sort-order value
     */
    sortOrdinal?: number | null;

    /**
     * Client identifier
     */
    clientId?: string;

    /**
     * tag
     */
    tag?: string;
}
