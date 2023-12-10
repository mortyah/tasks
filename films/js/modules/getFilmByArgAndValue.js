function getFilmByArgAndValue(data, arg, value) {
    console.log(arg, value)
    const resultFilms = []
    for (let film of data) {
        if (Array.isArray(film[arg])) {
            for (item of film[arg]) {
                if (item.toLowerCase().includes(value.toLowerCase())) {
                    resultFilms.push(film)
                }
            }
        } else {
            if (film[arg].toLowerCase().includes(value.toLowerCase())) {
                resultFilms.push(film)
            }
        }
    }
    return resultFilms
}

module.exports = {
    getFilmByArgAndValue
}