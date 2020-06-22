import * as React from 'react';
import { connect } from '../../connect';
import { createStyledComponents, QuiltComponent } from '../QuiltComponent';
import { TextProps, TextTheme } from './interface';

const styledComponents = createStyledComponents<TextTheme>({
  TextContent: ['p', 'text'],
});

class Text extends QuiltComponent<TextProps, TextTheme> {
  QUILT_NAME: string = 'Text';
  qWrapper: string = 'text';

  render() {
    const { TextContent } = styledComponents;
    return (
      <TextContent
        {...this.props}
        ref={this.props.quiltRef}
        {...this.qStyleProps}
      />
    );
  }
}

const connectedText = connect<TextProps, TextTheme>(Text);

export { connectedText as Text };
