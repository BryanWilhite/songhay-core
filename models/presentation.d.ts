/**
 * GenericWeb presentation
 *
 * @export
 */
export interface Presentation {
    /**
     * metadata for layout
     */
    layoutMetadata: {
        playlist: {};
        prose: string;
        title: string;
    };
    /**
     * title of this instance
     */
    title: string;
    /**
     * description of this instance
     */
    description: {
        '#text': string;
    };
    /**
     * credits of this instance
     */
    credits: {
        '#text': string;
    };
}
