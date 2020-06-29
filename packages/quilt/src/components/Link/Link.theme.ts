import { css } from 'styled-components';
import {
  bg_transparent,
  border_none,
  cursor_not_allowed,
  cursor_pointer,
  flex_grow,
  inline_flex,
  justify_center,
  leading_none,
  no_underline,
  opacity_50,
  outline_none,
  pd_bottom_xxs,
  pd_left_xs,
  pd_none,
  pd_right_xs,
  pd_top_xxs,
  pos_relative,
  text_center,
  text_color_charcoal,
  text_color_secondary,
  whitespace_no_wrap,
  width_full,
} from '../../themes/default/styles';
import { LinkTheme } from './interface';

const LinkTheme: LinkTheme = {
  wrapper: css`
    ${[
      pd_none,
      border_none,
      cursor_pointer,
      inline_flex,
      flex_grow,
      justify_center,
      bg_transparent,
      outline_none,
      leading_none,
      pos_relative,
      no_underline,
      whitespace_no_wrap,
    ]}
    &:disabled {
      ${[cursor_not_allowed, opacity_50]};
    }
  `,
  text: {
    text: css`
      ${[
        text_color_charcoal,
        pd_top_xxs,
        pd_bottom_xxs,
        pd_left_xs,
        pd_right_xs,
        width_full,
        text_center,
      ]}

      *:not(:disabled) > &:hover {
        ${text_color_secondary};
      }
    `,
  },
};

export { LinkTheme };
