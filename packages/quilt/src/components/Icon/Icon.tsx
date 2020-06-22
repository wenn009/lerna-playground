import isUrl from 'is-url';
import * as React from 'react';
import Loadable from 'react-loadable';
import { connect } from '../../connect';
import { createStyledComponents, QuiltComponent } from '../QuiltComponent';
import Help from './icons/Help';
import { IconProps, IconTheme } from './interface';

const styledComponents = createStyledComponents<IconTheme>({
  Wrapper: ['span', 'wrapper'],
  Image: ['img', 'image'],
});

class Icon extends QuiltComponent<IconProps, IconTheme> {
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  QUILT_NAME: string = 'Icon';
  state = {
    hasError: false,
  };

  get SVG() {
    return isUrl(this.props.type)
      ? null
      : Loadable({
          loader: () => import(`./icons/${this.props.type}.js`),
          loading: Help,
        });
  }

  get Icon() {
    if (isUrl(this.props.type)) {
      const { Image } = styledComponents;
      return <Image src={this.props.type} {...this.qStyleProps} />;
    }
    const SVG = Loadable({
      loader: () => import(`./icons/${this.props.type}.js`),
      loading: Help,
    });
    return <SVG />;
  }

  render() {
    const { Wrapper } = styledComponents;
    return (
      <Wrapper {...this.props} ref={this.props.quiltRef} {...this.qStyleProps}>
        {this.Icon}
      </Wrapper>
    );
  }
}

const connectedIcon = connect<IconProps, IconTheme>(Icon);

export { connectedIcon as Icon };
