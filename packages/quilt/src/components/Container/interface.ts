import { StyledCss } from '../../theme/structures';
import { AnyProp } from '../QuiltComponent';

type ColumnSize11 = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
type ColumnSize12 = ColumnSize11 | 12;
type ColumnOrder = 'first' | 'last' | ColumnSize12;

type ContainerProps = AnyProp;

type ContainerColProps = AnyProp & {
  auto?: boolean;
  flex?: boolean;
  offset?: ColumnSize11;
  order?: ColumnOrder;
  size?: ColumnSize12;
};

const defaultContainerColProps: Readonly<Pick<
  ContainerColProps,
  'auto' | 'flex'
>> = {
  auto: false,
  flex: false,
};

type ContainerRowBreakProps = AnyProp;

type ContainerRowProps = AnyProp & {
  noGutters?: boolean;
};

const defaultContainerRowProps: Readonly<Pick<
  ContainerRowProps,
  'noGutters'
>> = {
  noGutters: false,
};

type ContainerTheme = {
  wrapper?: StyledCss;
};

type ContainerRowBreakTheme = {
  wrapper?: StyledCss;
};

type ContainerRowTheme = {
  wrapper?: StyledCss;
};

type ContainerColTheme = {
  wrapper?: StyledCss;
};

export {
  defaultContainerColProps,
  defaultContainerRowProps,
  ContainerProps,
  ContainerColProps,
  ContainerRowProps,
  ContainerTheme,
  ContainerColTheme,
  ContainerRowBreakProps,
  ContainerRowBreakTheme,
  ContainerRowTheme,
};
