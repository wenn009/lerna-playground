import * as React from 'react';
import { theme } from './themes/default/theme';

const QuiltContext = React.createContext(theme);
const { Provider, Consumer } = QuiltContext;

export { Consumer, Provider, QuiltContext };
