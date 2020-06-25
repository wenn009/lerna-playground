import { StyledCss } from '../../theme/structures';
import { H6Theme } from '../H6/interface';
import { AnyProp } from '../QuiltComponent';

type LinkProps = AnyProp &
  (
    | React.ButtonHTMLAttributes<HTMLButtonElement>
    | React.AnchorHTMLAttributes<HTMLAnchorElement>
  );

type LinkTheme = {
  wrapper?: StyledCss;
  text?: H6Theme;
};

export { LinkProps, LinkTheme };
