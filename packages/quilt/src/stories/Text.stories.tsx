import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import {
  BodyText,
  Description,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Label,
  Legal,
  SubHeading,
  SubTitle,
} from '../../dist';

storiesOf('Text', module)
  .addDecorator(withKnobs)
  .add('All', () => (
    <>
      <H1>{text('H1', 'Heading 1')}</H1>
      <H2>{text('H2', 'Heading 2')}</H2>
      <H3>{text('H3', 'Heading 3')}</H3>
      <H4>{text('H4', 'Heading 4')}</H4>
      <H5>{text('H5', 'Heading 5')}</H5>
      <H6>{text('H6', 'Heading 6')}</H6>
      <SubTitle>{text('SubTitle', 'SubTitle')}</SubTitle>
      <BodyText>{text('BodyText', 'BodyText')}</BodyText>
      <SubHeading>{text('SubHeading', 'SubHeading')}</SubHeading>
      <Description>{text('Description', 'Description')}</Description>
      <Label>{text('Label', 'Label')}</Label>
      <Legal>{text('Legal', 'Legal')}</Legal>
    </>
  ))
  .add('H1', () => <H1>{text('text', 'Heading 1')}</H1>)
  .add('H2', () => <H2>{text('text', 'Heading 2')}</H2>)
  .add('H3', () => <H3>{text('text', 'Heading 3')}</H3>)
  .add('H4', () => <H4>{text('text', 'Heading 4')}</H4>)
  .add('H5', () => <H5>{text('text', 'Heading 5')}</H5>)
  .add('H6', () => <H6>{text('text', 'Heading 6')}</H6>)
  .add('BodyText', () => <BodyText>{text('text', 'Body 1')}</BodyText>)
  .add('Description', () => <Description>{text('text', 'Body 2')}</Description>)
  .add('Label', () => <Label>{text('text', 'Label')}</Label>)
  .add('Legal', () => <Legal>{text('text', 'Legal')}</Legal>)
  .add('SubHeading', () => (
    <SubHeading>{text('text', 'SubHeading')}</SubHeading>
  ))
  .add('SubTitle', () => <SubTitle>{text('text', 'SubTitle')}</SubTitle>);
