import {FETCH_DONATIONS_REQUEST,FETCH_DONATIONS_SUCCESS,FETCH_DONATIONS_FAILURE} from './donationTypes'

const initialState = {
    loading: false,
    donation: [],
    error: ''
}

const donationreducer = (state = initialState, action) => {
    switch (action.type) {
    case FETCH_DONATIONS_REQUEST:
        return {
        ...state,
        loading: true
        }
    case FETCH_DONATIONS_SUCCESS:
        return {
        loading: false,
        donation: action.payload,
        error: ''
        }
    case FETCH_DONATIONS_FAILURE:
        return {
        loading: false,
        donation: [],
        error: action.payload
        }
    default: return state
    }
}

export default donationreducer