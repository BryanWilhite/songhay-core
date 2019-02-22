"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * defines a common Syndication Feed model
 *
 * @export
 * @class SyndicationFeed
 */
var SyndicationFeed = /** @class */ (function () {
    /**
     *
     */
    function SyndicationFeed() {
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
    SyndicationFeed.getAtomChannelTitle = function (rawFeed) {
        var atomFeed = rawFeed['feed'];
        if (!atomFeed) {
            console.log('the expected feed is not here');
            return null;
        }
        var t = atomFeed['title'];
        var key = '#text';
        return (Object.keys(t).indexOf(key) !== -1) ? t[key] : t;
    };
    /**
     * gets Atom channel items from conventional JSON
     *
     * @static
     * @param {*} rawFeed
     * @returns {{}[]}
     * @memberof SyndicationFeed
     */
    SyndicationFeed.getAtomChannelItems = function (rawFeed) {
        var channelItems = rawFeed['feed']['entry'];
        if (!channelItems) {
            console.log('the expected feed root is not here');
            return [];
        }
        if (!channelItems.length) {
            console.log('the expected feed items are not here');
            return [];
        }
        return channelItems;
    };
    /**
     * gets RSS channel items from conventional JSON
     *
     * @static
     * @param {*} rawFeed
     * @returns {{}[]}
     * @memberof SyndicationFeed
     */
    SyndicationFeed.getRssChannelItems = function (rawFeed) {
        var channelItems = rawFeed['rss']['channel']['item'];
        if (!channelItems) {
            console.log('the expected RSS channel root is not here');
            return [];
        }
        if (!channelItems.length) {
            console.log('the expected RSS channel items are not here');
            return [];
        }
        return channelItems;
    };
    /**
     * gets RSS channel title from conventional JSON
     *
     * @static
     * @param {*} rawFeed
     * @returns {string}
     * @memberof SyndicationFeed
     */
    SyndicationFeed.getRssChannelTitle = function (rawFeed) {
        var channel = rawFeed['rss']['channel'];
        if (!channel) {
            console.log('the expected RSS channel is not here');
            return null;
        }
        return channel['title'];
    };
    return SyndicationFeed;
}());
exports.SyndicationFeed = SyndicationFeed;
//# sourceMappingURL=syndication-feed.js.map