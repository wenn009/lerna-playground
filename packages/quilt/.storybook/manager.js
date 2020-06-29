import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';
import logo from './public/logo.png';

addons.setConfig({
  theme: create({
    brandTitle: 'Foursquare',
    brandUrl: 'https://foursquare.com/',
    brandImage: `/${logo}`,
  }),
});
