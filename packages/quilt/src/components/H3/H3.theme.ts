import { css } from 'styled-components';
import {
  font_bold,
  font_default,
  font_size_lg,
  mg_none,
  no_underline,
  text_color_default,
  text_left,
} from '../../themes/default/styles';
import { H3Theme } from './interface';

const H3Theme: H3Theme = {
  text: css`
    ${[
      font_default,
      font_size_lg,
      font_bold,
      mg_none,
      no_underline,
      text_color_default,
      text_left,
    ]}
  `,
};

export { H3Theme };
