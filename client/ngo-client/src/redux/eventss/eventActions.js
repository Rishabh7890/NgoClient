import axios from 'axios'
import {FETCH_EVENTS_REQUEST,FETCH_EVENTS_SUCCESS,FETCH_EVENTS_FAILURE} from './eventTypes'

export const fetchEvent = () => {
    return (dispatch) => {
        dispatch(fetchEventRequest())
    axios.get(`http://127.0.0.1/events`)
            .then(response => {
                                                // response.data is the users
            const event = response.data
            dispatch(fetchEventSuccess(event))
            }
        )
            .catch(error => {
                              // error.message is the error message
                    dispatch(fetchEventFailure(error.message))
                }
            )
    }
}

export const fetchEventRequest = () => {
    return {
    type: FETCH_EVENTS_REQUEST
    }
}

export const fetchEventSuccess = event => {
    return {
        type: FETCH_EVENTS_SUCCESS,
        payload: event
    }
}

export const fetchEventFailure = error => {
    return {
        type: FETCH_EVENTS_FAILURE,
        payload: error
    }
}