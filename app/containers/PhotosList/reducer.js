import { getPhotos } from '../../routines';

const initialState = {
  photos: {},
  loading: true,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
  case getPhotos.TRIGGER:
    return {
      ...state,
      loading: true
    };
  case getPhotos.SUCCESS: {
    return {
      ...state,
      photos: action.payload
    };
  }
  case getPhotos.FAILURE: {
    return {
      ...state,
      error: action.payload
    };
  }
  case getPhotos.FULFILL:
    return {
      ...state,
      loading: false
    };
  default:
    return state;
  }
};