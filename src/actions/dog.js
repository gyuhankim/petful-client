

export const fetchDog = () => dispatch =>{
    dispatch(fetchingDog())
    return fetch('/dog').then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    }).then(dog => {
        dispatch(dogFetchSuccess(dog));
    }).catch(err => {
        dispatch(dogFetchError(err));
    });

}

export const FETCHING_DOG = 'FETCHING_DOG'

// export function fetchingDog(){
//     type: FETCHING_DOG
// }

export const fetchingDog = () => ({
    type: FETCHING_DOG
})

export const DOG_FETCH_ERROR = 'DOG_FETCH_ERROR'

// export function dogFetchError(err){
//     type: DOG_FETCH_ERROR,
//     err
// }

export const dogFetchError = err => ({
    type: DOG_FETCH_ERROR,
    err
})

export const DOG_FETCH_SUCCESS = 'DOG_FETCH_SUCCESS'

// export function dogFetchSuccess(dog){
//     type: DOG_FETCH_SUCCESS,
//     dog
// }

export const dogFetchSuccess = dog => ({
    type: DOG_FETCH_SUCCESS,
    dog
})



export const adoptDog = () => dispatch =>{
    dispatch(adoptingDog())
    fetch('/dog', {method: 'DELETE'})
        .then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    }).then(dog => {
        dispatch(dogAdoptionSuccess(dog));
    }).catch(err => {
        dispatch(dogAdoptionError(err));
    });

}

export const ADOPTING_DOG = 'ADOPTING_DOG'
export function adoptingDog(){
    type: ADOPTING_DOG
}

export const DOG_ADOPTION_ERROR = 'DOG_ADOPTION_ERROR'
export function dogAdoptionError(err){
    type: DOG_ADOPTION_ERROR,
    err
}

export const DOG_ADOPTION_SUCCESS = 'DOG_ADOPTION_SUCCESS'
export function dogAdoptionSuccess(dog){
    type: DOG_ADOPTION_SUCCESS,
    dog
}