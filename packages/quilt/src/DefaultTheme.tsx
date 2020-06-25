import * as React from 'react';
import { Provider } from './context';
import { theme as defaultTheme } from './themes/default/theme';

class DefaultTheme extends React.Component {
  render() {
    return (
      <>
        <Provider value={defaultTheme}>{this.props.children}</Provider>
      </>
    );
  }
}

export { DefaultTheme };
