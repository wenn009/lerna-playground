import { css } from 'styled-components';
import {
  font_bold,
  font_default,
  font_size_xxl,
  mg_none,
  no_underline,
  text_color_default,
  text_left,
} from '../../themes/default/styles';
import { H1Theme } from './interface';

const H1Theme: H1Theme = {
  text: css`
    ${[
      font_default,
      font_size_xxl,
      font_bold,
      mg_none,
      no_underline,
      text_color_default,
      text_left,
    ]}
  `,
};

export { H1Theme };
