import { BodyTextTheme } from '../../components/BodyText/BodyText.theme';
import { ContainerTheme } from '../../components/Container/Container.theme';
import { ContainerColTheme } from '../../components/Container/ContainerCol.theme';
import { ContainerRowTheme } from '../../components/Container/ContainerRow.theme';
import { ContainerRowBreakTheme } from '../../components/Container/ContainerRowBreak.theme';
import { H1Theme } from '../../components/H1/H1.theme';
import { H2Theme } from '../../components/H2/H2.theme';
import { H3Theme } from '../../components/H3/H3.theme';
import { H4Theme } from '../../components/H4/H4.theme';
import { H5Theme } from '../../components/H5/H5.theme';
import { H6Theme } from '../../components/H6/H6.theme';
import { IconTheme } from '../../components/Icon/Icon.theme';
import { LinkTheme } from '../../components/Link/Link.theme';
import { PrimaryButtonTheme } from '../../components/PrimaryButton/PrimaryButton.theme';
import { SecondaryButtonTheme } from '../../components/SecondaryButton/SecondaryButton.theme';
import { TertiaryButtonTheme } from '../../components/TertiaryButton/TertiaryButton.theme';
import { ITheme as IDefaultTheme } from '../../theme/structures';
import { breakpoints } from './breakpoints';
import { colors } from './colors';
import { fonts } from './fonts';
import { palette } from './palette';
import { scale } from './scale';
import { sizes } from './sizes';
import { spaces } from './spaces';

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
    scale,
    sizes,
    spaces,
  },
};

export { theme };
