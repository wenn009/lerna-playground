import {
  FlattenInterpolation,
  ThemedStyledProps,
  ThemeProps,
} from 'styled-components';
import { BodyTextTheme } from '../components/BodyText/interface';
import {
  ContainerColTheme,
  ContainerRowBreakTheme,
  ContainerRowTheme,
  ContainerTheme,
} from '../components/Container/interface';
import { DescriptionTheme } from '../components/Description/interface';
import { H1Theme } from '../components/H1/interface';
import { H2Theme } from '../components/H2/interface';
import { H3Theme } from '../components/H3/interface';
import { H4Theme } from '../components/H4/interface';
import { H5Theme } from '../components/H5/interface';
import { H6Theme } from '../components/H6/interface';
import { IconTheme } from '../components/Icon/interface';
import { LabelTheme } from '../components/Label/interface';
import { LegalTheme } from '../components/Legal/interface';
import { LinkTheme } from '../components/Link/interface';
import { PrimaryButtonTheme } from '../components/PrimaryButton/interface';
import { QuiltComponentProps } from '../components/QuiltComponent';
import { SecondaryButtonTheme } from '../components/SecondaryButton/interface';
import { SubHeadingTheme } from '../components/SubHeading/interface';
import { SubTitleTheme } from '../components/SubTitle/interface';
import { TertiaryButtonTheme } from '../components/TertiaryButton/interface';
import { TextTheme } from '../components/Text/interface';
import { OpenColor } from './openColor';

type ThemeGetterType = (props: { qGlobal: object }) => string;
type StructureValueType = string | ThemeGetterType;
type ComponentThemes =
  | BodyTextTheme
  | ContainerColTheme
  | ContainerRowBreakTheme
  | ContainerRowTheme
  | ContainerTheme
  | DescriptionTheme
  | H1Theme
  | H2Theme
  | H3Theme
  | H4Theme
  | H5Theme
  | H6Theme
  | IconTheme
  | LabelTheme
  | LegalTheme
  | LinkTheme
  | PrimaryButtonTheme
  | SecondaryButtonTheme
  | SubHeadingTheme
  | SubTitleTheme
  | TertiaryButtonTheme
  | TextTheme;

interface IBreakpoints<T extends StructureValueType> {
  m: T;
  l: T;
  xl: T;
}

interface IColors<T extends StructureValueType> {
  black: T;
  white: T;
  [color: string]: T;
}

abstract class AColors extends OpenColor implements IColors<string> {
  black: string = '#000000';
  white: string = '#ffffff';
  [color: string]: string;
}

interface IGradientValue<T extends StructureValueType> {
  start: T;
  stop: T;
}

interface IOverlayValue<T extends StructureValueType> {
  default: T;
}

interface ITextValue<T extends StructureValueType> {
  default: T;
  muted: T;
}

interface IPalette<T extends StructureValueType> {
  primary: {
    light: T;
    main: T;
  };
  secondary: {
    complement: T;
    light: T;
    main: T;
  };
  text: ITextValue<T>;
  gradient: IGradientValue<T>;
  overlay: IOverlayValue<T>;
}

interface ISizes<T extends StructureValueType> {
  xxxl: T;
  xxl: T;
  xl: T;
  lg: T;
  md: T;
  sm: T;
  xs: T;
  xxs: T;
}

interface ISpaces<T extends StructureValueType> {
  xxs: T;
  xs: T;
  sm: T;
  md: T;
  lg: T;
  xl: T;
  xxl: T;
  xxxl: T;
  xxxxl: T;
  xxxxxl: T;
  xxxxxxl: T;
}

interface IFonts<T extends StructureValueType> {
  primary: T;
  secondary: T;
}

interface ITheme {
  components: {
    BodyText: BodyTextTheme;
    Container: ContainerTheme;
    ContainerCol: ContainerColTheme;
    ContainerRow: ContainerRowTheme;
    ContainerRowBreak: ContainerRowBreakTheme;
    Description: DescriptionTheme;
    H1: H1Theme;
    H2: H2Theme;
    H3: H3Theme;
    H4: H4Theme;
    H5: H5Theme;
    H6: H6Theme;
    Icon: IconTheme;
    Label: LabelTheme;
    Legal: LegalTheme;
    Link: LinkTheme;
    PrimaryButton: PrimaryButtonTheme;
    SecondaryButton: SecondaryButtonTheme;
    SubTitle: SubTitleTheme;
    SubHeading: SubHeadingTheme;
    TertiaryButton: TertiaryButtonTheme;
    Text: TextTheme;
  };
  core: {
    breakpoints: IBreakpoints<string>;
    colors: IColors<string>;
    fonts: IFonts<string>;
    palette: IPalette<string>;
    sizes: ISizes<string>;
    spaces: ISpaces<string>;
  };
}

interface IStyledProps {
  theme: object;
  globalTheme: object;
}

interface IComponentTheme<Props, Theme extends ComponentThemes> {
  [key: string]: cssType<Props, Theme> | ThemeGetterType;
}

type ComponentThemeValue<Props, Theme extends ComponentThemes> =
  | cssType<Props, Theme>
  | ThemeGetterType;

type cssType<Props, Theme extends ComponentThemes> = Array<
  FlattenInterpolation<
    ThemedStyledProps<QuiltComponentProps<Props, Theme>, any>
  >
>;
type StyledCss =
  | FlattenInterpolation<ThemeProps<any>>
  | Array<FlattenInterpolation<ThemeProps<any>>>;

export {
  AColors,
  ComponentThemes,
  ComponentThemeValue,
  cssType,
  IBreakpoints,
  IColors,
  IComponentTheme,
  IFonts,
  IPalette,
  ISizes,
  ISpaces,
  IStyledProps,
  ITheme,
  StructureValueType,
  StyledCss,
  ThemeGetterType,
};
