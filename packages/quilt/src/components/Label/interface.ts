import * as React from 'react';
import { StyledCss } from '../../theme/structures';
import { AnyProp } from '../QuiltComponent';

type LabelProps = AnyProp & React.HTMLAttributes<HTMLParagraphElement>;

type LabelTheme = {
  text?: StyledCss;
};

export { LabelProps, LabelTheme };
