const router = require('express').Router();
const movie = require('../models/Movie.model');

router.get('/create', async (req , res , next) =>{
    try {
        await res.render('movies/new-movie');

    } catch (error) {
        console.log(error, 'error')        
    }
});

router.post('/create', async (req, res) => {
    try {
        const body = req.body;
        const newMovie = await movie.create(body);
        console.log(newCelebrity);
        
        res.redirect('/')
    } catch (error) {
        res.render('celebrities/new-celebrity')
    }
  })

module.exports = router;