const router = require('express').Router()
const places = require('./models/places.js')

router.get('/', (req, res) => {
    res.render('places/index',{places})
})

router.get('/new', (req, res) => {
  res.render('places/new')
})

router.post('/', (req, res) => {
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = 'https://publish.purewow.net/wp-content/uploads/sites/2/2020/12/littlebeettable-healthy-restaurants-nyc.jpg?fit=728%2C524'
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
  if (!req.body.state) {
    req.body.state = 'USA'
  }
  places.push(req.body)
  res.redirect('/places')
})



module.exports = router

