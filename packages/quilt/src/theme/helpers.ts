import {
  forEach,
  get,
  isPlainObject,
  keys,
  memoize,
  merge,
  mergeWith,
  isArray,
} from 'lodash';
import { ThemedStyledFunction } from 'styled-components';
import { ITheme, ThemeGetterType } from './structures';

type SingleLevelUtilType<S> = { [k in keyof S]: ThemeGetterType };
type DoubleLevelUtilType<S> = { [k in keyof S]: SingleLevelUtilType<S[k]> };

function themeGetter(path: string): ThemeGetterType {
  return ({ qGlobal }) => {
    return get(qGlobal, path);
  };
}

function createSingleLevelUtil<S extends object>(
  path: string,
  source: S
): SingleLevelUtilType<S> {
  const utils = {} as SingleLevelUtilType<S>;
  forEach(source, (_value, key) => {
    utils[key] = themeGetter(`${path}.${key}`);
  });
  return utils;
}

function createDoubleLevelUtil<S extends object>(
  path: string,
  source: S
): DoubleLevelUtilType<S> {
  const utils = {} as DoubleLevelUtilType<S>;
  forEach(source, (value, key) => {
    if (value instanceof Object) {
      utils[key] = {} as SingleLevelUtilType<S>;
      forEach(keys(value), (nestedKey) => {
        utils[key][nestedKey] = themeGetter(`${path}[${key}][${nestedKey}]`);
      });
    } else {
      utils[key] = themeGetter(`${path}.${key}`);
    }
  });
  return utils;
}

function createBreakpointsUtil<S extends object>(
  breakpoints: S
): SingleLevelUtilType<S> {
  return createSingleLevelUtil<S>('core.breakpoints', breakpoints);
}

function createColorUtil<S extends object>(colors: S): SingleLevelUtilType<S> {
  return createSingleLevelUtil<S>('core.colors', colors);
}

function createFontUtil<S extends object>(fonts: S): SingleLevelUtilType<S> {
  return createSingleLevelUtil<S>('core.fonts', fonts);
}

function createSizeUtil<S extends object>(sizes: S): SingleLevelUtilType<S> {
  return createSingleLevelUtil<S>('core.sizes', sizes);
}

function createSpaceUtil<S extends object>(spaces: S): SingleLevelUtilType<S> {
  return createSingleLevelUtil<S>('core.spaces', spaces);
}

function createPaletteUtil<S extends object>(
  palette: S
): DoubleLevelUtilType<S> {
  return createDoubleLevelUtil<S>('core.palette', palette);
}

const stylesFromThemeProps = memoize((path) => (props) =>
  get(props.qSelf, path)
);

const stylesFromShorthandThemeExtension = memoize((path: string) => (props) => {
  if (props.qWrapper === path && !isPlainObject(props.qExtend)) {
    return props.qExtend;
  }
});

function applyTheme(
  styledFunction: ThemedStyledFunction<keyof JSX.IntrinsicElements, {}>,
  path: string
) {
  return styledFunction`
    ${stylesFromThemeProps(path)}
    ${stylesFromShorthandThemeExtension(path)}
  `;
}

type RecursivePartial<T> = {
  [P in keyof T]?: T[P] extends Array<infer U>
    ? Array<RecursivePartial<U>>
    : T[P] extends object
    ? RecursivePartial<T[P]>
    : T[P];
};

function themeExtensionCustomizer(objValue, srcValue) {
  if (isArray(objValue)) {
    return objValue.concat(srcValue);
  }
}

function extendTheme(
  theme: ITheme,
  themeExtension: RecursivePartial<ITheme>
): ITheme {
  return mergeWith({}, theme, themeExtension, themeExtensionCustomizer);
}

function overrideTheme(
  theme: ITheme,
  themeOverride: RecursivePartial<ITheme>
): ITheme {
  return merge({}, theme, themeOverride);
}

export {
  applyTheme,
  createBreakpointsUtil,
  createColorUtil,
  createFontUtil,
  createPaletteUtil,
  createSizeUtil,
  createSpaceUtil,
  extendTheme,
  overrideTheme,
};
