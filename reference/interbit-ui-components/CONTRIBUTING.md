# Contributing

This document is for developers who wish to contribute to the `interbit-ui-components` package within the `interbit` repo. For general information on contributing to [Interbit](https://github.com/interbit/interbit), please see this [Contribution Guide](https://github.com/interbit/interbit/blob/master/CONTRIBUTING.md).


## Creating components

### File structure

| Directory or file              | Description |
|:-                              |:-           |
| `src/assets`                   | Location for image assets.  |
| `src/components`               | React components exported from this package. |
| `src/components/BlockExplorer` | An interactive component displaying a chain's state, its blocks, and actions dispatched. |
| `src/components/Covenant`      | A set of forms to dispatch chain actions. It is wrapped by `LinkedCovenant` and uses `FormTable` components. |
| `src/components/Navigation`    | A set of navigation components such as header, footer, and sidebar menus. |
| `src/components/ReduxForm`     | Helper functions for creating and validating Redux forms. |
| `src/components/UIKit`         | A set of simple UI components. |
| `src/help`                     | Helper functionality for Redux forms, used with the `EditableTable` component. This directory is flagged for refactoring. |
| `src/scss/bootstrap`           | SCSS files from React Bootstrap. These files should not be edited. |
| `src/scss/interbit`            | SCSS files for Interbit styles. Each component has its own `scss` file which is imported in `interbit.scss`. Style overrides for React Bootstrap components are also located in this folder. |
| `src/tests/exports.tests.js`   | A set of simple tests to check that exported components exist. |
| `src/tests/UiKit.test.js`      | Rendering tests for UI Kit components. |
| `src/styleguide`               | Build files for React Styleguidist. |
| `index.js`                     | Export statements for components. |
| `styleguide.config.js`         | Configuration file for React Styleguidist. |


### Code structure

We are in the process of defining the code structure for Interbit UI Components. At this time, we ask that contributing developers use the existing code as an example of how to structure your component's code.

Simple, presentational components should go in the `src/components/UIKit` directory. More complex components should be in their own directory within `src/components`. Each component must be exported from `src/index.js`

#### SCSS

For each component:
- The styles should be in their own file, say `_my-component.scss`, in the `src/scss/interbit` directory. This file should be imported in `src/scss/interbit.scss`.
- The styles should be contained in a class named after the component and prefixed with `ibweb-`. For example, `MyComponent` should have a top-level class called `ibweb-my-component`. See `src/scss/interbit/_footer.scss` for how styles should be nested.
- The CSS must be supported by the latest versions of Chrome, Firefox, Safari, and Edge. If in doubt, see [caniuse.com](https://caniuse.com/).

#### Tests

Components must have an export test in `src/tests/exports.test.js` for each (sub)-component exported from `src/index.js`.

UI Kit components must have, at the minimum, rendering tests in `src/tests/uiKit.test.js`. Interbit UI Components uses Jest and Enzyme for testing and rendering components.

#### Documentation

Interbit pulls documentation out of JSdoc style code comments. For each component:
- Give a brief description of the component before the class declaration.
- Give a description of each prop that the component accepts

For example, the `LinkBar` component has the following code comments.
```js
/**
 * A call-to-action UI component. It functions as an `<a>` tag or `<Link>` component from `react-router-dom`, together with some additional presentational information (title, description, and image).
 */
export default class LinkBar extends Component {
  static propTypes = {
    /**
     * A short title describing the call-to-action for LinkBar
     */
    title: PropTypes.string.isRequired,
    /**
     * A description of the call-to-action for LinkBar
     */
    content: PropTypes.string.isRequired,
    /**
     * An image that provides context for the call-to-action
     */
    image: PropTypes.string,
    /**
     * A URL, relative path, or mailto link. E.g. `https://interbit.io`,  `/pages/foo`, or `mailto:foo@interbit.io`
     */
    to: PropTypes.string,
    /**
     * CSS classes to be applied to the component
     */
    className: PropTypes.string,
    /**
     * A flag. Set to `true` if the `to` property is a `mailto:` link
     */
    isMailto: PropTypes.bool,
    /**
     * A function that is fired when a user clicks on the LinkBar
     */
    clickHandler: PropTypes.func
  }
...
}
```

Each UI Kit component should be accompanied by an example file, `MyComponent.md`. [React Styleguidist](https://react-styleguidist.js.org/docs/documenting.html) will render the components and JSdoc comments in a styleguide.

The example file should include:
- An example of the rendered component.
- An example of each variant of the component. For example, we might apply `className="blue"` to a button component to render a blue button.

The following is `LinkBar`'s example `md` file:

````
Full-sized examples. To see how the component behaves responsively, change your viewport width.

```jsx
<div>
  <LinkBar to="http://google.com" image="placeholder-md.png" title="Default LinkBar" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus, velit nec dignissim luctus." />
  <LinkBar to="http://google.com" className="blue" image="placeholder-md.png" title="Blue LinkBar" content="Apply the 'blue' class to the component. Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
  <LinkBar to="http://google.com" className="dotted" image="placeholder-md.png" title="Dotted LinkBar" content="Apply the 'dotted' class to the component. Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
</div>
```
````

The styleguide can be run locally from the `interbit-ui-components` directory by executing the following commands:
```sh
npm run styleguide:build
npm run styleguide
```

