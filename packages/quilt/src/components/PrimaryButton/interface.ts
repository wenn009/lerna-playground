import { StyledCss } from '../../theme/structures';
import { H6Theme } from '../H6/interface';
import { AnyProp } from '../QuiltComponent';

type PrimaryButtonProps = AnyProp &
  (
    | React.ButtonHTMLAttributes<HTMLButtonElement>
    | React.AnchorHTMLAttributes<HTMLAnchorElement>
  );

const defaultPrimaryButtonProps: Pick<PrimaryButtonProps, 'disabled'> = {
  disabled: false,
};

type PrimaryButtonTheme = {
  wrapper?: StyledCss;
  text?: H6Theme;
};

export { defaultPrimaryButtonProps, PrimaryButtonProps, PrimaryButtonTheme };
