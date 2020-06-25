import { text, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import { H3 } from '../../../dist';

// tslint:disable-next-line: no-default-export
export default { title: 'Text', decorators: [withKnobs] };

export const Header3 = () => <H3>{text('text', 'Heading 3')}</H3>;
