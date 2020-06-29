import { css } from 'styled-components';
import {
  bg_white,
  border_1,
  border_stone,
  cursor_not_allowed,
  cursor_pointer,
  flex_grow,
  inline_flex,
  justify_center,
  no_underline,
  opacity_50,
  outline_none,
  overflow_hidden,
  pd_bottom_xxs,
  pd_left_md,
  pd_right_md,
  pd_top_xxs,
  rounded,
  text_color_secondary,
  truncate,
  whitespace_no_wrap,
} from '../../themes/default/styles';
import { TertiaryButtonTheme } from './interface';

const TertiaryButtonTheme: TertiaryButtonTheme = {
  wrapper: css`
    ${[
      bg_white,
      border_1,
      border_stone,
      cursor_pointer,
      flex_grow,
      inline_flex,
      justify_center,
      no_underline,
      outline_none,
      overflow_hidden,
      pd_bottom_xxs,
      pd_left_md,
      pd_right_md,
      pd_top_xxs,
      rounded,
      whitespace_no_wrap,
    ]}

    &:disabled {
      ${[cursor_not_allowed, opacity_50]};
    }
  `,
  text: {
    text: css`
      ${truncate}

      button:not(:disabled):hover > &, button:not(:disabled):focus > & {
        ${text_color_secondary}
      }
    `,
  },
};

export { TertiaryButtonTheme };
