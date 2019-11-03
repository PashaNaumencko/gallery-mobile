import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { AppNavigator } from '../../routes';


const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

Root.propTypes = {
  store: PropTypes.object
};

export default Root;
