import { css } from 'styled-components';
import { inline_block, leading_none } from '../../themes/default/styles';
import { sizes } from '../../themes/default/utils';
import { IconTheme } from './interface';

const IconTheme: IconTheme = {
  wrapper: [inline_block, leading_none],
  image: css`
    max-height: ${sizes.xl};
    max-width: ${sizes.xl};
  `,
};

export { IconTheme };
