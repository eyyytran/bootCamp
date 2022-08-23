const initialState = {
    weather: [],
    location: '',
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_WEATHER':
            if (state.weather.length === 5) {
                state.weather.splice(0, 1)
            }
            return { ...state, weather: [action.payload, ...state.weather] }
        case 'SET_LOCATION':
            return { ...state, location: action.payload }
        default:
            return state
    }
}

export default rootReducer
