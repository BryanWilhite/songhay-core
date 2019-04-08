/**
 * defines data for CSS linear-gradient
 *
 * @export
 */
export class CssLinearGradientData {
    /**
     * Creates an instance of CssLinearGradientData.
     */
    constructor(
        alpha: string,
        backgroundColor: string,
        backgroundImageUri: string
    ) {
        this.alpha = alpha;
        this.backgroundColor = backgroundColor;
        this.backgroundImageUri = backgroundImageUri;
    }

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
