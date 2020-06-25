import * as React from 'react';
import { connect } from '../../connect';
import { tagOrAnchor } from '../../utils';
import { createStyledComponents, QuiltComponent } from '../QuiltComponent';
import { H6Props, H6Theme } from './interface';

const styledComponents = createStyledComponents<H6Theme>({
  Wrapper: ['h6', 'text'],
});

class H6 extends QuiltComponent<H6Props, H6Theme> {
  QUILT_NAME: string = 'H6';
  qWrapper: string = 'text';

  render() {
    const tag = tagOrAnchor(this.props, 'h6');
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

const connectedH6 = connect<H6Props, H6Theme>(H6);

export { connectedH6 as H6 };
