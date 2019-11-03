import { takeEvery, put, call, all } from 'redux-saga/effects';
import * as photoService from '../../services/photoService';

import { getPhotos } from '../../routines';

function* photosRequest({ payload }) {
  try {
    yield put(getPhotos.request());
    const response = yield call(photoService.getPhotosList, payload);
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

// function* fetchMorePhotosRequest() {
//   try {
//     yield put(fetchMorePhotos.request());
//     const response = yield call(photoService.getPhotosList);
//     yield put(fetchMorePhotos.success(response));
//   } catch (error) {
//     yield put(fetchMorePhotos.failure(error.message));
//   } finally {
//     yield put(fetchMorePhotos.fulfill());
//   }
// }
  
// function* watchFetchMorePhotosRequest() {
//   yield takeEvery(fetchMorePhotos.TRIGGER, fetchMorePhotosRequest);
// }

export default function* photosSagas() {
  yield all([ watchPhotosRequest() ]);
}