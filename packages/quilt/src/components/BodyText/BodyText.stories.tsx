import { text, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import { BodyText } from '../../../dist';

// tslint:disable-next-line: no-default-export
export default { title: 'Text', decorators: [withKnobs] };

export const Body = () => <BodyText>{text('text', 'BodyText')}</BodyText>;
