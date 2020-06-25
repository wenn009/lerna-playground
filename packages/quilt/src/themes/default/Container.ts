import { css } from 'styled-components';
import { ContainerTheme } from '../../components/Container/interface';
import {
  border_box,
  mg_left_auto,
  mg_right_auto,
  pd_left_xs,
  pd_right_xs,
  width_full,
} from './styles';

const ContainerTheme: ContainerTheme = {
  wrapper: css`
    ${[
      border_box,
      width_full,
      mg_right_auto,
      mg_left_auto,
      pd_right_xs,
      pd_left_xs,
    ]}
  `,
};

export { ContainerTheme };
