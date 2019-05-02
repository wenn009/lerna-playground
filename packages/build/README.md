# @foursquare/build

Webpack build for Foursquare react apps.

## Usage

```js
// Require this library
const foursquareBuild = require('@foursquare/build');

// The target name of the current app (eg: home, attribution, dashboard, segmentbuilder...etc)
const targetName = 'home';

// This returns the prod webpack config object
const prodConfig = foursquareBuild.buildEnterprisesiteConfig(true, targetName, __dirname);

// This returns the dev webpack config object
const devConfig = foursquareBuild.buildEnterprisesiteConfig(false, targetName, __dirname);
```

# Installation

```
npm install @foursquare/build
```

Ensure that `src/main.js` exists (starting point of the app)

Create `webpack.config.js` with:

```js
const foursquareBuild = require('@foursquare/build');

module.exports = env =>
  foursquareBuild.buildEnterprisesiteConfig(env === 'dist', TARGET_NAME, __dirname);
```

Ensure app has the following npm scripts in package.json:

```
"start": "webpack --watch --progress",
"build": "webpack --watch --progress --env=dist",
"webpack": "webpack"
```

# Features

- babel to transpile es6/7 code
- styled components plugin hooked up and ready to be used
- css/less
- generates manfiest json file
- generates a vendor.js file
- handles loading of assets (imgs)
- generates index.html
