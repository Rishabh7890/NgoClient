import axios from 'axios'
import {FETCH_ADMINS_REQUEST,FETCH_ADMINS_SUCCESS,FETCH_ADMINS_FAILURE} from './adminTypes'

export const fetchAdmins = () => {
    return (dispatch) => {
        dispatch(fetchAdminsRequest())
    axios.get(`http://localhost:8080/admins`)
            .then(response => {
                                                // response.data is the users
            const admins = response.data
            dispatch(fetchAdminsSuccess(admins))
            }
        )
            .catch(error => {
                              // error.message is the error message
                    dispatch(fetchAdminsFailure(error.message))
                }
            )
    }
}

export const fetchAdminsRequest = () => {
    return {
    type: FETCH_ADMINS_REQUEST
    }
}

export const fetchAdminsSuccess = admins => {
    return {
        type: FETCH_ADMINS_SUCCESS,
        payload: admins
    }
}

export const fetchAdminsFailure = error => {
    return {
        type: FETCH_ADMINS_FAILURE,
        payload: error
    }
}