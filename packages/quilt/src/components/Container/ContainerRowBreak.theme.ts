import { css } from 'styled-components';
import { width_full } from '../../themes/default/styles';
import { ContainerRowBreakTheme } from './interface';

const ContainerRowBreakTheme: ContainerRowBreakTheme = {
  wrapper: css`
    ${[width_full]}
  `,
};

export { ContainerRowBreakTheme };
