import { map } from 'lodash';
import { IconTypes } from './components/Icon/interface';

async function preload({ icons = [] }: { icons: IconTypes[] }) {
  const preloadingIcons = map(icons, (icon) =>
    import(`./components/Icon/icons/${icon}.js`)
  );
  return Promise.all(preloadingIcons);
}

export { preload };
