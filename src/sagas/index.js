import { all } from 'redux-saga/effects';
import { mainSaga } from './mainSaga';
import { websocketSagas } from './websocketSagas';

export function* rootSaga() {
  yield all([mainSaga(), websocketSagas()]);
}
