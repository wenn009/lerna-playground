import * as React from 'react';
import { connect } from '../../connect';
import { createStyledComponents, QuiltComponent } from '../QuiltComponent';
import {
  ContainerRowProps,
  ContainerRowTheme,
  defaultContainerRowProps,
} from './interface';

const styledComponents = createStyledComponents<ContainerRowTheme>({
  Wrapper: ['div', 'wrapper'],
});

class ContainerRow extends QuiltComponent<
  ContainerRowProps,
  ContainerRowTheme
> {
  static defaultProps = defaultContainerRowProps;
  QUILT_NAME: string = 'ContainerRow';

  render() {
    const { Wrapper } = styledComponents;
    return (
      <Wrapper
        {...this.props}
        data-no-gutters={this.props.noGutters}
        ref={this.props.quiltRef}
        {...this.qStyleProps}
      >
        {this.props.children}
      </Wrapper>
    );
  }
}

const connectedContainerRow = connect<ContainerRowProps, ContainerRowTheme>(
  ContainerRow
);

export { connectedContainerRow as ContainerRow };
