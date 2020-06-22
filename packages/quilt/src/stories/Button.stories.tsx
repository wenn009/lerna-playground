import { action } from '@storybook/addon-actions';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import {
  css,
  Link,
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
} from '../../dist';
import { colors, palette } from '../../dist/themes/default/utils';

storiesOf('Buttons', module)
  .addDecorator(withKnobs)
  .add('Primary', () => (
    <PrimaryButton
      onClick={action('onClick')}
      disabled={boolean('disabled', false)}
      href={text('href', '')}
    >
      {text('text', 'Primary Button')}
    </PrimaryButton>
  ))
  .add('Secondary', () => (
    <SecondaryButton
      onClick={action('onClick')}
      disabled={boolean('disabled', false)}
      href={text('href', '')}
    >
      {text('text', 'Secondary Button')}
    </SecondaryButton>
  ))
  .add('Tertiary', () => (
    <TertiaryButton
      onClick={action('onClick')}
      disabled={boolean('disabled', false)}
      href={text('href', '')}
    >
      {text('text', 'Tertiary Button')}
    </TertiaryButton>
  ))
  .add('Link', () => (
    <Link
      onClick={action('onClick')}
      disabled={boolean('disabled', false)}
      href={text('href', '')}
    >
      {text('text', 'Link')}
    </Link>
  ))
  .add('Custom', () => (
    <PrimaryButton
      onClick={action('onClick')}
      disabled={boolean('disabled', false)}
      href={text('href', '')}
      qExtend={{
        wrapper: css`
          background: linear-gradient(
            to right,
            ${palette.primary.main} 0%,
            ${palette.primary.light} 80%,
            ${palette.primary.light} 100%
          );

          &:hover {
            background: linear-gradient(
              to right,
              ${palette.primary.main} 0%,
              ${palette.primary.light} 20%,
              ${palette.primary.light} 100%
            );
          }

          &:active {
            background: ${colors.mirage};
          }

          &:disabled {
            background: ${palette.primary.light};
            border: solid 1px ${palette.primary.light};
          }
        `,
      }}
    >
      {text('text', 'Primary Button')}
    </PrimaryButton>
  ));
