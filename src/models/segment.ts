/**
 * GenericWeb Segment
 *
 * @export
 */
export interface Segment {
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
     * incept date
     */
    createDate: Date | null;

    /**
     * parent Segment identifier
     */
    parentSegmentId?: number | null;

    /**
     * Client identifier
     */
    clientId?: string;

    /**
     * is this instance active?
     */
    isActive?: boolean | null;
}