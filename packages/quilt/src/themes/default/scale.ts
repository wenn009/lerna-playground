import { IScale } from '../../theme/structures';

class Scale implements IScale<string> {
  xxl: string = '2.5rem';
  xl: string = '2rem';
  lg: string = '1.563rem';
  md: string = '1.188rem';
  sm: string = '0.875rem';
  xs: string = '0.688rem';
}

const scale = new Scale();

export { scale };
