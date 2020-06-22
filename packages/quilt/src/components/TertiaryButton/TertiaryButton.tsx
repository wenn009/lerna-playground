import * as React from 'react';
import { connect } from '../../connect';
import { tagOrAnchor } from '../../utils';
import { H6 } from '../H6/H6';
import { createStyledComponents, QuiltComponent } from '../QuiltComponent';
import {
  defaultTertiaryButtonProps,
  TertiaryButtonProps,
  TertiaryButtonTheme,
} from './interface';

const styledComponents = createStyledComponents<TertiaryButtonTheme>({
  Wrapper: ['button', 'wrapper'],
});

class TertiaryButton extends QuiltComponent<
  TertiaryButtonProps,
  TertiaryButtonTheme
> {
  public static defaultProps = defaultTertiaryButtonProps;
  QUILT_NAME: string = 'TertiaryButton';
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

const connectedTertiaryButton = connect<
  TertiaryButtonProps,
  TertiaryButtonTheme
>(TertiaryButton);

export { connectedTertiaryButton as TertiaryButton };
