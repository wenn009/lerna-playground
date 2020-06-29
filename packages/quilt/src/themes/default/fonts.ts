import { IFonts } from '../../theme/structures';

// https://css-tricks.com/snippets/css/system-font-stack/
// https://www.smashingmagazine.com/2015/11/using-system-ui-fonts-practical-guide/

const fontStack: string = `-apple-system, BlinkMacSystemFont,
    "Segoe UI", "Helvetica", "Arial", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol"`;

const fonts: IFonts<string> = {
  default: `${fontStack}`,
};

export { fonts };
