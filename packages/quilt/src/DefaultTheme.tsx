import * as React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Provider } from './context';
import { theme as defaultTheme } from './themes/default/theme';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap');
`;

class DefaultTheme extends React.Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Provider value={defaultTheme}>{this.props.children}</Provider>
      </>
    );
  }
}

export { DefaultTheme };
