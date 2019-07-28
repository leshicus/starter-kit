import { createStore, applyMiddleware } from 'redux';
import { reducer } from './reducers';
import reduxSaga from 'redux-saga';
import { rootSaga } from './sagas';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';

const sagaMiddleware = reduxSaga();
const middlewares = [sagaMiddleware];
const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middlewares)));
sagaMiddleware.run(rootSaga);

export default store;
