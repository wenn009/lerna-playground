import * as React from 'react';
import { connect } from '../../connect';
import { tagOrAnchor } from '../../utils';
import { createStyledComponents, QuiltComponent } from '../QuiltComponent';
import { LabelProps, LabelTheme } from './interface';

const styledComponents = createStyledComponents<LabelTheme>({
  Text: ['p', 'text'],
});

class Label extends QuiltComponent<LabelProps, LabelTheme> {
  QUILT_NAME: string = 'Label';
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

const connectedLabel = connect<LabelProps, LabelTheme>(Label);

export { connectedLabel as Label };
