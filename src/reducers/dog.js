import {
  FETCHING_DOG,
  DOG_FETCH_ERROR,
  DOG_FETCH_SUCCESS,
  ADOPTING_DOG,
  DOG_ADOPTION_ERROR,
  DOG_ADOPTION_SUCCESS
} from '../actions/dog';

const initialState = {
  dog: {},
  loading: false,
  error: null
}

export default function dogReducer(state = initialState, action) {

  switch (action.type) {

    case FETCHING_DOG:
    return {
      ...state,
      loading: true
    }

    case DOG_FETCH_ERROR:
    return {
      ...state,
      loading: false,
      error: action.err
    }

    case DOG_FETCH_SUCCESS:
    return {
      ...state,
      dog: action.dog,
      loading: false,
      error: null
    }

    case ADOPTING_DOG:
    return {
      ...state,
      loading: true
    }

    case DOG_ADOPTION_ERROR:
    return {
      ...state,
      loading: false,
      error: action.err
    }

    case DOG_ADOPTION_SUCCESS:
    return {
      ...state,
      dog: action.dog,
      loading: false,
      error: null
    }

    default:
    return state;
    
  }

}