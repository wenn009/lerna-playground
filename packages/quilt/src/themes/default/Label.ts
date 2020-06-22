import { css } from 'styled-components';
import { LabelTheme } from '../../components/Label/interface';
import {
  font_med,
  font_secondary,
  font_xs,
  mg_none,
  no_underline,
  text_color_default,
  text_left,
  uppercase,
} from './styles';
import { sizes } from './utils';

const LabelTheme: LabelTheme = {
  text: css`
    ${[
      font_secondary,
      font_xs,
      font_med,
      mg_none,
      no_underline,
      text_color_default,
      uppercase,
      text_left,
    ]}
    line-height: calc(${sizes.xs} + 4px);
    letter-spacing: 0.05em;
  `,
};

export { LabelTheme };
