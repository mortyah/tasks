function getFilmByYear(data, year) {
    const resultFilms = []
    for (film of data) {
        if (film.year === year)
            resultFilms.push(film)
    }
    return resultFilms
}

module.exports = {
    getFilmByYear
}