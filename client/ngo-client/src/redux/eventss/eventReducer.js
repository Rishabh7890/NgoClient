import {FETCH_EVENTS_REQUEST,FETCH_EVENTS_SUCCESS,FETCH_EVENTS_FAILURE} from './eventTypes'

const initialState = {
    loading: false,
    event: [],
    error: ''
}

const eventreducer = (state = initialState, action) => {
    switch (action.type) {
    case FETCH_EVENTS_REQUEST:
        return {
        ...state,
        loading: true
        }
    case FETCH_EVENTS_SUCCESS:
        return {
        loading: false,
        event: action.payload,
        error: ''
        }
    case FETCH_EVENTS_FAILURE:
        return {
        loading: false,
        event: [],
        error: action.payload
        }
    default: return state
    }
}

export default eventreducer