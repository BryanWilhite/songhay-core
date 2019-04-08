import { CssLinearGradientData } from '../models/css-linear-gradient-data';
import { CssRedGreenBlue } from '../models/css-red-green-blue';

/**
 * routines for inline CSS
 *
 * @export
 */
export class CssUtility {
    /**
     * gets #ffffff format from 0xFFFFFF format
     */
    static getColorHex(color: string): string | null {
        if (!color) {
            return null;
        }
        return color.replace('0x', '#').toLowerCase();
    }

    /**
     * gets r, g, b format from @type {CssRedGreenBlue} data
     */
    static getColorRgb(rgb: CssRedGreenBlue | null): string | null {
        if (!rgb) {
            return null;
        }
        return `${rgb.r}, ${rgb.g}, ${rgb.b}`;
    }

    /**
     * gets opacity 0.70 format from "70" format
     */
    static getOpacity(opacity: string): number {
        return parseInt(opacity, 10) / 100;
    }

    /**
     * gets 70px pixel format from number 70
     */
    static getPixelValue(pixels: number): string {
        return `${pixels}px`;
    }

    /**
     * gets @type {CssRedGreenBlue} data from #ffffff (or #fff) format
     *
     * @see http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb/5624139?stw=2#5624139
     */
    static getRgbFromHex(hex: string | null): CssRedGreenBlue | null {
        if (!hex) {
            return null;
        }

        // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
        const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        hex = hex.replace(shorthandRegex, (r, g, b) => {
            return r + r + g + g + b + b;
        });

        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result
            ? new CssRedGreenBlue(
                  parseInt(result[1], 16),
                  parseInt(result[2], 16),
                  parseInt(result[3], 16)
              )
            : null;
    }

    /**
     * get linear-gradient CSS from @type {CssLinearGradientData} data
     */
    static getTintedBackground(data: CssLinearGradientData): string | null {
        if (!data) {
            return null;
        }
        const tintHex = this.getColorHex(data.backgroundColor);
        const tintColor = this.getColorRgb(this.getRgbFromHex(tintHex));
        const tintAlpha = data.alpha;
        const backgroundImage = this.getUri(data.backgroundImageUri);

        return `linear-gradient(rgba(${tintColor}, ${tintAlpha}), rgba(${tintColor}, ${tintAlpha})), ${backgroundImage}`;
    }

    /**
     * get url CSS from the URI
     */
    static getUri(uri: string): string {
        return `url('${uri}')`;
    }
}
