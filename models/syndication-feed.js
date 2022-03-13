/**
 * defines a common Syndication Feed model
 *
 * @export
 */
var SyndicationFeed = /** @class */ (function () {
    /**
     * Creates an instance of @type {SyndicationFeed}.
     */
    function SyndicationFeed() {
        this.feedImage = null;
        this.feedItems = [];
        this.feedTitle = null;
    }
    /**
     * gets Atom channel title from conventional JSON
     */
    SyndicationFeed.getAtomChannelTitle = function (rawFeed) {
        var atomFeed = rawFeed['feed'];
        if (!atomFeed) {
            console.warn('the expected feed is not here');
            return null;
        }
        var t = atomFeed['title'];
        var key = '#text';
        return (Object.keys(t).indexOf(key) !== -1) ? t[key] : t;
    };
    /**
     * gets Atom channel items from conventional JSON
     */
    SyndicationFeed.getAtomChannelItems = function (rawFeed) {
        var channelItems = rawFeed['feed']['entry'];
        if (!channelItems) {
            console.warn('the expected feed root is not here');
            return [];
        }
        if (!channelItems.length) {
            console.warn('the expected feed items are not here');
            return [];
        }
        return channelItems;
    };
    /**
     * gets RSS channel items from conventional JSON
     */
    SyndicationFeed.getRssChannelItems = function (rawFeed) {
        var channelItems = rawFeed['rss']['channel']['item'];
        if (!channelItems) {
            console.warn('the expected RSS channel root is not here');
            return [];
        }
        if (!channelItems.length) {
            console.warn('the expected RSS channel items are not here');
            return [];
        }
        return channelItems;
    };
    /**
     * gets RSS channel title from conventional JSON
     */
    SyndicationFeed.getRssChannelTitle = function (rawFeed) {
        var channel = rawFeed['rss']['channel'];
        if (!channel) {
            console.warn('the expected RSS channel is not here');
            return null;
        }
        return channel['title'];
    };
    return SyndicationFeed;
}());
export { SyndicationFeed };
//# sourceMappingURL=syndication-feed.js.map