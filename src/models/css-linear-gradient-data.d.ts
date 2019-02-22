/**
 * defines data for CSS linear-gradient
 *
 * @export
 * @class CssLinearGradientData
 */
export declare class CssLinearGradientData {
    /**
     * Creates an instance of CssLinearGradientData.
     * @param {string} alpha
     * @param {string} backgroundColor
     * @param {string} backgroundImageUri
     * @memberof CssLinearGradientData
     */
    constructor(alpha: string, backgroundColor: string, backgroundImageUri: string);
    /**
     * transparency (e.g. 0.3)
     *
     * @type {string}
     * @memberof CssLinearGradientData
     */
    alpha: string;
    /**
     * color (e.g 0x808080)
     *
     * @type {string}
     * @memberof CssLinearGradientData
     */
    backgroundColor: string;
    /**
     * URI
     *
     * @type {string}
     * @memberof CssLinearGradientData
     */
    backgroundImageUri: string;
}
