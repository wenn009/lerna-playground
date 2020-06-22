import { keys } from 'lodash';
import * as React from 'react';
import styled from 'styled-components';
import { QuiltContext } from './context';

const domElements = keys(styled);

type quiltType = {
  [element in keyof JSX.IntrinsicElements]: (
    literals: TemplateStringsArray,
    ...placeholders: any[]
  ) => React.ComponentType;
};

const quilt = {} as quiltType;

domElements.forEach((domElement) => {
  quilt[domElement] = (
    literals: TemplateStringsArray,
    ...placeholders: any[]
  ) => {
    const QuiltStyledComponent = (props) => {
      const theme = React.useContext(QuiltContext);
      const ConnectedStyledComponent = styled[domElement](
        literals,
        ...placeholders
      );
      return <ConnectedStyledComponent {...props} qGlobal={theme} />;
    };
    QuiltStyledComponent.displayName = `quilt.${domElement}`;
    return QuiltStyledComponent;
  };
});

export { quilt };
