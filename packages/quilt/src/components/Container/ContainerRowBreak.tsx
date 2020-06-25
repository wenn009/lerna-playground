import * as React from 'react';
import { connect } from '../../connect';
import { createStyledComponents, QuiltComponent } from '../QuiltComponent';
import { ContainerRowBreakProps, ContainerRowBreakTheme } from './interface';

const styledComponents = createStyledComponents<ContainerRowBreakTheme>({
  Wrapper: ['div', 'wrapper'],
});

class ContainerRowBreak extends QuiltComponent<
  ContainerRowBreakProps,
  ContainerRowBreakTheme
> {
  QUILT_NAME: string = 'ContainerRowBreak';

  render() {
    const { Wrapper } = styledComponents;
    return (
      <Wrapper {...this.props} ref={this.props.quiltRef} {...this.qStyleProps}>
        {this.props.children}
      </Wrapper>
    );
  }
}

const connectedContainerRowBreak = connect<
  ContainerRowBreakProps,
  ContainerRowBreakTheme
>(ContainerRowBreak);

export { connectedContainerRowBreak as ContainerRowBreak };
