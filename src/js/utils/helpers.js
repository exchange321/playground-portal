import * as singleSpa from 'single-spa';

const matchPath = path => location => location.pathname === path;

class GlobalEventDispatcher {
  constructor() {
    this.stores = [];
  }

  registerStore(store) {
    this.stores.push(store);
  }

  dispatch(event) {
    this.stores.forEach(s => s.dispatch(event));
  }
}

const formatServiceUrl = path => `/portal${path}`;

const loadApp = async (
  name, path, appUrl, customProps, storeUrl = null, globalEventDispatcher = null,
) => {
  let storeModule = {};
  const props = { ...customProps, globalEventDispatcher };

  storeModule = storeUrl
    ? await SystemJS.import(formatServiceUrl(storeUrl))
    : { storeInstance: null };

  if (storeModule.storeInstance && globalEventDispatcher) {
    props.store = storeModule.storeInstance;
    globalEventDispatcher.registerStore(storeModule.storeInstance);
  }

  singleSpa.registerApplication(
    name,
    () => SystemJS.import(formatServiceUrl(appUrl)),
    matchPath(path),
    props,
  );
};

const setupRouter = (history) => {
  const portalLinks = document.querySelectorAll('[data-type="portal-link"]');

  portalLinks.forEach((portalLink) => {
    portalLink.addEventListener('click', (e) => {
      e.preventDefault();

      const path = e.target.getAttribute('href');

      history.push(path);
    });
  });
};

export {
  loadApp,
  setupRouter,
  GlobalEventDispatcher,
};
