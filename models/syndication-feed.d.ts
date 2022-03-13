import { SyndicationFeedItem } from './syndication-feed-item';
/**
 * defines a common Syndication Feed model
 *
 * @export
 */
export declare class SyndicationFeed {
    /**
     * syndication feed image
     */
    feedImage: string | null;
    /**
     * syndication feed items
     */
    feedItems: SyndicationFeedItem[];
    /**
     * syndication feed title
     */
    feedTitle: string | null;
    /**
     * Creates an instance of @type {SyndicationFeed}.
     */
    constructor();
    /**
     * gets Atom channel title from conventional JSON
     */
    static getAtomChannelTitle(rawFeed: any): string | null;
    /**
     * gets Atom channel items from conventional JSON
     */
    static getAtomChannelItems(rawFeed: any): Array<{
        [key: string]: any;
    }>;
    /**
     * gets RSS channel items from conventional JSON
     */
    static getRssChannelItems(rawFeed: any): Array<{
        [key: string]: any;
    }>;
    /**
     * gets RSS channel title from conventional JSON
     */
    static getRssChannelTitle(rawFeed: any): string | null;
}
