// tslint:disable:max-classes-per-file
import { get, isNil, isPlainObject, mapValues, mergeWith } from 'lodash';
import * as React from 'react';
import styled, { css } from 'styled-components';
import { applyTheme } from '../theme/helpers';
import { ComponentThemes, ITheme, StyledCss } from '../theme/structures';

type AnyProp = {
  [key: string]: any;
};

type ExtendedThemeType<ComponentTheme extends ComponentThemes> =
  | ComponentTheme
  | StyledCss;

interface IQuiltComponentThemeProps<ComponentTheme extends ComponentThemes> {
  qGlobal: ITheme;
  qExtend?: ExtendedThemeType<ComponentTheme>;
}

type QuiltComponentProps<
  ComponentProps extends AnyProp,
  ComponentTheme extends ComponentThemes
> = ComponentProps & IQuiltComponentThemeProps<ComponentTheme>;

type ComponentsRecord<ComponentTheme> = Record<
  string,
  [keyof JSX.IntrinsicElements, keyof ComponentTheme]
>;
type ThemedComponentsRecord = Record<string, (props) => JSX.Element>;

function createStyledComponents<ComponentTheme extends ComponentThemes>(
  components: ComponentsRecord<ComponentTheme>
): ThemedComponentsRecord {
  return mapValues(components, ([type, path]) => {
    return applyTheme(styled[type], path as string);
  });
}

type StylePropsType<ComponentTheme extends ComponentThemes> = {
  qExtend: ExtendedThemeType<ComponentTheme>;
  qGlobal: ITheme;
  qSelf: ComponentTheme;
  qWrapper: string;
};

function mergeThemeCustomizer(objValue, srcValue) {
  if (
    !isNil(objValue) &&
    !isNil(srcValue) &&
    !isPlainObject(objValue) &&
    !isPlainObject(srcValue)
  ) {
    return css`
      ${objValue}
      ${srcValue}
    `;
  }
}

function mergeThemes<ComponentTheme>(...sources): ComponentTheme {
  return mergeWith({}, ...sources, mergeThemeCustomizer);
}

/**
 * Quilt Component.
 * Abstract class of all Quilt Components.
 * Enforces QUILT_NAME to be set and provides two convenience getters:
 *   - qSelf: returns the implementing component's theme based on its set QUILT_NAME
 *   - qGlobal: returns what is considered the global theme
 *   - QUILT_THEME_PROPS: returns an object that can be used as props to satisfy prop requirements for BaseQuiltComponents
 */
abstract class QuiltComponent<
  ComponentProps,
  ComponentTheme extends ComponentThemes,
  State = {}
> extends React.Component<
  QuiltComponentProps<ComponentProps, ComponentTheme>,
  State
> {
  static displayName: string;
  abstract QUILT_NAME: string;
  qWrapper: string = 'wrapper';

  get qSelf(): ComponentTheme {
    const globalDefaultThemeForSelf = get(
      this.props.qGlobal,
      `components[${this.QUILT_NAME}]`
    );
    const extendedThemeForSelf = this.props.qExtend;
    return mergeThemes<ComponentTheme>(
      globalDefaultThemeForSelf,
      extendedThemeForSelf
    );
  }

  get qGlobal(): ITheme {
    return this.props.qGlobal;
  }

  get qStyleProps(): StylePropsType<ComponentTheme> {
    return {
      qExtend: this.props.qExtend,
      qGlobal: this.props.qGlobal,
      qSelf: this.qSelf,
      qWrapper: this.qWrapper,
    };
  }
}

function quiltThemeProps(quiltContext: ITheme) {
  return {
    qGlobal: quiltContext,
  };
}

export {
  AnyProp,
  ComponentsRecord,
  createStyledComponents,
  ExtendedThemeType,
  QuiltComponent,
  QuiltComponentProps,
  quiltThemeProps,
  StylePropsType,
};
