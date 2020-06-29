import { storiesOf } from '@storybook/react';
import React from 'react';
import { quilt } from '../../dist';
import {
  bg_greyscale_1,
  bg_greyscale_10,
  bg_greyscale_11,
  bg_greyscale_2,
  bg_greyscale_3,
  bg_greyscale_4,
  bg_greyscale_5,
  bg_greyscale_6,
  bg_greyscale_7,
  bg_greyscale_8,
  bg_greyscale_9,
  bg_primary,
  bg_primary_light,
  bg_secondary_scale_1,
  bg_secondary_scale_10,
  bg_secondary_scale_2,
  bg_secondary_scale_3,
  bg_secondary_scale_4,
  bg_secondary_scale_5,
  bg_secondary_scale_6,
  bg_secondary_scale_7,
  bg_secondary_scale_8,
  bg_secondary_scale_9,
  bg_tertiary_complement,
  bg_tertiary_dark,
  bg_tertiary_light,
  bg_utility_complement,
  bg_utility_dark,
  bg_utility_light,
  bg_utility_medium,
  bg_white,
  pd_xl,
} from '../../dist/themes/default/styles';

const ThemePrimarySwatch = quilt.div`
  ${[bg_primary, pd_xl]}
`;

const ThemePrimaryLightSwatch = quilt.div`
  ${[bg_primary_light, pd_xl]}
`;

const ThemeSecondary1Swatch = quilt.div`
  ${[bg_secondary_scale_1, pd_xl]}
`;

const ThemeSecondary2Swatch = quilt.div`
  ${[bg_secondary_scale_2, pd_xl]}
`;

const ThemeSecondary3Swatch = quilt.div`
  ${[bg_secondary_scale_3, pd_xl]}
`;

const ThemeSecondary4Swatch = quilt.div`
  ${[bg_secondary_scale_4, pd_xl]}
`;

const ThemeSecondary5Swatch = quilt.div`
  ${[bg_secondary_scale_5, pd_xl]}
`;

const ThemeSecondary6Swatch = quilt.div`
  ${[bg_secondary_scale_6, pd_xl]}
`;

const ThemeSecondary7Swatch = quilt.div`
  ${[bg_secondary_scale_7, pd_xl]}
`;

const ThemeSecondary8Swatch = quilt.div`
  ${[bg_secondary_scale_8, pd_xl]}
`;

const ThemeSecondary9Swatch = quilt.div`
  ${[bg_secondary_scale_9, pd_xl]}
`;

const ThemeSecondary10Swatch = quilt.div`
  ${[bg_secondary_scale_10, pd_xl]}
`;

const ThemeTertiaryLightSwatch = quilt.div`
  ${[bg_tertiary_light, pd_xl]}
`;

const ThemeTertiaryDarkSwatch = quilt.div`
  ${[bg_tertiary_dark, pd_xl]}
`;

const ThemeTertiaryComplementSwatch = quilt.div`
  ${[bg_tertiary_complement, pd_xl]}
`;

const ThemeUtilityLightSwatch = quilt.div`
  ${[bg_utility_light, pd_xl]}
`;

const ThemeUtilityMediumSwatch = quilt.div`
  ${[bg_utility_medium, pd_xl]}
`;

const ThemeUtilityDarkSwatch = quilt.div`
  ${[bg_utility_dark, pd_xl]}
`;

const ThemeUtilityComplementSwatch = quilt.div`
  ${[bg_utility_complement, pd_xl]}
`;

const ThemeWhiteSwatch = quilt.div`
  ${[bg_white, pd_xl]}
`;

const ThemeGreyscale1Swatch = quilt.div`
  ${[bg_greyscale_1, pd_xl]}
`;

const ThemeGreyscale2Swatch = quilt.div`
  ${[bg_greyscale_2, pd_xl]}
`;

const ThemeGreyscale3Swatch = quilt.div`
  ${[bg_greyscale_3, pd_xl]}
`;

const ThemeGreyscale4Swatch = quilt.div`
  ${[bg_greyscale_4, pd_xl]}
`;

const ThemeGreyscale5Swatch = quilt.div`
  ${[bg_greyscale_5, pd_xl]}
`;

const ThemeGreyscale6Swatch = quilt.div`
  ${[bg_greyscale_6, pd_xl]}
`;

const ThemeGreyscale7Swatch = quilt.div`
  ${[bg_greyscale_7, pd_xl]}
`;

const ThemeGreyscale8Swatch = quilt.div`
  ${[bg_greyscale_8, pd_xl]}
`;

const ThemeGreyscale9Swatch = quilt.div`
  ${[bg_greyscale_9, pd_xl]}
`;

const ThemeGreyscale10Swatch = quilt.div`
  ${[bg_greyscale_10, pd_xl]}
`;

const ThemeGreyscale11Swatch = quilt.div`
  ${[bg_greyscale_11, pd_xl]}
`;

storiesOf('Colors', module)
  .add('Primary', () => (
    <>
      <ThemePrimarySwatch />
      <ThemePrimaryLightSwatch />
    </>
  ))
  .add('Secondary scale', () => (
    <>
      <ThemeSecondary1Swatch />
      <ThemeSecondary2Swatch />
      <ThemeSecondary3Swatch />
      <ThemeSecondary4Swatch />
      <ThemeSecondary5Swatch />
      <ThemeSecondary6Swatch />
      <ThemeSecondary7Swatch />
      <ThemeSecondary8Swatch />
      <ThemeSecondary9Swatch />
      <ThemeSecondary10Swatch />
    </>
  ))
  .add('Tertiary', () => (
    <>
      <ThemeTertiaryLightSwatch />
      <ThemeTertiaryDarkSwatch />
      <ThemeTertiaryComplementSwatch />
    </>
  ))
  .add('Utility', () => (
    <>
      <ThemeUtilityLightSwatch />
      <ThemeUtilityMediumSwatch />
      <ThemeUtilityDarkSwatch />
      <ThemeUtilityComplementSwatch />
    </>
  ))
  .add('Greyscale', () => (
    <>
      <ThemeWhiteSwatch />
      <ThemeGreyscale1Swatch />
      <ThemeGreyscale2Swatch />
      <ThemeGreyscale3Swatch />
      <ThemeGreyscale4Swatch />
      <ThemeGreyscale5Swatch />
      <ThemeGreyscale6Swatch />
      <ThemeGreyscale7Swatch />
      <ThemeGreyscale8Swatch />
      <ThemeGreyscale9Swatch />
      <ThemeGreyscale10Swatch />
      <ThemeGreyscale11Swatch />
    </>
  ));
