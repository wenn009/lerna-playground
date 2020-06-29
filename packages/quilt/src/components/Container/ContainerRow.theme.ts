import { css } from 'styled-components';
import {
  border_box,
  flex,
  flex_wrap,
  mg_left_none,
  mg_right_none,
} from '../../themes/default/styles';
import { spaces } from '../../themes/default/utils';
import { ContainerRowTheme } from './interface';

const ContainerRowTheme: ContainerRowTheme = {
  wrapper: css`
    ${[border_box, flex, flex_wrap]}
    margin-left: -${spaces.xs};
    margin-right: -${spaces.xs};

    &[data-no-gutters='true'] {
      ${[mg_right_none, mg_left_none]}
    }
  `,
};

export { ContainerRowTheme };
