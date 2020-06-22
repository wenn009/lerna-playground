import { IFonts } from '../../theme/structures';

// https://css-tricks.com/snippets/css/system-font-stack/
// https://www.smashingmagazine.com/2015/11/using-system-ui-fonts-practical-guide/

const fontStack: string = `-apple-system, BlinkMacSystemFont,
    "Segoe UI", "Oxygen", "Ubuntu", "Cantarell",
    "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif`;

const fonts: IFonts<string> = {
  primary: `'Roboto', ${fontStack}`,
  secondary: `'Roboto', ${fontStack}`,
};

export { fonts };
