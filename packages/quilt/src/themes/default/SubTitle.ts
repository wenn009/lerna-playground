import { css } from 'styled-components';
import { SubTitleTheme } from '../../components/SubTitle/interface';
import {
  font_bold,
  font_primary,
  font_sm,
  mg_none,
  no_underline,
  text_color_default,
  text_left,
} from './styles';
import { sizes } from './utils';

const SubTitleTheme: SubTitleTheme = {
  text: css`
    ${[
      font_primary,
      font_sm,
      font_bold,
      mg_none,
      no_underline,
      text_color_default,
      text_left,
    ]}
    line-height: calc(${sizes.md} + 4px);
    letter-spacing: 0.014em;
  `,
};

export { SubTitleTheme };
