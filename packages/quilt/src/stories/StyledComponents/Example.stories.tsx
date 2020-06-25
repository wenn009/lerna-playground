import { storiesOf } from '@storybook/react';
import React from 'react';
import { quilt } from '../../../dist';
import {
  bg_primary,
  bg_primary_light,
  bg_secondary,
  bg_secondary_complement,
  bg_secondary_light,
  pd_xxl,
} from '../../../dist/themes/default/styles';

const ThemePrimarySwatch = quilt.div`
  ${[bg_primary, pd_xxl]}
`;
const ThemePrimaryLightSwatch = quilt.div`
  ${[bg_primary_light, pd_xxl]}
`;
const ThemeSecondarySwatch = quilt.div`
  ${[bg_secondary, pd_xxl]}
`;
const ThemeSecondaryLightSwatch = quilt.div`
  ${[bg_secondary_light, pd_xxl]}
`;
const ThemeSecondaryComplementSwatch = quilt.div`
  ${[bg_secondary_complement, pd_xxl]}
`;

storiesOf('StyledComponents', module).add('Examples', () => (
  <>
    <ThemePrimarySwatch />
    <ThemePrimaryLightSwatch />
    <ThemeSecondarySwatch />
    <ThemeSecondaryLightSwatch />
    <ThemeSecondaryComplementSwatch />
  </>
));
