import { css } from 'styled-components';
import {
  font_med,
  font_primary,
  font_size_sm,
  mg_none,
  no_underline,
  text_color_default,
  text_left,
} from '../../themes/default/styles';
import { sizes } from '../../themes/default/utils';
import { BodyTextTheme } from './interface';

const BodyTextTheme: BodyTextTheme = {
  text: css`
    ${[
      font_primary,
      font_size_sm,
      font_med,
      mg_none,
      no_underline,
      text_color_default,
      text_left,
    ]}
    line-height: calc(${sizes.md} + 4px);
    letter-spacing: 0.014em;
  `,
};

export { BodyTextTheme };
