import * as React from 'react';
import { connect } from '../../connect';
import { tagOrAnchor } from '../../utils';
import { createStyledComponents, QuiltComponent } from '../QuiltComponent';
import { SubTitleProps, SubTitleTheme } from './interface';

const styledComponents = createStyledComponents<SubTitleTheme>({
  Text: ['p', 'text'],
});

class SubTitle extends QuiltComponent<SubTitleProps, SubTitleTheme> {
  QUILT_NAME: string = 'SubTitle';
  qWrapper: string = 'text';

  render() {
    const tag = tagOrAnchor(this.props, 'p');
    const { Text } = styledComponents;
    return (
      <Text
        as={tag}
        {...this.props}
        ref={this.props.quiltRef}
        {...this.qStyleProps}
      />
    );
  }
}

const connectedSubTitle = connect<SubTitleProps, SubTitleTheme>(SubTitle);

export { connectedSubTitle as SubTitle };
