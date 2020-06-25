import * as React from 'react';
import { connect } from '../../connect';
import { tagOrAnchor } from '../../utils';
import { createStyledComponents, QuiltComponent } from '../QuiltComponent';
import { H2Props, H2Theme } from './interface';

const styledComponents = createStyledComponents<H2Theme>({
  Wrapper: ['h2', 'text'],
});

class H2 extends QuiltComponent<H2Props, H2Theme> {
  QUILT_NAME: string = 'H2';
  qWrapper: string = 'text';

  render() {
    const tag = tagOrAnchor(this.props, 'h2');
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

const connectedH2 = connect<H2Props, H2Theme>(H2);

export { connectedH2 as H2 };
