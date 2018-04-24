import React from 'react';
import PropTypes from 'prop-types';
import { Routes, Route } from '@deskpro/apps-sdk-react';
import { Loader } from '@deskpro/react-components';
import PageHome from './components/PageHome';

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
    const { dpapp, storage, route, me } = this.props;
    const appSettings = storage.app.settings || {};

    const title = document.querySelector('.deskpro-toolbar__title');
    title.innerHTML = appSettings.title || dpapp.manifest.title;

    route.on('to', this.handleRouteTo);
    route.to('home');
  }

  /**
   * Invoked immediately before a component is unmounted
   */
  componentWillUnmount() {
    const { route } = this.props;
    route.off('to', this.handleRouteTo);
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
        {/*<Route location="help" component={PageHelp} />*/}
        {/*<Route location="settings" component={PageSettings} />*/}
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
