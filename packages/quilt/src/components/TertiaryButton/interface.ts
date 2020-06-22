import { StyledCss } from '../../theme/structures';
import { H6Theme } from '../H6/interface';
import { AnyProp } from '../QuiltComponent';

type TertiaryButtonProps = AnyProp &
  (
    | React.ButtonHTMLAttributes<HTMLButtonElement>
    | React.AnchorHTMLAttributes<HTMLAnchorElement>
  );

const defaultTertiaryButtonProps: Pick<TertiaryButtonProps, 'disabled'> = {
  disabled: false,
};

type TertiaryButtonTheme = {
  wrapper?: StyledCss;
  text?: H6Theme;
};

export { defaultTertiaryButtonProps, TertiaryButtonProps, TertiaryButtonTheme };
