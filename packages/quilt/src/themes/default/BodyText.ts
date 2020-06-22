import { css } from 'styled-components';
import { BodyTextTheme } from '../../components/BodyText/interface';
import {
  font_med,
  font_primary,
  font_sm,
  mg_none,
  no_underline,
  text_color_default,
  text_left,
} from './styles';
import { sizes } from './utils';

const BodyTextTheme: BodyTextTheme = {
  text: css`
    ${[
      font_primary,
      font_sm,
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
