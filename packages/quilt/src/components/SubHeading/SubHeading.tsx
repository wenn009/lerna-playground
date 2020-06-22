import * as React from 'react';
import { connect } from '../../connect';
import { tagOrAnchor } from '../../utils';
import { createStyledComponents, QuiltComponent } from '../QuiltComponent';
import { SubHeadingProps, SubHeadingTheme } from './interface';

const styledComponents = createStyledComponents<SubHeadingTheme>({
  Text: ['p', 'text'],
});

class SubHeading extends QuiltComponent<SubHeadingProps, SubHeadingTheme> {
  QUILT_NAME: string = 'SubHeading';
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

const connectedSubHeading = connect<SubHeadingProps, SubHeadingTheme>(
  SubHeading
);

export { connectedSubHeading as SubHeading };
