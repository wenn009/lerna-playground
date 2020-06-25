import { css } from 'styled-components';
import {
  createBreakpointsUtil,
  createColorUtil,
  createFontUtil,
  createPaletteUtil,
  createScaleUtil,
  createSizeUtil,
  createSpaceUtil,
} from '../../theme/helpers';
import {
  IBreakpoints as IDefaultBreakpoints,
  IFonts as IDefaultFonts,
  IPalette as IDefaultPalette,
  IScale as IDefaultScale,
  ISizes as IDefaultSizes,
  ISpaces as IDefaultSpaces,
  StyledCss,
  ThemeGetterType,
} from '../../theme/structures';
import { breakpoints } from './breakpoints';
import { colors, IDefaultColors } from './colors';
import { fonts } from './fonts';
import { palette } from './palette';
import { sizes } from './sizes';
import { spaces } from './spaces';

const breakpointUtils: IDefaultBreakpoints<ThemeGetterType> = createBreakpointsUtil<
  IDefaultBreakpoints<string>
>(breakpoints);
const colorUtils: IDefaultColors<ThemeGetterType> = createColorUtil<
  IDefaultColors<string>
>(colors);
const fontUtils: IDefaultFonts<ThemeGetterType> = createFontUtil<
  IDefaultFonts<string>
>(fonts);
const paletteUtils: IDefaultPalette<ThemeGetterType> = createPaletteUtil<
  IDefaultPalette<string>
>(palette);
const scaleUtils: IDefaultScale<ThemeGetterType> = createScaleUtil<
  IDefaultScale<string>
>(sizes);
const sizeUtils: IDefaultSizes<ThemeGetterType> = createSizeUtil<
  IDefaultSizes<string>
>(sizes);
const spaceUtils: IDefaultSpaces<ThemeGetterType> = createSpaceUtil<
  IDefaultSpaces<string>
>(spaces);

function styles(...styleRules: StyledCss[]) {
  return css`
    ${styleRules}
  `;
}

export {
  breakpointUtils as breakpoints,
  colorUtils as colors,
  fontUtils as fonts,
  paletteUtils as palette,
  scaleUtils as scale,
  sizeUtils as sizes,
  spaceUtils as spaces,
  styles,
};
