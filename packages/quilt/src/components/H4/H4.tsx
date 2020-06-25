import * as React from 'react';
import { connect } from '../../connect';
import { tagOrAnchor } from '../../utils';
import { createStyledComponents, QuiltComponent } from '../QuiltComponent';
import { H4Props, H4Theme } from './interface';

const styledComponents = createStyledComponents<H4Theme>({
  Wrapper: ['h4', 'text'],
});

class H4 extends QuiltComponent<H4Props, H4Theme> {
  QUILT_NAME: string = 'H4';
  qWrapper: string = 'text';

  render() {
    const tag = tagOrAnchor(this.props, 'h4');
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

const connectedH4 = connect<H4Props, H4Theme>(H4);

export { connectedH4 as H4 };
