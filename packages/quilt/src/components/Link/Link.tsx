import { isEmpty, isString } from 'lodash';
import * as React from 'react';
import { connect } from '../../connect';
import { H6 } from '../H6/H6';
import { createStyledComponents, QuiltComponent } from '../QuiltComponent';
import { LinkProps, LinkTheme } from './interface';

const styledComponents = createStyledComponents<LinkTheme>({
  Wrapper: ['button', 'wrapper'],
});

class Link extends QuiltComponent<LinkProps, LinkTheme> {
  QUILT_NAME: string = 'Link';
  qWrapper: string = 'button';

  render() {
    const tag =
      isString(this.props.href) && !isEmpty(this.props.href) ? 'a' : 'button';
    const { Wrapper } = styledComponents;
    return (
      <Wrapper
        as={tag}
        {...this.props}
        ref={this.props.quiltRef}
        {...this.qStyleProps}
      >
        <H6 qExtend={this.qSelf.text}>{this.props.children}</H6>
      </Wrapper>
    );
  }
}

const connectedLink = connect<LinkProps, LinkTheme>(Link);

export { connectedLink as Link };
