import axios from 'axios'

const initialState = {
    services: []
}

const GET_SERVICES = 'GET_SERVICES'

export function getServices() {
    let data = axios.get('/api/services').then(res => {
        return res.data
    })
    return {
        type: GET_SERVICES,
        payload: data
    }
}

export default function reducer(state=initialState, action) {
    switch(action.type) {
        case GET_SERVICES + '_FULFILLED':
            return {...state, services: action.payload}
        default:
            return state
    }
}