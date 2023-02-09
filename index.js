//Modules and Globals
require('dotenv').config()
const express = require('express')
const app = express()

//express settings
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))

//Controllers & Routes
app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.render('home')
})
app.get('*',(req,res)=> {
    res.status(404).render('error404')
})

//Listen for Connections
app.listen(process.env.PORT)

