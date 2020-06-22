import { css } from 'styled-components';
import { H6Theme } from '../../components/H6/interface';
import {
  font_med,
  font_primary,
  font_sm,
  mg_none,
  no_underline,
  text_color_default,
  text_left,
} from './styles';
import { sizes } from './utils';

const H6Theme: H6Theme = {
  text: css`
    ${[
      font_primary,
      font_sm,
      font_med,
      text_color_default,
      mg_none,
      no_underline,
      text_left,
    ]}
    line-height: calc(${sizes.sm} + 6px);
    letter-spacing: 0.014em;
  `,
};

export { H6Theme };
