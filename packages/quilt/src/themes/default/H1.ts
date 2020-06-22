import { css } from 'styled-components';
import { H1Theme } from '../../components/H1/interface';
import {
  font_light,
  font_primary,
  font_xxxl,
  mg_none,
  no_underline,
  text_color_default,
  text_left,
} from './styles';
import { sizes } from './utils';

const H1Theme: H1Theme = {
  text: css`
    ${[
      font_primary,
      font_xxxl,
      font_light,
      mg_none,
      no_underline,
      text_color_default,
      text_left,
    ]}
    line-height: calc(${sizes.xxxl} + 6px);
    letter-spacing: 0.014em;
  `,
};

export { H1Theme };
