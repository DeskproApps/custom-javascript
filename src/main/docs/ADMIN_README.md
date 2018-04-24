# README

This app allows admins to use HTML, JavaScript and CSS to create custom apps.

## HTML

Edit the HTML template to set the value which gets rendered in the document.
The [tab](https://github.com/DeskproApps/custom-javascript/blob/master/docs/tabdata.md "Tab data reference - CTRL+click to open in new tab") data and
[me](https://github.com/DeskproApps/custom-javascript/blob/master/docs/me.md "Me data reference - CTRL+click to open in new tab") values may be rendered in the template
using [Handlebars expressions](http://handlebarsjs.com/expressions.html "Handlebars expressions - CTRL+click to open in new tab").

## JavaScript

Scripts may be embedded directly in the document using the JavaScript setting.
The *tab* and *me* values can be included as [Handlebars expressions](http://handlebarsjs.com/expressions.html "Handlebars expressions - CTRL+click to open in new tab")
and will be resolved at runtime

You can also use instead the global functions `getTabData` and `getMe` which both return an object

The `dpapp` application client object is also available directly in your custom script. You can access it as:

    // issue a GET request
    dpapp.restApi.get('me').then(console.log);      

Read the [API Reference](https://deskpro.github.io/apps-sdk-core/reference/AppClient.html "CTRL+click to open in new tab") for the `dpapp` object or visit the [Apps Developer Guide](https://deskpro.gitbooks.io/apps-developer-guide/content/ "CTRL+click to open in new tab") and look for the Recipes section to learn how to use the `dpapp` object

## CSS  

Styles may be embedded directly in the document using the CSS setting.

## Assets

Use the assets setting to embed remote scripts and stylesheets. Place the external URLs on
separate lines.
