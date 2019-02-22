import { CssLinearGradientData } from '../models/css-linear-gradient-data';
import { CssRedGreenBlue } from '../models/css-red-green-blue';
import { CssUtility } from './css.utility';

test('should getColorHex', () => {
    expect(CssUtility.getColorHex('0xEAEAEA')).toBe('#eaeaea');
});

test('should getColorRgb', () => {
    expect(CssUtility.getColorRgb(new CssRedGreenBlue(30, 60, 234))).toBe(
        '30, 60, 234'
    );
});

test('should getOpacity', () => {
    expect(CssUtility.getOpacity('70')).toBe(0.7);
});

test('should getPixelValue', () => {
    expect(CssUtility.getPixelValue(70)).toBe('70px');
});

test('should getRgbFromHex', () => {
    const rgb: CssRedGreenBlue | null = CssUtility.getRgbFromHex('#3F8241');
    expect(rgb).not.toBe(null);

    if (!rgb) {
        return;
    }

    expect(rgb.b).toBe(65);
    expect(rgb.g).toBe(130);
    expect(rgb.r).toBe(63);
});

test('should getTintedBackground', () => {
    const data: CssLinearGradientData = new CssLinearGradientData(
        '0.3',
        '0x808080',
        'https://myserver.com/background.jpg'
    );
    const expectedCss: string = [
        'linear-gradient(rgba(128, 128, 128, 0.3), ',
        'rgba(128, 128, 128, 0.3)), ',
        `url('https://myserver.com/background.jpg')`
    ].join('');
    expect(CssUtility.getTintedBackground(data)).toBe(expectedCss);
});

test('should getUri', () => {
    expect(CssUtility.getUri('https://myserver.com/background.jpg')).toBe(
        `url('https://myserver.com/background.jpg')`
    );
});
