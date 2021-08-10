import { createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import testReducer from './reducers/TestReducer';

const middlewares = [thunk];
if (process.env.NODE_ENV === 'development') {
	middlewares.push(logger);
}

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

const rootReducer = combineReducers({
  testReducer
});

const store = createStoreWithMiddleware(rootReducer);

export {
  store
};