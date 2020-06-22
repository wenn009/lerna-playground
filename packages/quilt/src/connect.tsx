import * as React from 'react';
import {
  AnyProp,
  QuiltComponent,
  QuiltComponentProps,
} from './components/QuiltComponent';
import { Consumer } from './context';
import { ComponentThemes, ITheme } from './theme/structures';

type connectedProps<
  Props extends AnyProp,
  Theme extends ComponentThemes
> = Omit<QuiltComponentProps<Props, Theme>, 'qGlobal'>;

function connect<Props, Theme extends ComponentThemes>(
  Component: typeof QuiltComponent
) {
  const QuiltConsumerComponent = React.forwardRef(
    (props: connectedProps<Props, Theme>, ref) => {
      return (
        <Consumer>
          {(theme: ITheme) => (
            <Component {...props} quiltRef={ref} qGlobal={theme} />
          )}
        </Consumer>
      );
    }
  );
  QuiltConsumerComponent.displayName = `${Component.name}(connected)`;
  return QuiltConsumerComponent;
}

export { connect };
