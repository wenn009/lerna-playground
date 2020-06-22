import { css } from 'styled-components';
import { DescriptionTheme } from '../../components/Description/interface';
import {
  font_med,
  font_primary,
  font_xs,
  mg_none,
  no_underline,
  text_color_default,
  text_left,
} from './styles';
import { sizes } from './utils';

const DescriptionTheme: DescriptionTheme = {
  text: css`
    ${[
      font_primary,
      font_xs,
      font_med,
      mg_none,
      no_underline,
      text_color_default,
      text_left,
    ]}
    line-height: calc(${sizes.xs} + 4px);
    letter-spacing: 0.014em;
  `,
};

export { DescriptionTheme };
