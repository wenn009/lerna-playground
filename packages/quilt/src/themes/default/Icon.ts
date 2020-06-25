import { css } from 'styled-components';
import { IconTheme } from '../../components/Icon/interface';
import { inline_block, leading_none } from './styles';
import { sizes } from './utils';

const IconTheme: IconTheme = {
  wrapper: [inline_block, leading_none],
  image: css`
    max-height: ${sizes.xl};
    max-width: ${sizes.xl};
  `,
};

export { IconTheme };
