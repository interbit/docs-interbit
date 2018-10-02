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

    // ...
  }
}