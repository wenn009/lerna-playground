import { css } from 'styled-components';
import { H5Theme } from '../../components/H5/interface';
import {
  font_bold,
  font_md,
  font_primary,
  mg_none,
  no_underline,
  text_color_default,
  text_left,
} from './styles';
import { sizes } from './utils';

const H5Theme: H5Theme = {
  text: css`
    ${[
      font_primary,
      font_md,
      font_bold,
      mg_none,
      no_underline,
      text_color_default,
      text_left,
    ]}
    line-height: calc(${sizes.md} + 6px);
    letter-spacing: 0.014em;
  `,
};

export { H5Theme };
