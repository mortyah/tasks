const data = require("./films.json")
const {getGenres} = require("./modules/getGenres")
const {getActors} = require("./modules/getActors")
const {sortByRating} = require("./modules/sortByRating")
const {getSpecifyFields} = require("./modules/specifyField")
const {getFilmByYear} = require("./modules/getFilmByYear")
const {getFilmByName} = require("./modules/getFilmByName")
const {getFilmByNameOrPlot} = require("./modules/getFilmByNameOrPlot")
const {getFilmByArgAndValue} = require("./modules/getFilmByArgAndValue")


const manager = {
    getGenres: () => getGenres(data),
    getActors: () => getActors(data),
    sortByRating: () => sortByRating(data),
    getSpecifyFields: () => getSpecifyFields(data),
    getFilmByYear: (year) => getFilmByYear(data, year),
    getFilmByName: (filmName) => getFilmByName(data, filmName),
    getFilmByNameOrPlot: (fetchData) => getFilmByNameOrPlot(data, fetchData),
    getFilmByArgAndValue: (argument, value) => getFilmByArgAndValue(data, argument, value)
}

console.log(manager.getGenres(), "\n")
console.log(manager.getActors(), "\n")
console.log(manager.sortByRating(), "\n")
console.log(manager.getSpecifyFields(), "\n")
console.log(manager.getFilmByYear(2001), "\n")
console.log(manager.getFilmByName("Black"))
console.log(manager.getFilmByNameOrPlot("Harry, Ron,"))
console.log(manager.getFilmByArgAndValue("actors", "daniel"))