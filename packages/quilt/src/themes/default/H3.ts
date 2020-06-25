import { css } from 'styled-components';
import { H3Theme } from '../../components/H3/interface';
import {
  font_bold,
  font_primary,
  font_size_lg,
  mg_none,
  no_underline,
  text_color_default,
  text_left,
} from './styles';

const H3Theme: H3Theme = {
  text: css`
    ${[
      font_primary,
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
