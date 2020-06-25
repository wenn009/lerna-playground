import { css } from 'styled-components';
import {
  font_bold,
  font_primary,
  font_size_sm,
  mg_none,
  no_underline,
  text_color_default,
  text_left,
} from '../../themes/default/styles';
import { H5Theme } from './interface';

const H5Theme: H5Theme = {
  text: css`
    ${[
      font_primary,
      font_size_sm,
      font_bold,
      mg_none,
      no_underline,
      text_color_default,
      text_left,
    ]}
  `,
};

export { H5Theme };
