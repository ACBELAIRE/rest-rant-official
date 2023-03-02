const router = require('express').Router()

router.get('/', (req, res) => {
    let places = [{
            name: 'Mega-Bytes',
            city: 'Las Vegas',
            state: 'NV',
            cuisines: 'Desserts, Bakery',
            pic: '/images/megabytes.png'
          }, {
            name: 'Back-End Devities',
            city: 'Philadelphia',
            state: 'PA',
            cuisines: 'Italian',
            pic: '/images/devities.jpg'
          }, {
            name: 'Codings Crossaints',
            city: 'New York City',
            state: 'NY',
            cuisines: 'French, Bakery',
            pic: '/images/croissants.jpg'
          },{
            name: 'Booleans Beans',
            city: 'Seattle',
            state: 'WA',
            cuisines: 'Coffee',
            pic: '/images/booleansbeans.jpg'
          },{
            name: 'Hamburger Hackers',
            city: 'Silicon Valley',
            state: 'CA',
            cuisines: 'American',
            pic: '/images/hackersburgers.jpg'
          },
        ]

    res.render('places/index',{places})
})

router.get('/new', (req, res) => {
  res.render('places/new')
})


module.exports = router

