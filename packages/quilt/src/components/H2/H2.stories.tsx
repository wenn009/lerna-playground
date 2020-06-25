import { text, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import { H2 } from '../../../dist';

// tslint:disable-next-line: no-default-export
export default { title: 'Text', decorators: [withKnobs] };

export const Header2 = () => <H2>{text('text', 'Heading 2')}</H2>;
