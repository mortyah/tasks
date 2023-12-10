function getFilmByName(data, filmName) {
    const resultFilms = []
    for (film of data) {
        if (film.title.toLowerCase().includes(filmName.toLowerCase()))
            resultFilms.push(film)
    }
    return resultFilms
}

module.exports = {
    getFilmByName
}