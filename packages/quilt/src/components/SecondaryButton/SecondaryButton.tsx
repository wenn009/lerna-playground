import * as React from 'react';
import { connect } from '../../connect';
import { tagOrAnchor } from '../../utils';
import { H6 } from '../H6/H6';
import { createStyledComponents, QuiltComponent } from '../QuiltComponent';
import {
  defaultSecondaryButtonProps,
  SecondaryButtonProps,
  SecondaryButtonTheme,
} from './interface';

const styledComponents = createStyledComponents<SecondaryButtonTheme>({
  Wrapper: ['button', 'wrapper'],
});

/**
 * SecondaryButton
 *
 * Use a SecondaryButton to signify secondary actions on a page.
 *
 */
class SecondaryButton extends QuiltComponent<
  SecondaryButtonProps,
  SecondaryButtonTheme
> {
  public static defaultProps = defaultSecondaryButtonProps;
  QUILT_NAME: string = 'SecondaryButton';
  qWrapper: string = 'button';

  render() {
    const tag = tagOrAnchor(this.props, 'button');
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

const connectedSecondaryButton = connect<
  SecondaryButtonProps,
  SecondaryButtonTheme
>(SecondaryButton);

export { connectedSecondaryButton as SecondaryButton };
