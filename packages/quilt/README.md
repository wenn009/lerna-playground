<h1 align="center">Quilt</h1>

## Installation

Quilt is available as an internal npm package(@foursquare/quilt).

```sh
// with npm
npm install @foursquare/quilt

// with yarn
yarn add @foursquare/quilt
```

## Usage

Here is a quick example to get you started:

```jsx
import React from 'react'
import ReactDOM from 'react-dom'

function App() {
  return (
  )
}

ReactDOM.render(<App />, document.querySelector('#app'))
```

## Questions

For _how-to_ questions and other non-issues,
please use _TBD_ instead of Github issues.

## Examples

Are you looking for an example project to get started?
Well, one day we will have some...

## Documentation

go/cupcake or http://foursquare-cupcake.s3-website-us-east-1.amazonaws.com/

https://www.figma.com/file/1JKh9woyHy7VbJj7PWPUKY/Components_Signed-off

### Deploying Storybook

In order to deploy the storybook to AWS S3, you must

1. Get the sewichi aws access key and secret from the Product Platform team(email pp-tickets@foursquare.com).

2. Have [awscli](https://docs.aws.amazon.com/cli/latest/userguide/installing.html) installed.

3. Then you can simply do `npm run storybook:deploy`.

4. If your default aws profile is not the sewichi account, you can change the aws profile used to run the command with the aws-profile option. `npm run storybook:deploy --aws-profile=myprofile`

## Development

For directions on how to locally develop Quilt please refer to our [development guide](/DEVELOPMENT.md).

## Contributing

We'd greatly appreciate any [contribution](/CONTRIBUTING.md) you make. =)

## Changelog

Recently Updated?
Please read the [changelog](/CHANGELOG.md).

## Roadmap

The future plans and high priority features and enhancements can be found in the [ROADMAP.md](/ROADMAP.md) file.

## License

This project is UNLICENSED and is to remain private and internal at Foursquare.
