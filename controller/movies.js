const { request } = require('express')
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
           return nono
      }
      return res.send(movie)
    }
const addnewMovie = (req,res) => {
    const {title, directors, runTime, 
        genres, releaseDate, rating} = req.body
 if (!title || !directors || !runTime || !genres
    || !releaseDate || !rating){
        return res.sendStatus(400)
        .send('You have not presented the required fields')
    }
    const recentlyAdded = {
        title, directors, releaseDate,
         rating, runTime, genres}
        movies.push(recentlyAdded)
         return res.status(201)
         .send(recentlyAdded)
}


module.exports = { getMovies, gettitleorDirector, nono, addnewMovie}
    