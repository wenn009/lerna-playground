import { includes, isBoolean } from 'lodash';
import * as React from 'react';
import { connect } from '../../connect';
import { createStyledComponents, QuiltComponent } from '../QuiltComponent';
import {
  ContainerColProps,
  ContainerColTheme,
  defaultContainerColProps,
} from './interface';

const columnSizesUpTo11: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const columnSizesUpTo12: number[] = [...columnSizesUpTo11, 12];
const columnOrders: Array<string | number> = [
  'first',
  'last',
  ...columnSizesUpTo12,
];

function dataColAttributes(props: ContainerColProps) {
  return {
    ...(isBoolean(props.auto) ? { 'data-auto': props.auto } : {}),
    ...(isBoolean(props.flex) ? { 'data-flex': props.flex } : {}),
    ...(includes(columnSizesUpTo12, props.size)
      ? { 'data-size': props.size }
      : {}),
    ...(includes(columnOrders, props.order)
      ? { 'data-order': props.order }
      : {}),
    ...(includes(columnSizesUpTo11, props.offset)
      ? { 'data-offset': props.offset }
      : {}),
  };
}

const styledComponents = createStyledComponents<ContainerColTheme>({
  Wrapper: ['div', 'wrapper'],
});

class ContainerCol extends QuiltComponent<
  ContainerColProps,
  ContainerColTheme
> {
  static defaultProps = defaultContainerColProps;
  QUILT_NAME: string = 'ContainerCol';

  render() {
    const { Wrapper } = styledComponents;
    return (
      <Wrapper
        {...this.props}
        {...dataColAttributes(this.props)}
        ref={this.props.quiltRef}
        {...this.qStyleProps}
      >
        {this.props.children}
      </Wrapper>
    );
  }
}

const connectedContainerCol = connect<ContainerColProps, ContainerColTheme>(
  ContainerCol
);

export { connectedContainerCol as ContainerCol };
