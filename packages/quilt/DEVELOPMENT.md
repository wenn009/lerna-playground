# Table of Contents

- [Table of Contents](#table-of-contents)
  - [Prerequisites](#prerequisites)
  - [Important Information](#important-information)
  - [Project Structure](#project-structure)
  - [Workflow](#workflow)
  - [Creating Components](#creating-components)
    - [theme/structures](#themestructures)
    - [themes/default/theme](#themesdefaulttheme)
    - [index](#index)
  - [Component Requirements](#component-requirements)
    - [About Storybook](#about-storybook)
    - [Future Section for Guide](#future-section-for-guide)
    - [Future Section for Guide](#future-section-for-guide-1)
    - [Future Section for Guide](#future-section-for-guide-2)
  - [Notes](#notes)

## Prerequisites

Install the following if you don't already have them

nvm

> `curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash`
>
> [click here for additional installation options](https://github.com/creationix/nvm#installation)

## Important Information

If you work with multiple projects and use various versions of node amongst them, make sure to use the correct version while you are working on Quilt. You may be able to set up your terminal to automatically switch to a project's nvm configured node version ([like in zsh](https://github.com/lukechilds/zsh-nvm)). Otherwise, just remember to run this command while in the Quilt folder:

```
nvm use
```

## Project Structure

Configuration files are typically stored in the root level as well as all of the GitHub specific files.

Source files are all contained in the `src` folder.

The commands for the various aspects of development are located in the `package.json` file in the `scripts` object.

Run commands like this:

```
npm run <command_name>
```

## Workflow

To get things running quickly we provide a single command that should get you up and going with the basics of what you need.

```
npm run dev
```

This command essentially does the following:

1. Install all packages (equivalent to running `npm install`)
2. Builds and watches the source code (equivalent to running `npm run dev:ts`)
3. Build the docz and storybook documentation then watches for updates (equivalent to running `npm run dev:documentation`)

If all packages are already installed it should take less than 30 seconds for things to be up and running.

The docz and storybook documentation are served from <http://localhost:3000> and <http://localhost:9001> respectively.

If you know what you're doing then can run things separately and reference the numerous commands available in the `package.json`, many of which just call other smaller commands. Feel free to look through those and use them for your particular use case.

## Creating Components

For simple and straightforward use cases a generator tool is provided to bootstrap the files for new components. Run the command below and follow any prompts then come back here for further instruction.

```
npm run create:component
```

After running this command successfuly, a few files will be created. Following that, a few manual updates need to be made to complete the addition of the new component.

#### theme/structures

You will need to import and add the auto generated theme for your new component in `src/theme/structures.ts`.

1. add the import statement for your new component's theme interface in the import section at the top, like this:

```
import { ExampleTheme } from '../components/Example/interface';
```

2. add your newly imported theme to the `ComponentThemes` union type by including it with a pipe/vertical bar (`|`), like this:

```
| ExampleTheme
```

3. add your newly imported theme interface to the `ITheme` interface by adding a new key/value where the key is the name of the component and the value is the theme interface, like this:

```
Example: ExampleTheme;
```

#### themes/default/theme

You will need to import and add the auto generated theme for your new component in `src/themes/default/theme.ts`.

1. add the import statement for your new component's theme in the import section at the top, like this:

```
import { ExampleTheme } from './Example';
```

2. add your newly imported theme to the `components` object by adding a new key/value where the key is the name of the component and the value is the theme, like this:

```
Example: ExampleTheme,
```

#### index

You need to update the index file at `src/index.ts` to export your new component so you can use it.

1. add an export statement for your new component in the `src/index.ts` file, like this:

```
export * from './components/Example/Example';
```

## Component Requirements

In order for components to be complete we need to make sure that they fulfill all of the requirements listed below.

We're going fast and loose with things until everything is more stable so nothing is enforced yet.

- [ ] Procedure
  - [ ] Proposed
  - [ ] Discussed
  - [ ] Scoped
  - [ ] Stakeholder approval
  - [ ] Green lighted
- [ ] Tests
  - [ ] Unit 👍
    - Has some tests that target isolated critical behavior and functionality.
  - [ ] Integration 🙌
    - Has more tests that target the application holistically, everything works together.
  - [ ] End to End 🏆
    - Has a few tests that target critical paths and user behaviors.
  - [ ] Visual 👀
    - None for now, but maybe one day depending on maturity of options and value.
- [ ] Documentation
  - [ ] Component (if applicable)
    - [ ] explanations (when needed, not typical)
    - [ ] references/resources (when relevant)
    - [ ] required documentation for automated tools/integrations
  - [ ] Design (if applicable)
    - TBD
  - [ ] Consumer (if applicable)
    - WIP
- [ ] Integrations
  - [ ] Storybook (if applicable)
    - [ ] multiple stories to provide component coverage
    - [ ] updated, present and functioning knobs and information
    - [ ] more to be added...
  - [ ] Framer X (if applicable)
    - WIP

### About Storybook

From the [Storybook introduction](https://storybook.js.org/basics/introduction/)

> Storybook is a UI development environment and playground for UI components. The tool enables users to create components independently and showcase components interactively in an isolated development environment.
>
> Storybook runs outside of the main app so users can develop UI components in isolation without worrying about app specific dependencies and requirements.

Our intent with Storybook is to use it as a showcase to demonstrate the depth and breadth of components and their usage. It will also serve as a resource for developer documentation and some design documentation/guidelines.

### Future Section for Guide

### Future Section for Guide

### Future Section for Guide

## Notes
