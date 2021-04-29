const movies = require('../movies.js')
const nono = (req,res) => {
    return res.sendStatus(404)
}
const getMovies = (req,res) => {
    return res.send(movies)
}
const gettitleorDirector = (req,res) => {
    const { lookup } = req.params
    const movie = movies.filter(movie => {
        return movie.title.toLowerCase().
          includes(lookup.toLowerCase()) ||
          movie.directors.find(director => 
          director.toLowerCase().
          includes(lookup.toLowerCase()))
      })
      if (!movie.length){
           return nono()
      }
      return res.send(movie)
    }


module.exports = { getMovies, gettitleorDirector, nono}
    