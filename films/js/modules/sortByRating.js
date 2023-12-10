function sortByRating(data) {
    const sortedFilms = data.sort((a, b) => a.imdbRating - b.imdbRating)
    const filmsNames = sortedFilms.map(value => `Title: ${value.title} Rating:${value.imdbRating}`).reverse()
    return filmsNames.join(", ")
}

module.exports = {
    sortByRating
}