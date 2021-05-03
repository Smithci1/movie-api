const express = require('express')
const movies = require('./movies')
const {getMovies, gettitleorDirector, addnewMovie} = require('./controller/movies')
const app = express()
app.get('/movies', getMovies)
app.get('/movies/:lookup', gettitleorDirector)
app.use(express.json())
app.post('/movies', addnewMovie )
 app.all('*', (req,res) => {
     return res.sendStatus(404)
 })
 app.listen(2270, () => {
     console.log('i am 2270')
 })
 