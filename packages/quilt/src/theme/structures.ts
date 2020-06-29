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
import { H1Theme } from '../components/H1/interface';
import { H2Theme } from '../components/H2/interface';
import { H3Theme } from '../components/H3/interface';
import { H4Theme } from '../components/H4/interface';
import { H5Theme } from '../components/H5/interface';
import { H6Theme } from '../components/H6/interface';
import { IconTheme } from '../components/Icon/interface';
import { LinkTheme } from '../components/Link/interface';
import { QuiltComponentProps } from '../components/QuiltComponent';
import { OpenColor } from './openColor';

type ThemeGetterType = (props: { qGlobal: object }) => string;
type StructureValueType = string | ThemeGetterType;
type ComponentThemes =
  | BodyTextTheme
  | ContainerColTheme
  | ContainerRowBreakTheme
  | ContainerRowTheme
  | ContainerTheme
  | H1Theme
  | H2Theme
  | H3Theme
  | H4Theme
  | H5Theme
  | H6Theme
  | IconTheme
  | LinkTheme;

interface IBreakpoints<T extends StructureValueType> {
  m: T;
  l: T;
  xl: T;
}

interface IColors<T extends StructureValueType> {
  [color: string]: T;
}

abstract class AColors extends OpenColor implements IColors<string> {
  [color: string]: string;
}

interface IPalette<T extends StructureValueType> {
  primary: {
    main: T;
    light: T;
  };
  secondary: {
    scale_1: T;
    scale_2: T;
    scale_3: T;
    scale_4: T;
    scale_5: T;
    scale_6: T;
    scale_7: T;
    scale_8: T;
    scale_9: T;
    scale_10: T;
  };
  tertiary: {
    light: T;
    dark: T;
    complement: T;
  };
  utility: {
    light: T;
    medium: T;
    dark: T;
    complement: T;
  };
  greyscale: {
    white: T;
    scale_1: T;
    scale_2: T;
    scale_3: T;
    scale_4: T;
    scale_5: T;
    scale_6: T;
    scale_7: T;
    scale_8: T;
    scale_9: T;
    scale_10: T;
    scale_11: T;
    black: T;
  };
}

interface IScale<T extends StructureValueType> {
  xxl: T;
  xl: T;
  lg: T;
  md: T;
  sm: T;
  xs: T;
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
    H1: H1Theme;
    H2: H2Theme;
    H3: H3Theme;
    H4: H4Theme;
    H5: H5Theme;
    H6: H6Theme;
    Icon: IconTheme;
    Link: LinkTheme;
  };
  core: {
    breakpoints: IBreakpoints<string>;
    colors: IColors<string>;
    fonts: IFonts<string>;
    palette: IPalette<string>;
    scale: IScale<string>;
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
  IScale,
  ISizes,
  ISpaces,
  IStyledProps,
  ITheme,
  StructureValueType,
  StyledCss,
  ThemeGetterType,
};
