import * as React from 'react';
import { connect } from '../../connect';
import { tagOrAnchor } from '../../utils';
import { createStyledComponents, QuiltComponent } from '../QuiltComponent';
import { BodyTextProps, BodyTextTheme } from './interface';

const styledComponents = createStyledComponents<BodyTextTheme>({
  Text: ['p', 'text'],
});

class BodyText extends QuiltComponent<BodyTextProps, BodyTextTheme> {
  QUILT_NAME: string = 'BodyText';
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

const connectedBodyText = connect<BodyTextProps, BodyTextTheme>(BodyText);

export { connectedBodyText as BodyText };
