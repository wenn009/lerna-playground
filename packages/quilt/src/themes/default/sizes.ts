import { ISizes } from '../../theme/structures';

class Sizes implements ISizes<string> {
  xxxl: string = '34px';
  xxl: string = '30px';
  xl: string = '24px';
  lg: string = '18px';
  md: string = '16px';
  sm: string = '14px';
  xs: string = '12px';
  xxs: string = '10px';
}

const sizes = new Sizes();

export { sizes };
