import {
  FETCHING_DOG,
  DOG_FETCH_ERROR,
  DOG_FETCH_SUCCESS,
  ADOPTING_DOG,
  DOG_ADOPTION_ERROR,
  DOG_ADOPTION_SUCCESS
} from '../actions/dog';

const initialState = {
  dog: {
    imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
    imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
    name: 'Zeus',
    sex: 'Male',
    age: 3,
    breed: 'Golden Retriever',
    story: 'Owner Passed away'
  },
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