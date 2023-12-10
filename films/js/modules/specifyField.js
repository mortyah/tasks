function getSpecifyFields(data) {
    const result = []
    for (film of data) {
        const filmDataToResult = {
            "id": film.id,
            "title": film.title,
            "released": film.released,
            "plot": film.plot
        }
        result.push(filmDataToResult)
    }
    return result
}

module.exports = {
    getSpecifyFields
}