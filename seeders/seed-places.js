const db = require('../controllers/models')

db.Place.create([{
    name: 'Mega-Bytes',
    city: 'Las Vegas',
    state: 'NV',
    cuisines: 'Desserts, Bakery',
    pic: '/images/megabytes.png',
    founded: 2021
  }, {
    name: 'Back-End Devities',
    city: 'Philadelphia',
    state: 'PA',
    cuisines: 'Italian',
    pic: '/images/devities.jpg',
    founded: 2022
  }, {
    name: 'Codings Crossaints',
    city: 'New York City',
    state: 'NY',
    cuisines: 'French, Bakery',
    pic: '/images/croissants.jpg',
    founded: 2020
  },{
    name: 'Booleans Beans',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Coffee',
    pic: '/images/booleansbeans.jpg',
    founded: 2023
  },{
    name: 'Hamburger Hackers',
    city: 'Silicon Valley',
    state: 'CA',
    cuisines: 'American',
    pic: '/images/hackersburgers.jpg',
    founded: 2019
}])
.then(() => {
    console.log('Success!')
    process.exit()
})
.catch(err => {
    console.log('Failure!', err)
    process.exit()
})
