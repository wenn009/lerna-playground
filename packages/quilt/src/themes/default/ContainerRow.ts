import { css } from 'styled-components';
import { ContainerRowTheme } from '../../components/Container/interface';
import {
  border_box,
  flex,
  flex_wrap,
  mg_left_none,
  mg_right_none,
} from './styles';
import { spaces } from './utils';

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
