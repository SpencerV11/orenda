import axios from 'axios'

const initialState = {
    client: {}
}

const GET_DATA = 'GET_DATA'

export function getData() {
    let data = axios.get('/auth/client-data').then(res => res.data)
    return {
        type: GET_DATA,
        payload: data
    }
}

export default function reducer(state=initialState, action) {
    switch(action.type) {
        case GET_DATA + '_FULFILLED':
        return {client: action.payload}
        default: return state
    }
}