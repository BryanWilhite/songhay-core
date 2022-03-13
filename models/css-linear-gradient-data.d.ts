/**
 * defines data for CSS linear-gradient
 *
 * @export
 */
export declare class CssLinearGradientData {
    /**
     * Creates an instance of CssLinearGradientData.
     */
    constructor(alpha: string, backgroundColor: string, backgroundImageUri: string);
    /**
     * transparency (e.g. 0.3)
     */
    alpha: string;
    /**
     * color (e.g 0x808080)
     */
    backgroundColor: string;
    /**
     * URI
     */
    backgroundImageUri: string;
}
