import { isEmpty, isString } from 'lodash';

function tagOrAnchor(props, defaultTag: keyof JSX.IntrinsicElements) {
  return isString(props.href) && !isEmpty(props.href) ? 'a' : defaultTag;
}

export { tagOrAnchor };
