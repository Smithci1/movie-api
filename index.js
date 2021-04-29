const express = require('express')
const movies = require('./movies')
const {getMovies, gettitleorDirector, nono} = require('./controller/movies')
const app = express()
app.use(express.json())
 app.get('/movies', getMovies)
 app.get('/movies/:lookup', gettitleorDirector)
 app.all('*', nono)
 app.listen(2270, () => {
     console.log('i am 2270')
 })
 