import { PublicationItem } from './publication-item';
import { Temporal } from './temporal';
/**
 * GenericWeb Document
 */
export interface Fragment extends PublicationItem, Temporal {
    /**
     * identifier of this instance
     */
    fragmentId: number;
    /**
     * name of this instance
     */
    fragmentName?: string;
    /**
     * display name of this instance
     */
    fragmentDisplayName: string;
    /**
     * sort-order value
     */
    sortOrdinal?: number | null;
    /**
     * text content of this instance
     */
    itemChar?: string;
    /**
     * text content of this instance
     */
    itemText?: string;
    /**
     * Document identifier
     */
    documentId?: number | null;
    /**
     * previous Fragment identifier
     */
    prevFragmentId?: number | null;
    /**
     * next Fragment identifier
     */
    nextFragmentId?: number | null;
    /**
     * is this instance previous?
     */
    isPrevious?: boolean | null;
    /**
     * is this instance next?
     */
    isNext?: boolean | null;
    /**
     * is this instance wrapping?
     */
    isWrapper?: boolean | null;
}
