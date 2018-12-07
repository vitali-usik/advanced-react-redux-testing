import tv4 from 'tv4';

import stateScheme from './stateScheme';

export default ({ dispatch, getState }) => (next) => (action) => {
  next(action);

  if (!tv4.validate(getState(), stateScheme)) {
    console.warn('Invalid state scheme detected');
  }
}
