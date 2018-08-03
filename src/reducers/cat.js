import {
  FETCHING_CAT,
  CAT_FETCH_ERROR,
  CAT_FETCH_SUCCESS,
  ADOPTING_CAT,
  CAT_ADOPTION_ERROR,
  CAT_ADOPTION_SUCCESS
} from '../actions/cat';

const initialState = {
  cat: {},
  loading: false,
  error: null
}

export default function catReducer(state = initialState, action) {

  switch (action.type) {

    case FETCHING_CAT:
    return {
      ...state,
      loading: true
    }

    case CAT_FETCH_ERROR:
    return {
      ...state,
      loading: false,
      error: action.err
    }

    case CAT_FETCH_SUCCESS:
    return {
      ...state,
      cat: action.cat,
      loading: false,
      error: null
    }

    case ADOPTING_CAT:
    return {
      ...state,
      loading: true
    }

    case CAT_ADOPTION_ERROR:
    return {
      ...state,
      loading: false,
      error: action.err
    }

    case CAT_ADOPTION_SUCCESS:
    return {
      ...state,
      cat: action.cat,
      loading: false,
      error: null
    }

    default:
    return state;

  }

}