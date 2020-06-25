import { css } from 'styled-components';
import { H4Theme } from '../../components/H4/interface';
import {
  font_bold,
  font_primary,
  font_size_md,
  mg_none,
  no_underline,
  text_color_default,
  text_left,
} from './styles';

const H4Theme: H4Theme = {
  text: css`
    ${[
      font_primary,
      font_size_md,
      font_bold,
      mg_none,
      no_underline,
      text_color_default,
      text_left,
    ]}
  `,
};

export { H4Theme };
