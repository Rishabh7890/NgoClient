import {FETCH_ADMINS_REQUEST,FETCH_ADMINS_SUCCESS,FETCH_ADMINS_FAILURE} from './adminTypes'

const initialState = {
    loading: false,
    admins: [],
    error: ''
}

const adminreducer = (state = initialState, action) => {
    switch (action.type) {
    case FETCH_ADMINS_REQUEST:
        return {
        ...state,
        loading: true
        }
    case FETCH_ADMINS_SUCCESS:
        return {
        loading: false,
        admins: action.payload,
        error: ''
        }
    case FETCH_ADMINS_FAILURE:
        return {
        loading: false,
        admins: [],
        error: action.payload
        }
    default: return state
    }
}

export default adminreducer