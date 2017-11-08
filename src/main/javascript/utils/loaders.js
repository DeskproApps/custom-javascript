/**
 * @param {string} href
 * @returns {*}
 */
const getStylesheet = (href) => {
  const $d = $.Deferred();
  const $link = $('<link/>', {
    href: href,
    rel: 'stylesheet',
    type: 'text/css'
  }).appendTo('head');
  $d.resolve($link);

  return $d.promise();
};

/**
 * @param {Array} arr
 * @returns {*}
 */
export const loadScripts = (arr) => {
  const _arr = $.map(arr, (scr) => {
    return $.getScript(scr);
  });
  _arr.push($.Deferred((deferred) => {
    $(deferred.resolve);
  }));

  return $.when.apply($, _arr);
};

/**
 * @param {Array} arr
 * @returns {*}
 */
export const loadStylesheets = (arr) => {
  const _arr = $.map(arr, (scr) => {
    return getStylesheet(scr);
  });
  _arr.push($.Deferred((deferred) => {
    $(deferred.resolve);
  }));

  return $.when.apply($, _arr);
};

/**
 * @param {string} a
 * @returns {*[]}
 */
export const splitAssets = (a) => {
  const scripts = [];
  const stylesheets = [];
  const assets = (a || '').split("\n").filter((asset) => {
    return asset !== '';
  });

  for (let i = 0; i < assets.length; i++) {
    const ext = assets[i].split('.').pop().toLowerCase();
    if (ext === 'css') {
      stylesheets.push(assets[i]);
    } else {
      scripts.push(assets[i]);
    }
  }

  return [scripts, stylesheets];
};
