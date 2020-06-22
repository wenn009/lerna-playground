import * as React from 'react';
import { StyledCss } from '../../theme/structures';
import { AnyProp } from '../QuiltComponent';

type TextTheme = {
  text?: StyledCss;
};

type TextProps = AnyProp & React.HTMLAttributes<HTMLParagraphElement>;

export { TextProps, TextTheme };
