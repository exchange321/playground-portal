import * as singleSpa from 'single-spa';
import { loadApp, GlobalEventDispatcher } from './helpers';

class Portal {
  constructor() {
    this.globalEventDispatcher = new GlobalEventDispatcher();
    this.loadingPromises = [];
    this.customProps = {};
  }

  setProps(props) {
    this.customProps = {
      ...this.customProps,
      ...props,
    };

    return this;
  }

  register(name, path, appUrl, storeUrl = null) {
    if (storeUrl) {
      this.loadingPromises.push(
        loadApp(name, path, appUrl, this.customProps, storeUrl, this.globalEventDispatcher),
      );
    } else {
      this.loadingPromises.push(
        loadApp(name, path, appUrl, this.customProps),
      );
    }

    return this;
  }

  link(apps) {
    apps.forEach((app) => {
      this.register(...app);
    });

    return this;
  }

  async start() {
    await Promise.all(this.loadingPromises);

    singleSpa.start();

    return this;
  }
}

export default Portal;
