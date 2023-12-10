function getActors(data) {
    const resultActors = []
    const allGenres = data.map(film => film.actors.map((genre) => {
        if (!resultActors.includes(genre)) 
            resultActors.push(genre)
            return genre
    }))

    return resultActors.join(", ")
}

module.exports = {
    getActors
}