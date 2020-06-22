import { css } from 'styled-components';
import { H3Theme } from '../../components/H3/interface';
import {
  font_light,
  font_primary,
  font_xl,
  mg_none,
  no_underline,
  text_color_default,
  text_left,
} from './styles';
import { sizes } from './utils';

const H3Theme: H3Theme = {
  text: css`
    ${[
      font_primary,
      font_xl,
      font_light,
      mg_none,
      no_underline,
      text_color_default,
      text_left,
    ]}
    line-height: calc(${sizes.xl} + 6px);
    letter-spacing: 0.014em;
  `,
};

export { H3Theme };
