import { css } from 'styled-components';
import {
  bg_secondary,
  bg_secondary_light,
  border_none,
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
  text_color_white,
  truncate,
  whitespace_no_wrap,
} from '../../themes/default/styles';
import { PrimaryButtonTheme } from './interface';

const PrimaryButtonTheme: PrimaryButtonTheme = {
  wrapper: css`
    ${[
      bg_secondary,
      border_none,
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

    &:not(:disabled):hover, &:not(:disabled):focus {
      ${bg_secondary_light}
    }

    &:disabled {
      ${[cursor_not_allowed, opacity_50]}
    }
  `,
  text: {
    text: css`
      ${[text_color_white, truncate]}
    `,
  },
};

export { PrimaryButtonTheme };
