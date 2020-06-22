import { css } from 'styled-components';
import { SubHeadingTheme } from '../../components/SubHeading/interface';
import {
  font_bold,
  font_primary,
  font_xs,
  mg_none,
  no_underline,
  text_color_default,
  text_left,
} from './styles';
import { sizes } from './utils';

const SubHeadingTheme: SubHeadingTheme = {
  text: css`
    ${[
      font_primary,
      font_xs,
      font_bold,
      mg_none,
      no_underline,
      text_color_default,
      text_left,
    ]}
    line-height: calc(${sizes.xs} + 4px);
    letter-spacing: 0.014em;
  `,
};

export { SubHeadingTheme };
