import axios from 'axios'
import {FETCH_DONATIONS_REQUEST,FETCH_DONATIONS_SUCCESS,FETCH_DONATIONS_FAILURE} from './donationTypes'

export const fetchDonations = () => {
    return (dispatch) => {
        dispatch(fetchDonationsRequest())
    axios.get(`http://localhost:8080/donations`)
            .then(response => {
                                                // response.data is the users
            const donations = response.data
            dispatch(fetchDonationsSuccess(donations))
            }
        )
            .catch(error => {
                              // error.message is the error message
                    dispatch(fetchDonationsFailure(error.message))
                }
            )
    }
}

export const fetchDonationsRequest = () => {
    return {
    type: FETCH_DONATIONS_REQUEST
    }
}

export const fetchDonationsSuccess = donations => {
    return {
        type: FETCH_DONATIONS_SUCCESS,
        payload: donations
    }
}

export const fetchDonationsFailure = error => {
    return {
        type: FETCH_DONATIONS_FAILURE,
        payload: error
    }
}