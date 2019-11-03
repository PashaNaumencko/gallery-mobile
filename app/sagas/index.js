import { all } from 'redux-saga/effects';

import photosSagas from '../containers/PhotosList/sagas'

export default function* rootSaga() {
  yield all([ photosSagas() ]);
}
