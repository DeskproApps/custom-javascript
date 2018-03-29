import React from 'react';
import PropTypes from 'prop-types';
import tabOverride from 'taboverride';
import { LinkButton, sdkConnect } from '@deskpro/apps-sdk-react';
import { Container, Heading, DrawerList, Drawer, Button } from '@deskpro/react-components';
import { Form, Input, Textarea } from '@deskpro/redux-components';

/* eslint-disable */
const defaultSettings = {
  javascript: "console.log('App loaded!')\n",
  assets:     "https://code.jquery.com/jquery-3.2.1.min.js\n",
  html:       "<div>\n  Welcome, {{me.name}}!\n  Reading ticket #{{tab.id}}.\n</div>\n",
  css:        "body {\n  color: #000;\n  background-color: #FFF;\n}\n"
};
/* eslint-enable */

/**
 * Renders the app's settings page.
 */
class PageSettings extends React.PureComponent {
  static propTypes = {
    /**
     * Instance of sdk route.
     * @see https://deskpro.gitbooks.io/deskpro-apps/api/props/route.html
     */
    route: PropTypes.object.isRequired,

    /**
     * Instance of sdk storage.
     * @see https://deskpro.gitbooks.io/deskpro-apps/api/props/storage.html
     */
    storage: PropTypes.object.isRequired,

    /**
     * Instance of sdk-core.
     */
    dpapp:   PropTypes.object.isRequired
  };

  /**
   * Invoked immediately after a component is mounted
   */
  componentDidMount() {
    const textareas = document.getElementsByTagName('textarea');
    tabOverride.tabSize(2).autoIndent(true).set(textareas);
  }

  /**
   * Invoked immediately before a component is unmounted
   */
  componentWillUnmount() {
    const textareas = document.getElementsByTagName('textarea');
    tabOverride.set(textareas, false);
  }

  /**
   * Called when the form is submitted
   */
  handleSubmit = (values) => {
    document.querySelector('.deskpro-toolbar__title').innerHTML = values.title;
    this.props.route.to('home');
  };

  /**
   * @returns {XML}
   */
  render() {
    const { storage, dpapp } = this.props;

    let settings = storage.app.settings || {};
    if (!settings.title) {
      settings.title = dpapp.manifest.title;
    }

    return (
      <Form
        name="settings"
        keepDirtyOnReinitialize
        destroyOnUnmount={false}
        initialValues={Object.assign({}, defaultSettings, settings)}
        onSubmit={storage.onSubmitApp(this.handleSubmit)}
      >
        <DrawerList>
          <Drawer>
            <Heading>App</Heading>
            <span>
              The title displayed in the toolbar.
            </span>
            <Input
              label="Title"
              id="title"
              name="title"
            />
          </Drawer>
          <Drawer opened={false}>
            <Heading>HTML</Heading>
            <span>
              The HTML rendered into the document.
            </span>
            <Textarea
              id="html"
              name="html"
            />
          </Drawer>
          <Drawer opened={false}>
            <Heading>Assets</Heading>
            <span>
              Remote scripts and stylesheets added to the document. One URL per line.
            </span>
            <Textarea
              id="assets"
              name="assets"
            />
          </Drawer>
          <Drawer opened={false}>
            <Heading>CSS</Heading>
            <span>
              Inline CSS added in the document.
            </span>
            <Textarea
              id="css"
              name="css"
            />
          </Drawer>
          <Drawer opened={false}>
            <Heading>JavaScript</Heading>
            <span>
              Inline javascript added in the document.
            </span>
            <Textarea
              id="javascript"
              name="javascript"
            />
          </Drawer>
        </DrawerList>
        <Container>
          <Button>
            Save
          </Button>
          <LinkButton to="home">
            Cancel
          </LinkButton>
        </Container>
      </Form>
    );
  }
}

export default sdkConnect(PageSettings);
