function createLoadStylesheetPromise(url)
{
  return function (resolve, reject) {
    const element = document.createElement('link');

    element.setAttribute('rel', 'stylesheet');
    element.setAttribute('type', 'text/css');
    element.setAttribute('href', url);

    let ready = false;

    element.onload = element.onreadystatechange = function() {
      // console.log(this.readyState);
      if (!ready && (!this.readyState || this.readyState === 'complete' ||  this.readyState === 'loaded' )) {
        ready = true;
        resolve(url);
      }
    };
    element.onerror = () => reject(url);

    document.head.appendChild(element)
  };
}

function createLoadScriptExecutor(url)
{
  return (function (resolve, reject) {
    const element = document.createElement('script');
    element.async = true;
    element.src = url;
    element.type = 'text/javascript';

    element.onerror = function(err) {
      reject(err, url);
    };

    let ready = false;
    element.onload = element.onreadystatechange = function() {
      // console.log(this.readyState);
      if (!ready && (!this.readyState || this.readyState === 'complete' ||  this.readyState === 'loaded' )) {
        ready = true;
        resolve(url);
      }
    };

    const head = document.getElementsByTagName('head')[0];
    head.appendChild(element)
  })
}

/**
 * @param {Array} arr
 * @returns {*}
 */
export const loadScripts = (arr) => {
  const loaders = arr.map(url => new Promise(createLoadScriptExecutor(url)));
  return Promise.all(loaders);
};

/**
 * @param {Array} arr
 * @returns {*}
 */
export const loadStylesheets = (arr) => {

  const loaders = arr.map(url => new Promise(createLoadStylesheetPromise(url)));
  return Promise.all(loaders);
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
