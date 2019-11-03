import { takeEvery, put, call, all } from 'redux-saga/effects';
import * as photoService from '../../services/photoService';

import { getPhotos } from '../../routines';

function* photosRequest() {
  try {
    yield put(getPhotos.request());
    const response = yield call(photoService.getPhotosList);
    yield put(getPhotos.success(response));
  } catch (error) {
    yield put(getPhotos.failure(error.message));
  } finally {
    yield put(getPhotos.fulfill());
  }
}
  
function* watchPhotosRequest() {
  yield takeEvery(getPhotos.TRIGGER, photosRequest);
}

export default function* photosSagas() {
  yield all([ watchPhotosRequest() ]);
}