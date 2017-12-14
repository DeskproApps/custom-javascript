import React from 'react';
import { sdkConnect, LinkButton } from '@deskpro/apps-sdk-react';
import { Container, Section, Heading } from '@deskpro/react-components';

/**
 * Renders the app's help page.
 */
const PageHelp = () => (
  <Container className="no-padding">
    <Section>
      <Heading size={3}>
        Help
      </Heading>
      <p>
        This app allows admins to use HTML, JavaScript, and CSS to create custom apps.
      </p>

      <Heading size={4}>
        HTML
      </Heading>
      <p>
        Edit the HTML template to set the value which gets rendered in the document.
        The <a href="https://deskpro.gitbooks.io/deskpro-apps/apps/tabdata.html" target="_blank">tab data</a> and
        <a href="https://deskpro.gitbooks.io/deskpro-apps/apps/me.html" target="_blank">me</a> values may be rendered in the template
        using <a href="http://handlebarsjs.com/expressions.html" target="_blank">Handlebars expressions</a>.
      </p>

      <Heading size={4}>
        Assets
      </Heading>
      <p>
        Use the assets setting to embed remote scripts and stylesheets. Place the external URLs on
        separate lines.
      </p>

      <Heading size={4}>
        CSS
      </Heading>
      <p>
        Styles may be embedded directly in the document using the CSS setting.
      </p>

      <Heading size={4}>
        JavaScript
      </Heading>
      <p>
        Scripts may be embedded directly in the document using the JavaScript setting.
        The <i>tab</i> and <i>me</i> values may be included by
        using <a href="http://handlebarsjs.com/expressions.html" target="_blank">Handlebars expressions</a>.
      </p>
    </Section>
    <LinkButton to="home">
      Close
    </LinkButton>
  </Container>
);

export default sdkConnect(PageHelp);
