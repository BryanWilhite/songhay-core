/**
 * GenericWeb Segment
 *
 * @export
 * @interface Segment
 */
export interface Segment {
    /**
     * identifier of this instance
     *
     * @type {number}
     * @memberof Segment
     */
    segmentId: number;

    /**
     * name of this instance
     *
     * @type {string}
     * @memberof Segment
     */
    segmentName: string;

    /**
     * sort-order value
     *
     * @type {(number | null)}
     * @memberof Segment
     */
    sortOrdinal: number | null;

    /**
     * incept date
     *
     * @type {(Date | null)}
     * @memberof Segment
     */
    createDate: Date | null;

    /**
     * parent Segment identifier
     *
     * @type {(number | null)}
     * @memberof Segment
     */
    parentSegmentId: number | null;

    /**
     * Client identifier
     *
     * @type {string}
     * @memberof Segment
     */
    clientId: string;

    /**
     * is this instance active?
     *
     * @type {(boolean | null)}
     * @memberof Segment
     */
    isActive: boolean | null;
}