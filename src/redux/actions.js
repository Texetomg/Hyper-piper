export const searchFilms = (films) => {
    return {
        type: "SEARCH_FILMS",
        payload: films
    }
}

export const selectFilm = (film) => {
    return {
        type: "SELECT_FILM",
        payload: film
    }
}
