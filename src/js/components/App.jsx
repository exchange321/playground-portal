import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import createHistory from 'history/createBrowserHistory';
import { withTheme } from 'styled-components';
import Portal from '../utils/portal';
import Navigation from './Nagivation';
import { setupRouter } from '../utils/helpers';

class App extends PureComponent {
  state = {
    loading: true,
    hasError: false,
    location: window.location,
  }

  static propTypes = {
    theme: PropTypes.objectOf(PropTypes.any).isRequired,
  }

  async componentWillMount() {
    const { theme } = this.props;

    const history = createHistory();

    try {
      await (new Portal())
        .setProps({
          theme,
          history,
        })
        .link([
          ['react-app', '/react-app', '/react-app/index.js', '/react-app/store.js'],
        ])
        .start();
    } catch (e) {
      this.setState({
        hasError: true,
      });
    }

    this.setState({
      loading: false,
    });

    setupRouter(history);

    history.listen((location) => {
      this.setState({
        location,
      });
    }, false);
  }

  render() {
    const { loading, hasError, location } = this.state;

    if (hasError) {
      return (
        <p>We have failed to load an app.</p>
      );
    }

    if (loading) {
      return (
        <p>Loading...</p>
      );
    }

    return (
      <>
        <Navigation location={location} />
      </>
    );
  }
}

export default withTheme(App);
