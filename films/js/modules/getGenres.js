function getGenres(data) {
    const resultGenres = []
    const allGenres = data.map(film => film.genre.map((genre) => {
        if (!resultGenres.includes(genre)) 
            resultGenres.push(genre)
            return genre
    }))

    return resultGenres.join(", ")
}

module.exports = {
    getGenres
}