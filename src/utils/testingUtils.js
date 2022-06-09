import React from 'react';
import { render } from '@testing-library/react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { productReducer, products } from '../../src/redux/store';

const renderConnected = (
  ui, {
    initialState = reducerInitialState,
    store = createStore(productReducer, products),
    ...renderOptions
  } = {}
) => {
  const Wrapper = ({ children }) => (
    <Provider store={store}>{children}</Provider>
  );
  return render(ui, { wrapper: Wrapper, ...renderOptions});
};

export default renderConnected;