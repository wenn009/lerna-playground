import { IPalette as IDefaultPalette } from '../../theme/structures';
import { colors } from './colors';

const palette: IDefaultPalette<string> = {
  primary: {
    light: colors.powder,
    main: colors.teal,
  },
  secondary: {
    complement: colors.warbyParkerBlue,
    light: colors.brandGreen,
    main: colors.olympic,
  },
  text: {
    default: colors.charcoal,
    muted: colors.slate,
  },
  gradient: {
    start: colors.darkTeal,
    stop: colors.uiTeal,
  },
  overlay: {
    default: colors.overlay,
  },
};

export { palette };
