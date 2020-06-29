import { AColors, IColors, StructureValueType } from '../../theme/structures';

interface IDefaultColors<T extends StructureValueType> extends IColors<T> {
  blue: T;
  cornflower: T;
  foundation: T;
  lilac: T;
  perfume: T;
  moment: T;
  portage: T;
  royal: T;
  cerulean: T;
  jackson: T;
  quantum: T;
  shiva: T;
  celestial: T;
  macaroni: T;
  lemon: T;
  tangerine: T;
  pomegranate: T;
  apple: T;
  white: T;
  doctor: T;
  cultured: T;
  bonjour: T;
  nobel: T;
  pewter: T;
  frost: T;
  fedora: T;
  scorpion: T;
  panther: T;
  thunder: T;
  jet: T;
}

class Colors extends AColors implements IDefaultColors<string> {
  // PRIMARY
  blue: string = '#3333FF';
  cornflower: string = '#686DF3';

  // SECONDARY
  foundation: string = '#F2EEFB';
  lilac: string = '#E6DDF8';
  perfume: string = '#CBB8F7';
  moment: string = '#AA9EF6';
  portage: string = '#8A84F4';
  royal: string = '#4250E0';
  cerulean: string = '#2932C9';
  jackson: string = '#1C209E';
  quantum: string = '#0E0E76';

  // TERTIARY
  shiva: string = '#97DAF8';
  celestial: string = '#2ED9C3';
  macaroni: string = '#FFC27A';

  // UTILITY
  lemon: string = '#FCCC0A';
  tangerine: string = '#FB7421';
  pomegranate: string = '#EE352E';
  apple: string = '#389E45';

  // GREYSCALE
  white: string = '#FFFFFF';
  doctor: string = '#FAF8F8';
  cultured: string = '#F7F4F4';
  bonjour: string = '#E0DDDE';
  nobel: string = '#B3B0B1';
  pewter: string = '#9C999A';
  frost: string = '#868384';
  fedora: string = '#726F71';
  scorpion: string = '#5B585A';
  panther: string = '#444144';
  thunder: string = '#2E2B2D';
  jet: string = '#171417';
  black: string = '#000000';
}

const colors = new Colors();

export { colors, IDefaultColors };
