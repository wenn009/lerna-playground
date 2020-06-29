import { boolean, select, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import {
  BodyText,
  Container,
  ContainerCol,
  ContainerRow,
  css,
} from '../../../../dist';
import {
  bg_secondary,
  bg_secondary_complement,
  border_1,
  border_black,
  border_solid,
  pd_bottom_sm,
  pd_bottom_xs,
  pd_top_sm,
  pd_top_xs,
} from '../../../../dist/themes/default/styles';

const DemoContainer = (props) => {
  return <Container>{props.children}</Container>;
};

const DemoContainerRow = (props) => {
  return (
    <ContainerRow noGutters={boolean('noGutters (all rows)', false)}>
      {props.children}
    </ContainerRow>
  );
};

const DemoContainerCol = (props) => {
  return (
    <ContainerCol
      {...props}
      qExtend={css`
        ${[
          bg_secondary_complement,
          border_1,
          border_black,
          border_solid,
          pd_top_xs,
          pd_bottom_xs,
        ]}
      `}
    >
      {props.children}
    </ContainerCol>
  );
};

const DemoLabel = (props) => {
  return (
    <BodyText {...props} qExtend={[bg_secondary, pd_top_sm, pd_bottom_sm]}>
      {props.children}
    </BodyText>
  );
};

function createColumnKnobs(label: string) {
  const groupId = label;
  return {
    auto: boolean(`auto (${label})`, false, groupId),
    offset: select(
      `offset (${label})`,
      {
        undefined,
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
        10: 10,
        11: 11,
      },
      undefined,
      groupId
    ),
    order: select(
      `order (${label})`,
      {
        undefined,
        first: 'first',
        last: 'last',
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
        10: 10,
        11: 11,
        12: 12,
      },
      undefined,
      groupId
    ),
    size: select(
      `size (${label})`,
      {
        undefined,
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
        10: 10,
        11: 11,
        12: 12,
      },
      undefined,
      groupId
    ),
  };
}

export const Grid = () => (
  <DemoContainer>
    <DemoContainerRow>
      <DemoContainerCol
        {...createColumnKnobs('1/1')}
        flex={boolean('flex (1/1)', false, '1/1')}
      >
        <DemoLabel>{`1 of 1`}</DemoLabel>
      </DemoContainerCol>
    </DemoContainerRow>
    <DemoContainerRow>
      <DemoContainerCol
        {...createColumnKnobs('1/2')}
        flex={boolean('flex (1/2)', false, '1/2')}
      >
        <DemoLabel>1 of 2</DemoLabel>
      </DemoContainerCol>
      <DemoContainerCol
        {...createColumnKnobs('2/2')}
        flex={boolean('flex (2/2)', false, '2/2')}
      >
        <DemoLabel>2 of 2</DemoLabel>
      </DemoContainerCol>
    </DemoContainerRow>
    <DemoContainerRow>
      <DemoContainerCol
        {...createColumnKnobs('1/3')}
        flex={boolean('flex (1/3)', false, '1/3')}
      >
        <DemoLabel>1 of 3</DemoLabel>
      </DemoContainerCol>
      <DemoContainerCol
        {...createColumnKnobs('2/3')}
        flex={boolean('flex (2/3)', false, '2/3')}
      >
        <DemoLabel>2 of 3</DemoLabel>
      </DemoContainerCol>
      <DemoContainerCol
        {...createColumnKnobs('3/3')}
        flex={boolean('flex (3/3)', false, '3/3')}
      >
        <DemoLabel>3 of 3</DemoLabel>
      </DemoContainerCol>
    </DemoContainerRow>
    <DemoContainerRow>
      <DemoContainerCol
        {...createColumnKnobs('1/4')}
        flex={boolean('flex (1/4)', false, '1/4')}
      >
        <DemoLabel>1 of 4</DemoLabel>
      </DemoContainerCol>
      <DemoContainerCol
        {...createColumnKnobs('2/4')}
        flex={boolean('flex (2/4)', false, '2/4')}
      >
        <DemoLabel>2 of 4</DemoLabel>
      </DemoContainerCol>
      <DemoContainerCol
        {...createColumnKnobs('3/4')}
        flex={boolean('flex (3/4)', false, '3/4')}
      >
        <DemoLabel>3 of 4</DemoLabel>
      </DemoContainerCol>
      <DemoContainerCol
        {...createColumnKnobs('4/4')}
        flex={boolean('flex (4/4)', false, '4/4')}
      >
        <DemoLabel>4 of 4</DemoLabel>
      </DemoContainerCol>
    </DemoContainerRow>
    <DemoContainerRow>
      <DemoContainerCol
        {...createColumnKnobs('1/5')}
        flex={boolean('flex (1/5)', false, '1/5')}
      >
        <DemoLabel>1 of 5</DemoLabel>
      </DemoContainerCol>
      <DemoContainerCol
        {...createColumnKnobs('2/5')}
        flex={boolean('flex (2/5)', false, '2/5')}
      >
        <DemoLabel>2 of 5</DemoLabel>
      </DemoContainerCol>
      <DemoContainerCol
        {...createColumnKnobs('3/5')}
        flex={boolean('flex (3/5)', false, '3/5')}
      >
        <DemoLabel>3 of 5</DemoLabel>
      </DemoContainerCol>
      <DemoContainerCol
        {...createColumnKnobs('4/5')}
        flex={boolean('flex (4/5)', false, '4/5')}
      >
        <DemoLabel>4 of 5</DemoLabel>
      </DemoContainerCol>
      <DemoContainerCol
        {...createColumnKnobs('5/5')}
        flex={boolean('flex (5/5)', false, '5/5')}
      >
        <DemoLabel>5 of 5</DemoLabel>
      </DemoContainerCol>
    </DemoContainerRow>
    <DemoContainerRow>
      <DemoContainerCol
        {...createColumnKnobs('1/6')}
        flex={boolean('flex (1/6)', false, '1/6')}
      >
        <DemoLabel>1 of 6</DemoLabel>
      </DemoContainerCol>
      <DemoContainerCol
        {...createColumnKnobs('2/6')}
        flex={boolean('flex (2/6)', false, '2/6')}
      >
        <DemoLabel>2 of 6</DemoLabel>
      </DemoContainerCol>
      <DemoContainerCol
        {...createColumnKnobs('3/6')}
        flex={boolean('flex (3/6)', false, '3/6')}
      >
        <DemoLabel>3 of 6</DemoLabel>
      </DemoContainerCol>
      <DemoContainerCol
        {...createColumnKnobs('4/6')}
        flex={boolean('flex (4/6)', false, '4/6')}
      >
        <DemoLabel>4 of 6</DemoLabel>
      </DemoContainerCol>
      <DemoContainerCol
        {...createColumnKnobs('5/6')}
        flex={boolean('flex (5/6)', false, '5/6')}
      >
        <DemoLabel>5 of 6</DemoLabel>
      </DemoContainerCol>
      <DemoContainerCol
        {...createColumnKnobs('6/6')}
        flex={boolean('flex (6/6)', false, '6/6')}
      >
        <DemoLabel>6 of 6</DemoLabel>
      </DemoContainerCol>
    </DemoContainerRow>
  </DemoContainer>
);

// tslint:disable-next-line: no-default-export
export default { title: 'Grid', decorators: [withKnobs] };
