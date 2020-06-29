import { text, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import { H5 } from '../../../dist';

export const Header5 = () => <H5>{text('text', 'Heading 5')}</H5>;

// tslint:disable-next-line: no-default-export
export default { title: 'Text', decorators: [withKnobs] };
