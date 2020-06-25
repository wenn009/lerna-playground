import * as React from 'react';
import { connect } from '../../connect';
import { createStyledComponents, QuiltComponent } from '../QuiltComponent';
import { ContainerProps, ContainerTheme } from './interface';

const styledComponents = createStyledComponents<ContainerTheme>({
  Wrapper: ['div', 'wrapper'],
});

class Container extends QuiltComponent<ContainerProps, ContainerTheme> {
  QUILT_NAME: string = 'Container';

  render() {
    const { Wrapper } = styledComponents;
    return (
      <Wrapper {...this.props} ref={this.props.quiltRef} {...this.qStyleProps}>
        {this.props.children}
      </Wrapper>
    );
  }
}

const connectedContainer = connect<ContainerProps, ContainerTheme>(Container);

export { connectedContainer as Container };
