import * as React from 'react';
import { connect } from '../../connect';
import { tagOrAnchor } from '../../utils';
import { createStyledComponents, QuiltComponent } from '../QuiltComponent';
import { H5Props, H5Theme } from './interface';

const styledComponents = createStyledComponents<H5Theme>({
  Wrapper: ['h5', 'text'],
});

class H5 extends QuiltComponent<H5Props, H5Theme> {
  QUILT_NAME: string = 'H5';
  qWrapper: string = 'text';

  render() {
    const tag = tagOrAnchor(this.props, 'h5');
    const { Wrapper } = styledComponents;
    return (
      <Wrapper
        as={tag}
        {...this.props}
        ref={this.props.quiltRef}
        {...this.qStyleProps}
      >
        {this.props.children}
      </Wrapper>
    );
  }
}

const connectedH5 = connect<H5Props, H5Theme>(H5);

export { connectedH5 as H5 };
