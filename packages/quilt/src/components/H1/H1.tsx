import * as React from 'react';
import { connect } from '../../connect';
import { tagOrAnchor } from '../../utils';
import { createStyledComponents, QuiltComponent } from '../QuiltComponent';
import { H1Props, H1Theme } from './interface';

const styledComponents = createStyledComponents<H1Theme>({
  Wrapper: ['h1', 'text'],
});

class H1 extends QuiltComponent<H1Props, H1Theme> {
  QUILT_NAME: string = 'H1';
  qWrapper: string = 'text';

  render() {
    const tag = tagOrAnchor(this.props, 'h1');
    const { Wrapper } = styledComponents;
    return (
      <Wrapper as={tag} ref={this.props.quiltRef} {...this.qStyleProps}>
        {this.props.children}
      </Wrapper>
    );
  }
}

const connectedH1 = connect<H1Props, H1Theme>(H1);

export { connectedH1 as H1 };
