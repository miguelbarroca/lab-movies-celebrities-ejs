const router = require('express').Router();
const celebrity = require('../models/Celebrity.model');

router.get('/create', async (req , res , next) =>{
    try {
        await res.render('celebrities/new-celebrity')
    } catch (error) {
        console.log(error, 'error')        
    }
});

router.post('/create', async (req, res) => {
    try {
        const body = req.body;
        const newCelebrity = await celebrity.create(body);
        console.log(newCelebrity);
        
        res.redirect('/')
    } catch (error) {
        res.render('celebrities/new-celebrity')
    }
  })

  router.get('/', async (req, res, next) => {
    try {
      const allCelebrities = await celebrity.find()
      console.log('All celebrites :', allCelebrities)
      res.render('celebrities/celebrities', { celebsArray : allCelebrities })
    } catch (error) {
      console.log('Route to all celebrities', error);
    }
  });

module.exports = router;
