/**
 * defines a common Syndication Feed model
 *
 * @export
 */
export class SyndicationFeed {
    /**
     * syndication feed image
     */
    feedImage: string | null;

    /**
     * syndication feed items
     */
    feedItems: Array<{ title: string; link: string }>;

    /**
     * syndication feed title
     */
    feedTitle: string | null;

    /**
     * Creates an instance of @type {SyndicationFeed}.
     */
    constructor() {
        this.feedImage = null;
        this.feedItems = [];
        this.feedTitle = null;
    }

    /**
     * gets Atom channel title from conventional JSON
     */
    static getAtomChannelTitle(rawFeed: any): string | null {
        const atomFeed: any = rawFeed['feed'];
        if (!atomFeed) {
            console.warn('the expected feed is not here');
            return null;
        }
        const t = atomFeed['title'];
        const key = '#text';
        return (Object.keys(t).indexOf(key) !== -1) ? t[key] : t;
    }

    /**
     * gets Atom channel items from conventional JSON
     */
    static getAtomChannelItems(rawFeed: any): Array<{ [key: string]: any; }> {
        const channelItems: Array<{ [key: string]: any; }> = rawFeed['feed']['entry'];
        if (!channelItems) {
            console.warn('the expected feed root is not here');
            return [];
        }
        if (!channelItems.length) {
            console.warn('the expected feed items are not here');
            return [];
        }
        return channelItems;
    }

    /**
     * gets RSS channel items from conventional JSON
     */
    static getRssChannelItems(rawFeed: any): Array<{ [key: string]: any; }> {
        const channelItems: Array<{ [key: string]: any; }> = rawFeed['rss']['channel']['item'];
        if (!channelItems) {
            console.warn('the expected RSS channel root is not here');
            return [];
        }
        if (!channelItems.length) {
            console.warn('the expected RSS channel items are not here');
            return [];
        }
        return channelItems;
    }

    /**
     * gets RSS channel title from conventional JSON
     */
    static getRssChannelTitle(rawFeed: any): string | null {
        const channel: any = rawFeed['rss']['channel'];
        if (!channel) {
            console.warn('the expected RSS channel is not here');
            return null;
        }
        return channel['title'];
    }
}
