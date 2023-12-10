function getFilmByNameOrPlot(data, fetchData) {
    const resultFilms = []
    fetchData = fetchData.toLowerCase()
    for (film of data) {
        const title = film.title.toLowerCase()
        const plot = film.plot.toLowerCase()
        if (title.includes(fetchData) || plot.includes(fetchData))
            resultFilms.push(film)
    }
    return resultFilms
}

module.exports = {
    getFilmByNameOrPlot
}