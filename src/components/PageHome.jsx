import React from 'react';
import PropTypes from 'prop-types';
import Handlebars from 'handlebars';

import { Loader } from '@deskpro/apps-components';
import { loadScripts, loadStylesheets, splitAssets } from '../utils/loaders';

/**
 * Renders the defined template.
 */
class PageHome extends React.PureComponent
{
  static propTypes =
  {
    location: PropTypes.object.isRequired,

    history: PropTypes.object.isRequired,

    dpapp: PropTypes.object.isRequired,
  };

  html = '';

  scriptTag = null;

  styleTag = null;

  state = { loaded: false };

  /**
   * Invoked immediately before a component is mounted
   */
  componentDidMount() {
    const { css, html, assets, context } = this.props.location.state;
    const { dpapp } = this.props;

    const [scripts, stylesheets] = splitAssets(assets);

    loadStylesheets(stylesheets).then(() => {
      loadScripts(scripts).then(() => {
        try {
          const templateCSS =   Handlebars.compile(css || '');
          const templateHTML =  Handlebars.compile(html || '');

          this.html =     templateHTML(context);
          this.styleTag = document.createElement('style');
          this.styleTag.setAttribute('type', 'text/css');
          this.styleTag.innerHTML = templateCSS(context);
          this.appendHead(this.styleTag);
        } catch (error) {
          if (error instanceof Error) {
            dpapp.ui.showErrorNotification(error)
          } else {
            dpapp.ui.showNotification(error, 'error')
          }
          console.error(error);
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

    const { dpapp } = this.props;

    if (this.scriptTag) {
      this.scriptTag.remove()
    }
    const { context, javascript } = this.props.location.state;

    // make dpapp visible to the script
    if (window) {
      window.dpapp = dpapp;
      window.getTab = this.getTab;
      window.getMe = this.getMe;
    }

    this.scriptTag = document.createElement('script');
    this.scriptTag.setAttribute('type', 'text/javascript');
    this.appendHead(this.scriptTag);

    try {
      const templateJS = Handlebars.compile(javascript || '');
      this.scriptTag.innerHTML = templateJS(context);

    } catch (error) {
      if (error instanceof Error) {
        dpapp.ui.showErrorNotification(error)
      } else {
        dpapp.ui.showNotification(error, 'error')
      }
      console.error(error);
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
  getTab = () =>
  {
    const { tab } = this.props.location.state.context;
    return JSON.parse(JSON.stringify(tab));
  };

  /**
   * Returns a copy of the data representation of the current authenticated user.
   * Exposed as method on the global window object
   *
   * @returns {object}
   */
  getMe = () =>
  {
    const { me } = this.props.location.state.context;
    return JSON.parse(JSON.stringify(me));
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
   * @returns {XML}
   */
  render() {

    console.log('ha ahahsa ', this.html)

    return (
      this.state.loaded ?
        <div dangerouslySetInnerHTML={{ __html: this.html }} />
        :
        <div className="dp-text-center"><Loader /></div>
    );
  }
}

export default PageHome;
