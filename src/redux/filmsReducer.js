const initialState = {
    errors: null,
    currentFilm: null,
    searchedFilms: [],
}

const filmsReducer = (state = initialState, action) => {
    switch(action.type) {
        case "SEARCH_FILMS": {
            return {
                ...state,
                searchedFilms: action.payload
            }
        }
        case "SELECT_FILM": {
            return {
                ...state,
                currentFilm: action.payload
            }
        }
        default: return state
    }
}

export default filmsReducer
