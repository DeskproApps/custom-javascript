import React from 'react';
import PropTypes from 'prop-types';
import { Routes, Route } from '@deskpro/apps-sdk-react';
import { Loader } from '@deskpro/react-components';
import PageSettings from './components/PageSettings';
import PageHome from './components/PageHome';
import PageHelp from './components/PageHelp';

/**
 * Renders the HTML app.
 */
export default class App extends React.PureComponent {
  static propTypes = {
    /**
     * Instance of sdk storage.
     * @see https://deskpro.gitbooks.io/deskpro-apps/content/api/props/storage.html
     */
    storage: PropTypes.object,

    /**
     * Instance of sdk route.
     * @see https://deskpro.gitbooks.io/deskpro-apps/content/api/props/route.html
     */
    route: PropTypes.object,

    /**
     * Populated with the details of the agent/admin using the app.
     * @see https://deskpro.gitbooks.io/deskpro-apps/api/props/me.html
     */
    me: PropTypes.object
  };

  /**
   * Invoked immediately after a component is mounted
   */
  componentDidMount() {
    const { storage, route, me } = this.props;

    const title = document.querySelector('.deskpro-toolbar__title');
    if (storage.app.settings === undefined) {
      storage.app.settings = {};
    }
    title.innerHTML = storage.app.settings.title || dpapp.manifest.title;

    route.on('to', this.handleRouteTo);

    if (me.can_admin) {
      const controls = document.querySelector('.dp-heading__controls');
      const settings = document.createElement('i');
      const help = document.createElement('i');
      controls.append(settings);
      controls.append(help);

      settings.setAttribute('class', 'fa fa-gear dp-icon');
      settings.setAttribute('title', 'Settings');
      settings.addEventListener('click', () => {
        route.to('settings');
      });

      help.setAttribute('class', 'fa fa-question-circle dp-icon');
      help.setAttribute('title', 'Help');
      help.addEventListener('click', () => {
        route.to('help');
      });

      if (!storage.app.settings) {
        return route.to('settings');
      }
    }

    route.to('home');
  }

  /**
   * Invoked immediately before a component is unmounted
   */
  componentWillUnmount() {
    const { route } = this.props;

    route.off('to', this.handleRouteTo);
    document.querySelector('.dp-heading__controls .fa-gear').remove();
    document.querySelector('.dp-heading__controls .fa-question-circle').remove();
  }

  /**
   * Called when the route is changed
   */
  handleRouteTo = () => {
    this.props.dpapp.ui.expand();
  };

  /**
   * @returns {XML}
   */
  render() {
    return (
      <Routes>
        <Route location="help" component={PageHelp} />
        <Route location="settings" component={PageSettings} />
        <Route location="home" component={PageHome} />
        <Route defaultRoute>
          <div className="dp-text-center">
            <Loader />
          </div>
        </Route>
      </Routes>
    );
  }
}
