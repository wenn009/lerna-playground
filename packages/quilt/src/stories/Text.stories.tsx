import { text, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import { BodyText, H1, H2, H3, H4, H5, H6 } from '../../dist';

// tslint:disable-next-line: no-default-export
export default { title: 'Text', decorators: [withKnobs] };

export const All = () => (
  <>
    <H1>{text('H1', 'Heading 1')}</H1>
    <H2>{text('H2', 'Heading 2')}</H2>
    <H3>{text('H3', 'Heading 3')}</H3>
    <H4>{text('H4', 'Heading 4')}</H4>
    <H5>{text('H5', 'Heading 5')}</H5>
    <H6>{text('H6', 'Heading 6')}</H6>
    <BodyText>{text('BodyText', 'BodyText')}</BodyText>
  </>
);
