const movies = require('./movies')
 
const getMovies = (req,res) => {
    return res.send(movies)
}
// const getDirector = (req,res) => {
//     const
// }
const getMovieorDirector = (req,res) => {
    const {title} = req.params
    const moviesTitle = movies.filter((movie) => {
        return movie.title.toLowerCase().includes(title.toLowerCase())


module.exports = { getMovies, 
    getMovie}
    