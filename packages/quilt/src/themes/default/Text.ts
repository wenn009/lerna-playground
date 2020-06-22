import { css } from 'styled-components';
import { TextTheme } from '../../components/Text/interface';
import {
  flex,
  font_med,
  font_secondary,
  font_sm,
  items_center,
  leading_loose,
  mg_none,
  no_underline,
  pos_relative,
  text_color_charcoal,
  whitespace_normal,
} from './styles';

const TextTheme: TextTheme = {
  text: css`
    ${[
      flex,
      items_center,
      text_color_charcoal,
      leading_loose,
      pos_relative,
      mg_none,
      no_underline,
      font_secondary,
      font_sm,
      font_med,
      whitespace_normal,
    ]}
    transition: 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  `,
};

export { TextTheme };
