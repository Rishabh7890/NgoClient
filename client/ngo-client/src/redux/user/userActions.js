import axios from 'axios'
import {FETCH_USERS_REQUEST,FETCH_USERS_SUCCESS,FETCH_USERS_FAILURE} from './userTypes'

export const fetchUsers = () => {
    return (dispatch) => {
        console.log("action called")
        dispatch(fetchUsersRequest())
    axios.get(`http://localhost:8080/users`)
            .then(response => {
                                                // response.data is the users
            const users = response.data
            console.log(users,'actions')
            dispatch(fetchUsersSuccess(users))
            }
        )
            .catch(error => {
                              // error.message is the error message
                console.log("error in data fetching")
                dispatch(fetchUsersFailure(error.message))
                }
            )
    }
}

export const fetchUsersRequest = () => {
    return {
    type: FETCH_USERS_REQUEST
    }
}

export const fetchUsersSuccess = users => {
    console.log("loadded success")
    console.log(users,'fecthusers')
    return {
        
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

export const fetchUsersFailure = error => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}