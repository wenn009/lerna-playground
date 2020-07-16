[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

## About

This repo contains internal shared npm packages for all Foursuqare web apps, managed and published to our private npm registry (URL needed) via [lerna](https://github.com/lerna/lerna).

Commit messages follow the [Conventional Commits Specification](https://www.conventionalcommits.org/en), enforced by [commitlint](https://github.com/conventional-changelog/commitlint).

CHANGELOG is auto-generated for each package based on the commit messages.

## Packages

- @foursquare/ui
- @foursquare/utils
- @foursquare/webpack-config
- @foursquare/quilt

## Commands

- `npm run bootstrap` (`lerna bootstrap --hoist`)
- `npm run publish` (`lerna publish --registry {registry_url}`)
- [All lerna commands](https://github.com/lerna/lerna/tree/master/commands)

## References

- Why package-lock.json is not commited for packages
  - https://github.com/sindresorhus/ama/issues/479#issuecomment-310661514
  - [package-lock.json cannot be published](https://docs.npmjs.com/files/package-lock.json)
- [Directory structure for JavaScript/Node Projects](https://gist.github.com/tracker1/59f2c13044315f88bee9)
