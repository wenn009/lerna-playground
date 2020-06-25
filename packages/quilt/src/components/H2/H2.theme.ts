import { css } from 'styled-components';
import {
  font_bold,
  font_primary,
  font_size_xl,
  mg_none,
  no_underline,
  text_color_default,
  text_left,
} from '../../themes/default/styles';
import { H2Theme } from './interface';

const H2Theme: H2Theme = {
  text: css`
    ${[
      font_primary,
      font_size_xl,
      font_bold,
      mg_none,
      no_underline,
      text_color_default,
      text_left,
    ]}
  `,
};

export { H2Theme };
