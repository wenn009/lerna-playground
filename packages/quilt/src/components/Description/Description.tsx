import * as React from 'react';
import { connect } from '../../connect';
import { tagOrAnchor } from '../../utils';
import { createStyledComponents, QuiltComponent } from '../QuiltComponent';
import { DescriptionProps, DescriptionTheme } from './interface';

const styledComponents = createStyledComponents<DescriptionTheme>({
  Text: ['p', 'text'],
});

class Description extends QuiltComponent<DescriptionProps, DescriptionTheme> {
  QUILT_NAME: string = 'Description';
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

const connectedDescription = connect<DescriptionProps, DescriptionTheme>(
  Description
);

export { connectedDescription as Description };
