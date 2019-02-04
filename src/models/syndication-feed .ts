/**
 * defines a common Syndication Feed model
 *
 * @export
 * @class SyndicationFeed
 */
export class SyndicationFeed {
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
    feedItems: Array<{ title: string; link: string }>;

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
    constructor() {
        this.feedImage = null;
        this.feedItems = [];
        this.feedTitle = null;
    }

    /**
     * gets Atom channel title from conventional JSON
     *
     * @static
     * @param {*} rawFeed
     * @returns {string}
     * @memberof SyndicationFeed
     */
    static getAtomChannelTitle(rawFeed: any): string | null {
        const atomFeed: any = rawFeed['feed'];
        if (!atomFeed) {
            console.log('the expected feed is not here');
            return null;
        }
        const t = atomFeed['title'];
        const key = '#text';
        return (Object.keys(t).indexOf(key) !== -1) ? t[key] : t;
    }

    /**
     * gets Atom channel items from conventional JSON
     *
     * @static
     * @param {*} rawFeed
     * @returns {{}[]}
     * @memberof SyndicationFeed
     */
    static getAtomChannelItems(rawFeed: any): {}[] {
        const channelItems: {}[] = rawFeed['feed']['entry'];
        if (!channelItems) {
            console.log('the expected feed root is not here');
            return [];
        }
        if (!channelItems.length) {
            console.log('the expected feed items are not here');
            return [];
        }
        return channelItems;
    }

    /**
     * gets RSS channel items from conventional JSON
     *
     * @static
     * @param {*} rawFeed
     * @returns {{}[]}
     * @memberof SyndicationFeed
     */
    static getRssChannelItems(rawFeed: any): {}[] {
        const channelItems: {}[] = rawFeed['rss']['channel']['item'];
        if (!channelItems) {
            console.log('the expected RSS channel root is not here');
            return [];
        }
        if (!channelItems.length) {
            console.log('the expected RSS channel items are not here');
            return [];
        }
        return channelItems;
    }

    /**
     * gets RSS channel title from conventional JSON
     *
     * @static
     * @param {*} rawFeed
     * @returns {string}
     * @memberof SyndicationFeed
     */
    static getRssChannelTitle(rawFeed: any): string | null {
        const channel: any = rawFeed['rss']['channel'];
        if (!channel) {
            console.log('the expected RSS channel is not here');
            return null;
        }
        return channel['title'];
    }
}