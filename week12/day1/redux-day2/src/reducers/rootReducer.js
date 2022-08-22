const initialState = {
    weather: [],
    location: '',
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_WEATHER':
            return { ...state, weather: [...state.weather, action.payload] }
        case 'SET_LOCATION':
            return { ...state, location: action.payload }
        default:
            return state
    }
}

export default rootReducer
