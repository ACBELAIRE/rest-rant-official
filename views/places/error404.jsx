const React = require('react')
const Def = require('../default')

const error404Places(){
    return(
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this place!</p>
            </main>
        </Def>
    )
}
module.exports = error404Places