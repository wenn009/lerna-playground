import { text, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import { H6 } from '../../../dist';

// tslint:disable-next-line: no-default-export
export default { title: 'Text', decorators: [withKnobs] };

export const Header6 = () => <H6>{text('text', 'Heading 6')}</H6>;
