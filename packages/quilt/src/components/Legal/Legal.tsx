import * as React from 'react';
import { connect } from '../../connect';
import { tagOrAnchor } from '../../utils';
import { createStyledComponents, QuiltComponent } from '../QuiltComponent';
import { LegalProps, LegalTheme } from './interface';

const styledComponents = createStyledComponents<LegalTheme>({
  Text: ['p', 'text'],
});

class Legal extends QuiltComponent<LegalProps, LegalTheme> {
  QUILT_NAME: string = 'Legal';
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

const connectedLegal = connect<LegalProps, LegalTheme>(Legal);

export { connectedLegal as Legal };
