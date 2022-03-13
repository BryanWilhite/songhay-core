import { PublicationItem } from './publication-item';
import { Temporal } from './temporal';
/**
 * GenericWeb Segment
 *
 * @export
 */
export interface Segment extends PublicationItem, Temporal {
    /**
     * identifier of this instance
     */
    segmentId: number;
    /**
     * name of this instance
     */
    segmentName: string;
    /**
     * sort-order value
     */
    sortOrdinal?: number | null;
    /**
     * parent Segment identifier
     */
    parentSegmentId?: number | null;
}
