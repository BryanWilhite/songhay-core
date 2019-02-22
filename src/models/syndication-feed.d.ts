/**
 * defines a common Syndication Feed model
 *
 * @export
 * @class SyndicationFeed
 */
export declare class SyndicationFeed {
    /**
     * syndication feed image
     *
     * @type {string}
     * @memberof SyndicationFeed
     */
    feedImage: string | null;
    /**
     * syndication feed items
     *
     * @type {string}
     * @memberof SyndicationFeed
     */
    feedItems: Array<{
        title: string;
        link: string;
    }>;
    /**
     * syndication feed title
     *
     * @type {string}
     * @memberof SyndicationFeed
     */
    feedTitle: string | null;
    /**
     *
     */
    constructor();
    /**
     * gets Atom channel title from conventional JSON
     *
     * @static
     * @param {*} rawFeed
     * @returns {string}
     * @memberof SyndicationFeed
     */
    static getAtomChannelTitle(rawFeed: any): string | null;
    /**
     * gets Atom channel items from conventional JSON
     *
     * @static
     * @param {*} rawFeed
     * @returns {{}[]}
     * @memberof SyndicationFeed
     */
    static getAtomChannelItems(rawFeed: any): {}[];
    /**
     * gets RSS channel items from conventional JSON
     *
     * @static
     * @param {*} rawFeed
     * @returns {{}[]}
     * @memberof SyndicationFeed
     */
    static getRssChannelItems(rawFeed: any): {}[];
    /**
     * gets RSS channel title from conventional JSON
     *
     * @static
     * @param {*} rawFeed
     * @returns {string}
     * @memberof SyndicationFeed
     */
    static getRssChannelTitle(rawFeed: any): string | null;
}
