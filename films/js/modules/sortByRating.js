function sortByRating(data) {
    const sortedFilms = data.sort((a, b) => a.imdbRating - b.imdbRating).reverse()
    return sortedFilms
}

module.exports = {
    sortByRating
}
