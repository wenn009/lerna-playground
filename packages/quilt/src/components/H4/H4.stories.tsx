import { text, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import { H4 } from '../../../dist';

// tslint:disable-next-line: no-default-export
export default { title: 'Text', decorators: [withKnobs] };

export const Header4 = () => <H4>{text('text', 'Heading 4')}</H4>;
