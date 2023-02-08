const router = require('express').Router()

router.get('/', (req, res) => {
    let places = [{
            name: 'Mega-Bytes',
            city: 'Las Vegas',
            state: 'NV',
            cuisines: 'Desserts, Bakery',
            pic: 'https://www.mommytravels.net/wp-content/uploads/2018/11/Cafe-Hollywood.png'
          }, {
            name: 'Back-End Devities',
            city: 'Philadelphia',
            state: 'PA',
            cuisines: 'Italian',
            pic: 'https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/Top-10-Traditional-Foods-in-Italy-1140x694.jpg'
          }, {
            name: 'Codings Crossaints',
            city: 'New York City',
            state: 'NY',
            cuisines: 'French, Bakery',
            pic: 'https://breadsandsweets.com/wp-content/uploads/2021/08/croissant-pic-4.jpg'
          },{
            name: 'Booleans Beans',
            city: 'Seattle',
            state: 'WA',
            cuisines: 'Coffee',
            pic: 'https://cdn.luxe.digital/media/2020/05/07203610/best-coffee-beans-luxe-digital.jpg.webp'
          },{
            name: 'Hamburger Hackers',
            city: 'Silicon Valley',
            state: 'CA',
            cuisines: 'American',
            pic: 'https://assets.biggreenegg.eu/app/uploads/2017/12/05133526/topimage-mango-filled-hamburgers-800x500.jpg'
          },
        ]

    res.render('places/index',{places})
})

module.exports = router

