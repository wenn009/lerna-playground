import { css } from 'styled-components';
import { H4Theme } from '../../components/H4/interface';
import {
  font_lg,
  font_med,
  font_primary,
  mg_none,
  no_underline,
  text_color_default,
  text_left,
} from './styles';
import { sizes } from './utils';

const H4Theme: H4Theme = {
  text: css`
    ${[
      font_primary,
      font_lg,
      font_med,
      mg_none,
      no_underline,
      text_color_default,
      text_left,
    ]}
    line-height: calc(${sizes.lg} + 6px);
    letter-spacing: 0.014em;
  `,
};

export { H4Theme };
