import { css } from 'styled-components';
import { ContainerRowBreakTheme } from '../../components/Container/interface';
import { width_full } from './styles';

const ContainerRowBreakTheme: ContainerRowBreakTheme = {
  wrapper: css`
    ${[width_full]}
  `,
};

export { ContainerRowBreakTheme };
