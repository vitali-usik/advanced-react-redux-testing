import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxPromise from 'redux-promise';

import reducers from './reducers';

const getEnhancers = () => {
  const middleware = applyMiddleware(reduxPromise);
  let composeEnhancers = (e) => e;

  if (process.env.NODE_ENV === 'development') {
    composeEnhancers =
      /* eslint-disable */
      typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
        : compose;
      /* eslint-disable */
  }

  return composeEnhancers(middleware);
}

export default ({ children, initialState = {} }) => {
  const store = createStore(
    reducers,
    initialState,
    getEnhancers(),
  );

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}
