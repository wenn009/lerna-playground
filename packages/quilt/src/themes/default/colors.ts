import { AColors, IColors, StructureValueType } from '../../theme/structures';

interface IDefaultColors<T extends StructureValueType> extends IColors<T> {
  black: T;
  charcoal: T;
  gray: T;
  lightGray: T;
  coolGray: T;
  fog: T;
  white: T;
  slate: T;
  stone: T;
  whiteSmoke: T;
  blackHaze: T;
  brandGreen: T;
  warbyParkerBlue: T;
  powder: T;
  olympic: T;
  teal: T;
}

class Colors extends AColors implements IDefaultColors<string> {
  // Supporting Colors
  fog: string = '#EEEFF0';

  // Default
  powder: string = '#7FB2BE';
  teal: string = '#5C879F';
  olympic: string = '#79A3C9';
  warbyParkerBlue: string = '#49A6F4';
  brandGreen: string = '#66C374';
  black: string = '#000000';
  charcoal: string = '#403E3B';
  gray: string = '#A09E9D';
  lightGray: string = '#EEEFF0';
  coolGray: string = '#F0F3F4';
  white: string = '#FFFFFF';

  // Used
  slate: string = '#A09E9D';
  stone: string = '#D6D5D2';
  whiteSmoke: string = '#F5F7F7';
  blackHaze: string = '#FAFBFB';

  overlay: string = 'rgba(245, 247, 247, 0.9)';
}

const colors = new Colors();

export { colors, IDefaultColors };
