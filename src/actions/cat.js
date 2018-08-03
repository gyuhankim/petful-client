

export const fetchCat = () => dispatch =>{
    dispatch(fetchingCat())
    return fetch('/cat').then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    }).then(cat => {
        dispatch(catFetchSuccess(cat));
    }).catch(err => {
        dispatch(catFetchError(err));
    });

}

export const FETCHING_CAT = 'FETCHING_CAT'

// export function fetchingCat(){
//     type: FETCHING_CAT
// }

export const fetchingCat = () => ({
    type: FETCHING_CAT
})

export const CAT_FETCH_ERROR = 'CAT_FETCH_ERROR'
export function catFetchError(err){
    type: CAT_FETCH_ERROR,
    err
}

export const CAT_FETCH_SUCCESS = 'CAT_FETCH_SUCCESS'
export function catFetchSuccess(cat){
    type: CAT_FETCH_SUCCESS,
    cat
}



export const adoptCat = () => dispatch =>{
    dispatch(adoptingCat())
    fetch('/cat', {method: 'DELETE'})
        .then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    }).then(cat => {
        dispatch(catAdoptionSuccess(cat));
    }).catch(err => {
        dispatch(catAdoptionError(err));
    });

}

export const ADOPTING_CAT = 'ADOPTING_CAT'
export function adoptingCat(){
    type: ADOPTING_CAT
}

export const CAT_ADOPTION_ERROR = 'CAT_ADOPTION_ERROR'
export function catAdoptionError(err){
    type: CAT_ADOPTION_ERROR,
    err
}

export const CAT_ADOPTION_SUCCESS = 'CAT_ADOPTION_SUCCESS'
export function catAdoptionSuccess(cat){
    type: CAT_ADOPTION_SUCCESS,
    cat
}