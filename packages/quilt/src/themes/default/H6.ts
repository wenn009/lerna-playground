import { css } from 'styled-components';
import { H6Theme } from '../../components/H6/interface';
import {
  font_bold,
  font_primary,
  font_size_xs,
  mg_none,
  no_underline,
  text_color_default,
  text_left,
} from './styles';

const H6Theme: H6Theme = {
  text: css`
    ${[
      font_primary,
      font_size_xs,
      font_bold,
      text_color_default,
      mg_none,
      no_underline,
      text_left,
    ]}
  `,
};

export { H6Theme };
