import { ISpaces } from '../../theme/structures';

class Spaces implements ISpaces<string> {
  xxs: string = '4px';
  xs: string = '8px';
  sm: string = '12px';
  md: string = '16px';
  lg: string = '20px';
  xl: string = '24px';
  xxl: string = '32px';
  xxxl: string = '40px';
  xxxxl: string = '48px';
  xxxxxl: string = '54px';
  xxxxxxl: string = '64px';
}

const spaces = new Spaces();

export { spaces };
