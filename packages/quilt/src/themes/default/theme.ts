import { ITheme as IDefaultTheme } from '../../theme/structures';
import { BodyTextTheme } from './BodyText';
import { breakpoints } from './breakpoints';
import { colors } from './colors';
import { ContainerTheme } from './Container';
import { ContainerColTheme } from './ContainerCol';
import { ContainerRowTheme } from './ContainerRow';
import { ContainerRowBreakTheme } from './ContainerRowBreak';
import { DescriptionTheme } from './Description';
import { fonts } from './fonts';
import { H1Theme } from './H1';
import { H2Theme } from './H2';
import { H3Theme } from './H3';
import { H4Theme } from './H4';
import { H5Theme } from './H5';
import { H6Theme } from './H6';
import { IconTheme } from './Icon';
import { LabelTheme } from './Label';
import { LegalTheme } from './Legal';
import { LinkTheme } from './Link';
import { palette } from './palette';
import { PrimaryButtonTheme } from './PrimaryButton';
import { SecondaryButtonTheme } from './SecondaryButton';
import { sizes } from './sizes';
import { spaces } from './spaces';
import { SubHeadingTheme } from './SubHeading';
import { SubTitleTheme } from './SubTitle';
import { TertiaryButtonTheme } from './TertiaryButton';
import { TextTheme } from './Text';

const theme: IDefaultTheme = {
  components: {
    BodyText: BodyTextTheme,
    Container: ContainerTheme,
    ContainerCol: ContainerColTheme,
    ContainerRow: ContainerRowTheme,
    ContainerRowBreak: ContainerRowBreakTheme,
    Description: DescriptionTheme,
    H1: H1Theme,
    H2: H2Theme,
    H3: H3Theme,
    H4: H4Theme,
    H5: H5Theme,
    H6: H6Theme,
    Icon: IconTheme,
    Label: LabelTheme,
    Legal: LegalTheme,
    Link: LinkTheme,
    PrimaryButton: PrimaryButtonTheme,
    SecondaryButton: SecondaryButtonTheme,
    SubHeading: SubHeadingTheme,
    SubTitle: SubTitleTheme,
    TertiaryButton: TertiaryButtonTheme,
    Text: TextTheme,
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
