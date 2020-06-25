import { select, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Icon } from '../../../dist';
import { iconOptions } from './constants';

storiesOf('Icon', module)
  .addDecorator(withKnobs)
  .add('Icon', () => <Icon type={select('type', iconOptions, 'Factual')} />);
