import { select, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import { Icon } from '../../../../dist';
import { iconOptions } from './constants';

export const Icons = () => (
  <Icon type={select('type', iconOptions, 'Factual')} />
);

// tslint:disable-next-line: no-default-export
export default { title: 'Icon', decorators: [withKnobs] };
