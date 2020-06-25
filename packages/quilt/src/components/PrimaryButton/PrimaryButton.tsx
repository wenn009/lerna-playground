import * as React from 'react';
import { connect } from '../../connect';
import { tagOrAnchor } from '../../utils';
import { H6 } from '../H6/H6';
import { createStyledComponents, QuiltComponent } from '../QuiltComponent';
import {
  defaultPrimaryButtonProps,
  PrimaryButtonProps,
  PrimaryButtonTheme,
} from './interface';

const styledComponents = createStyledComponents<PrimaryButtonTheme>({
  Wrapper: ['button', 'wrapper'],
});

/**
 * PrimaryButton
 *
 * Use a PrimaryButton to draw attention to a page’s highest priority action.
 *
 * In some cases, using a primary button is appropriate when you must choose
 * from a parallel set of objects (like a stack of media objects in search
 * results) or a settings page layout presents categories of options in
 * equivalent modular regions.
 *
 * https://medium.com/eightshapes-llc/buttons-in-design-systems-eac3acf7e23
 */
class PrimaryButton extends QuiltComponent<
  PrimaryButtonProps,
  PrimaryButtonTheme
> {
  public static defaultProps = defaultPrimaryButtonProps;
  QUILT_NAME: string = 'PrimaryButton';
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

const connectedPrimaryButton = connect<PrimaryButtonProps, PrimaryButtonTheme>(
  PrimaryButton
);

export { connectedPrimaryButton as PrimaryButton };
