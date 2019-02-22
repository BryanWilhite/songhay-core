import { CssLinearGradientData } from '../models/css-linear-gradient-data';
import { CssRedGreenBlue } from '../models/css-red-green-blue';
/**
 * routines for inline CSS
 *
 * @export
 * @class CssUtility
 */
export declare class CssUtility {
    /**
     * gets #ffffff format from 0xFFFFFF format
     *
     * @param {string} color
     * @returns {string}
     * @memberof CssUtility
     */
    static getColorHex(color: string): string | null;
    /**
     * gets r, g, b format from @type {CssRedGreenBlue} data
     *
     * @param {CssRedGreenBlue} rgb
     * @returns {string}
     * @memberof CssUtility
     */
    static getColorRgb(rgb: CssRedGreenBlue | null): string | null;
    /**
     * gets opacity 0.70 format from "70" format
     *
     * @param {string} opacity
     * @returns {number}
     * @memberof CssUtility
     */
    static getOpacity(opacity: string): number;
    /**
     * gets 70px pixel format from number 70
     *
     * @param {number} pixels
     * @returns {string}
     * @memberof CssUtility
     */
    static getPixelValue(pixels: number): string;
    /**
     * gets @type {CssRedGreenBlue} data from #ffffff (or #fff) format
     *
     * @param {string} hex
     * @returns {CssRedGreenBlue}
     * @memberof CssUtility
     *
     * @see http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb/5624139?stw=2#5624139
     */
    static getRgbFromHex(hex: string | null): CssRedGreenBlue | null;
    /**
     * get linear-gradient CSS from @type {CssLinearGradientData} data
     *
     * @param {CssLinearGradientData} data
     * @returns {string}
     * @memberof CssUtility
     */
    static getTintedBackground(data: CssLinearGradientData): string | null;
    /**
     * get url CSS from the URI
     *
     * @param {string} uri
     * @returns {string}
     * @memberof CssUtility
     */
    static getUri(uri: string): string;
}
