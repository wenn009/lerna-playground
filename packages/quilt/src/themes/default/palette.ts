import { IPalette as IDefaultPalette } from '../../theme/structures';
import { colors } from './colors';

const palette: IDefaultPalette<string> = {
  primary: {
    main: colors.blue,
    light: colors.cornflower,
  },
  secondary: {
    scale_1: colors.foundation,
    scale_2: colors.lilac,
    scale_3: colors.perfume,
    scale_4: colors.moment,
    scale_5: colors.portage,
    scale_6: colors.cornflower,
    scale_7: colors.royal,
    scale_8: colors.cerulean,
    scale_9: colors.jackson,
    scale_10: colors.quantum,
  },
  tertiary: {
    light: colors.shiva,
    dark: colors.celestial,
    complement: colors.macaroni,
  },
  utility: {
    light: colors.lemon,
    medium: colors.tangerine,
    dark: colors.pomegranate,
    complement: colors.apple,
  },
  greyscale: {
    white: colors.white,
    scale_1: colors.doctor,
    scale_2: colors.cultured,
    scale_3: colors.bonjour,
    scale_4: colors.nobel,
    scale_5: colors.pewter,
    scale_6: colors.frost,
    scale_7: colors.fedora,
    scale_8: colors.scorpion,
    scale_9: colors.panther,
    scale_10: colors.thunder,
    scale_11: colors.jet,
    black: colors.black,
  },
};

export { palette };
