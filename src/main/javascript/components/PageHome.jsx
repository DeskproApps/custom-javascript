import React from 'react';
import PropTypes from 'prop-types';
import Handlebars from 'handlebars';
import { sdkConnect } from '@deskpro/apps-sdk-react';
import { Container, Loader } from '@deskpro/react-components';
import { loadScripts, loadStylesheets, splitAssets } from '../utils/loaders';

/**
 * Renders the defined template.
 */
class PageHome extends React.PureComponent {
  static propTypes = {
    /**
     * Instance of sdk storage.
     * @see https://deskpro.gitbooks.io/deskpro-apps/api/props/storage.html
     */
    storage: PropTypes.object.isRequired,

    /**
     * Populated with the details of the currently opened ticket.
     * @see https://deskpro.gitbooks.io/deskpro-apps/api/props/tabdata.html
     */
    tabData: PropTypes.object.isRequired,

    /**
     * Populated with the details of the agent/admin using the app.
     * @see https://deskpro.gitbooks.io/deskpro-apps/api/props/me.html
     */
    me: PropTypes.object.isRequired,

    /**
     * Instance of sdk ui.
     * @see https://deskpro.gitbooks.io/deskpro-apps/api/props/ui.html
     */
    ui: PropTypes.object.isRequired
  };

  /**
   * Constructor
   *
   * @param {*} props
   */
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
    this.html = '';
    this.scriptTag = null;
    this.styleTag = null;
  }

  /**
   * Invoked immediately before a component is mounted
   */
  componentWillMount() {
    const { storage, ui } = this.props;

    const [scripts, stylesheets] = splitAssets(storage.app.settings.assets);

    loadStylesheets(stylesheets).then(() => {
      loadScripts(scripts).then(() => {
        try {
          const context = this.getTemplateContext();
          const templateCSS = Handlebars.compile(storage.app.settings.css || '');
          const templateHTML = Handlebars.compile(storage.app.settings.html || '');

          this.html = templateHTML(context);
          this.styleTag = document.createElement('style');
          this.styleTag.setAttribute('type', 'text/css');
          this.styleTag.innerHTML = templateCSS(context);
          this.appendHead(this.styleTag);
        } catch (error) {
          ui.error(error);
        }

        this.setState({ loaded: true });
      });
    });
  }

  /**
   * Invoked immediately after updating occurs.
   *
   * Inserts the inline JavaScript *after* the HTML has been rendered. Ensuring the
   * JS can access the rendered HTML.
   */
  componentDidUpdate() {
    const { storage, ui } = this.props;

    if (this.scriptTag) {
      this.scriptTag.remove()
    }

    // make dpapp visible to the script
    if (window) {
      window.dpapp = this.props.dpapp;
      window.getTabData = this.getTabData;
      window.getMe = this.getMe;
    }

    this.scriptTag = document.createElement('script');
    this.scriptTag.setAttribute('type', 'text/javascript');
    this.appendHead(this.scriptTag);

    try {
      const templateJS = Handlebars.compile(storage.app.settings.javascript || '');
      this.scriptTag.innerHTML = templateJS(this.getTemplateContext());
    } catch (error) {
      ui.error(error);
    }
  }

  /**
   * Invoked immediately before a component is unmounted
   */
  componentWillUnmount() {
    this.scriptTag.remove();
    this.styleTag.remove();
  }

  /**
   * Returns a copy of the data loaded in the container tab.
   * Exposed as method on the global window object
   *
   * @returns {object}
   */
  getTabData = () =>
  {
    return JSON.parse(JSON.stringify(this.props.tabData));
  };

  /**
   * Returns a copy of the data representation of the current authenticated user.
   * Exposed as method on the global window object
   *
   * @returns {object}
   */
  getMe = () =>
  {
    return JSON.parse(JSON.stringify(this.props.me));
  };

  /**
   * Appends the given element to the document head
   *
   * @param {HTMLElement} element
   */
  appendHead = (element) => {
    const head = document.head || document.getElementsByTagName('head')[0];
    head.appendChild(element);
  };

  /**
   * Returns the values used in templates
   *
   * @returns {*}
   */
  getTemplateContext = () => {
    return Object.assign({}, {
      tab: this.getTabData(),
      me: this.getMe(),
      storage: JSON.parse(JSON.stringify(this.props.storage))
    });
  };

  /**
   * @returns {XML}
   */
  render() {
    return (
      <Container>
        {this.state.loaded ? (
          <div dangerouslySetInnerHTML={{ __html: this.html }} />
        ) : (
          <div className="dp-text-center">
            <Loader />
          </div>
        )}
      </Container>
    );
  }
}

export default sdkConnect(PageHome);
