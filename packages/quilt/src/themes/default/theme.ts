import { ITheme as IDefaultTheme } from '../../theme/structures';
import { BodyTextTheme } from './BodyText';
import { breakpoints } from './breakpoints';
import { colors } from './colors';
import { ContainerTheme } from './Container';
import { ContainerColTheme } from './ContainerCol';
import { ContainerRowTheme } from './ContainerRow';
import { ContainerRowBreakTheme } from './ContainerRowBreak';
import { fonts } from './fonts';
import { H1Theme } from './H1';
import { H2Theme } from './H2';
import { H3Theme } from './H3';
import { H4Theme } from './H4';
import { H5Theme } from './H5';
import { H6Theme } from './H6';
import { IconTheme } from './Icon';
import { LinkTheme } from './Link';
import { palette } from './palette';
import { PrimaryButtonTheme } from './PrimaryButton';
import { SecondaryButtonTheme } from './SecondaryButton';
import { sizes } from './sizes';
import { spaces } from './spaces';
import { TertiaryButtonTheme } from './TertiaryButton';

const theme: IDefaultTheme = {
  components: {
    BodyText: BodyTextTheme,
    Container: ContainerTheme,
    ContainerCol: ContainerColTheme,
    ContainerRow: ContainerRowTheme,
    ContainerRowBreak: ContainerRowBreakTheme,
    H1: H1Theme,
    H2: H2Theme,
    H3: H3Theme,
    H4: H4Theme,
    H5: H5Theme,
    H6: H6Theme,
    Icon: IconTheme,
    Link: LinkTheme,
    PrimaryButton: PrimaryButtonTheme,
    SecondaryButton: SecondaryButtonTheme,
    TertiaryButton: TertiaryButtonTheme,
  },
  core: {
    breakpoints,
    colors,
    fonts,
    palette,
    sizes,
    spaces,
  },
};

export { theme };
