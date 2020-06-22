import { css } from 'styled-components';
import { H2Theme } from '../../components/H2/interface';
import {
  font_bold,
  font_primary,
  font_xxl,
  mg_none,
  no_underline,
  text_color_default,
  text_left,
} from './styles';
import { sizes } from './utils';

const H2Theme: H2Theme = {
  text: css`
    ${[
      font_primary,
      font_xxl,
      font_bold,
      mg_none,
      no_underline,
      text_color_default,
      text_left,
    ]}
    line-height: calc(${sizes.xxl} + 6px);
    letter-spacing: 0.014em;
  `,
};

export { H2Theme };
