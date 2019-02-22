/**
 * GenericWeb presentation
 *
 * @export
 * @interface Presentation
 */
export interface Presentation {
    /**
     * metadata for layout
     *
     * @type {{ playlist: {}; prose: string; title: string }}
     * @memberof Presentation
     */
    layoutMetadata: {
        playlist: {};
        prose: string;
        title: string;
    };
    /**
     * title of this instance
     *
     * @type {string}
     * @memberof Presentation
     */
    title: string;
    /**
     * description of this instance
     *
     * @type {{ '#text': string }}
     * @memberof Presentation
     */
    description: {
        '#text': string;
    };
    /**
     * credits of this instance
     *
     * @type {{ '#text': string }}
     * @memberof Presentation
     */
    credits: {
        '#text': string;
    };
}
