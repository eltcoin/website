import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { localStorageMiddleware } from './middleware';
import reducer from './reducer';

const getMiddleware = () => {
  if (process.env.NODE_ENV === 'production') {
    return applyMiddleware(localStorageMiddleware);
  }

  return applyMiddleware(localStorageMiddleware, createLogger());
};

export default createStore(reducer, getMiddleware());
