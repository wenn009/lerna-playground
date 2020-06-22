import { StyledCss } from '../../theme/structures';
import { H6Theme } from '../H6/interface';
import { AnyProp } from '../QuiltComponent';

type SecondaryButtonProps = AnyProp &
  (
    | React.ButtonHTMLAttributes<HTMLButtonElement>
    | React.AnchorHTMLAttributes<HTMLAnchorElement>
  );

const defaultSecondaryButtonProps: Pick<SecondaryButtonProps, 'disabled'> = {
  disabled: false,
};

type SecondaryButtonTheme = {
  wrapper?: StyledCss;
  text?: H6Theme;
};

export {
  defaultSecondaryButtonProps,
  SecondaryButtonProps,
  SecondaryButtonTheme,
};
