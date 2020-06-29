import { css } from 'styled-components';
import {
  bg_secondary,
  bg_secondary_light,
  bg_white,
  border_1,
  border_secondary,
  border_secondary_light,
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
  text_color_white,
  truncate,
  whitespace_no_wrap,
} from '../../themes/default/styles';
import { SecondaryButtonTheme } from './interface';

const SecondaryButtonTheme: SecondaryButtonTheme = {
  wrapper: css`
    ${[
      bg_white,
      border_1,
      border_secondary,
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

    &:not(:disabled):hover {
      ${bg_secondary}
    }

    &:not(:disabled):focus {
      ${[bg_secondary_light, border_secondary_light]}
    }

    &:disabled {
      ${[cursor_not_allowed, opacity_50]};
    }
  `,
  text: {
    text: css`
      ${[text_color_secondary, truncate]}

      button:not(:disabled):hover > &, button:not(:disabled):focus > & {
        ${text_color_white}
      }
    `,
  },
};

export { SecondaryButtonTheme };
