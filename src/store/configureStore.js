import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers';

export default function configureStore() {
  if (process.env.NODE_ENV === 'development') {
    return createStore(
      rootReducer,
      composeWithDevTools(applyMiddleware(thunk, logger)),
    );
  } else {
    return createStore(rootReducer, applyMiddleware(thunk));
  }
}
