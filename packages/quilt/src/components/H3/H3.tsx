import * as React from 'react';
import { connect } from '../../connect';
import { tagOrAnchor } from '../../utils';
import { createStyledComponents, QuiltComponent } from '../QuiltComponent';
import { H3Props, H3Theme } from './interface';

const styledComponents = createStyledComponents<H3Theme>({
  Wrapper: ['h3', 'text'],
});

class H3 extends QuiltComponent<H3Props, H3Theme> {
  QUILT_NAME: string = 'H3';
  qWrapper: string = 'text';

  render() {
    const tag = tagOrAnchor(this.props, 'h3');
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

const connectedH3 = connect<H3Props, H3Theme>(H3);

export { connectedH3 as H3 };
