import request from 'superagent'

export const RECEIVE_DRUMMERS = 'RECEIVE_DRUMMERS'
export const SHOW_ERROR = 'SHOW_ERROR'

export const receiveDrummers = (drummers) => {
    return {
        type: RECEIVE_DRUMMERS,
        drummers: drummers
    }
}

export const showError = (errorMessage) => {
    return {
        type: SHOW_ERROR,
        errorMessage: errorMessage
    }
}

export function fetchDrummers () {
    return (dispatch) => {
        return request.get('/api/v1/users')
        .then(res => {
            dispatch(receiveDrummers(res.body))
           
        })
        .catch(err => {
            dispatch(showError(err.message))
        })
    }
}