import { css } from 'styled-components';
import { H1Theme } from '../../components/H1/interface';
import {
  font_bold,
  font_primary,
  font_size_xxl,
  mg_none,
  no_underline,
  text_color_default,
  text_left,
} from './styles';

const H1Theme: H1Theme = {
  text: css`
    ${[
      font_primary,
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
