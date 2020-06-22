import { css } from 'styled-components';
import { LegalTheme } from '../../components/Legal/interface';
import {
  font_med,
  font_primary,
  font_xxs,
  mg_none,
  no_underline,
  text_color_slate,
  text_left,
} from './styles';
import { sizes } from './utils';

const LegalTheme: LegalTheme = {
  text: css`
    ${[
      font_primary,
      font_xxs,
      font_med,
      mg_none,
      no_underline,
      text_color_slate,
      text_left,
    ]}
    line-height: calc(${sizes.xxs} + 2px);
    letter-spacing: 0.014em;
  `,
};

export { LegalTheme };
