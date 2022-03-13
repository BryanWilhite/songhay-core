import { PublicationItem } from './publication-item';
import { Temporal } from './temporal';
/**
 * GenericWeb Document
 *
 * @export
 */
export interface Document extends PublicationItem, Temporal {
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
     * sort-order value
     */
    sortOrdinal?: number | null;
    /**
     * tag
     */
    tag?: string;
}
