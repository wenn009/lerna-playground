import { text, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import { H1 } from '../../../dist';

// tslint:disable-next-line: no-default-export
export default { title: 'Text', decorators: [withKnobs] };

export const Header1 = () => <H1>{text('text', 'Heading 1')}</H1>;
