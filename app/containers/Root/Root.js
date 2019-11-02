import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { AppNavigator } from '../../routes';


const Root = () => {
  const { store } = this.props;
  return (
    <Provider store={store}>
      <AppNavigator ref={this.getNavigator} />
    </Provider>
  );
};

Root.propTypes = {
  store: PropTypes.object
};

export default App;
