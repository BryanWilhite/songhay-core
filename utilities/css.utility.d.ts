import { CssLinearGradientData } from '../models/css-linear-gradient-data';
import { CssRedGreenBlue } from '../models/css-red-green-blue';
/**
 * routines for inline CSS
 *
 * @export
 */
export declare class CssUtility {
    /**
     * gets #ffffff format from 0xFFFFFF format
     */
    static getColorHex(color: string): string | null;
    /**
     * gets r, g, b format from @type {CssRedGreenBlue} data
     */
    static getColorRgb(rgb: CssRedGreenBlue | null): string | null;
    /**
     * gets @type {CSSStyleDeclaration} data
     */
    static getComputedStylePropertyValue(element: HTMLElement, propertyName: string): string | null;
    /**
     * gets @type {CSSStyleDeclaration} data
     */
    static getComputedStylePropertyValueById(elementId: string, propertyName: string): string | null;
    /**
     * gets @type {CSSStyleDeclaration} data
     */
    static getComputedStylePropertyValueByQuery(query: string, propertyName: string): string | null;
    /**
     * gets opacity 0.70 format from "70" format
     */
    static getOpacity(opacity: string): number;
    /**
     * gets 70px pixel format from number 70
     */
    static getPixelValue(pixels: number): string;
    /**
     * gets @type {CssRedGreenBlue} data from #ffffff (or #fff) format
     *
     * @see http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb/5624139?stw=2#5624139
     */
    static getRgbFromHex(hex: string | null): CssRedGreenBlue | null;
    /**
     * get linear-gradient CSS from @type {CssLinearGradientData} data
     */
    static getTintedBackground(data: CssLinearGradientData): string | null;
    /**
     * get url CSS from the URI
     */
    static getUri(uri: string): string;
    /**
     * gets @type {CSSStyleDeclaration} data
     */
    static setComputedStylePropertyValue(element: HTMLElement, propertyName: string, propertyValue: string): void;
}
