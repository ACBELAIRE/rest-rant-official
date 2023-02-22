const React = require('react')
const Def = require('./default')

function home() {
    return (
    <Def>
        <main>
            <h1>REST-Rant</h1>
            <div className='row'>
                <img src="/images/pastaDish.jpg" alt="Photo of Pasta Dish on a white plate" />
                <div>
                    Photo by <a href="https://unsplash.com/@eaterscollective?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Eaters Collective</a> on <a href="https://unsplash.com/photos/ddZYOtZUnBk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                </div>
            
                <img src="/images/bakeryshop.jpg" alt="Bakery Shop Display Case with Desserts" />
                <div>
                    Photo by <a href="https://unsplash.com/@ulysse_pcl?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ulysse Pointcheval</a> on <a href="https://unsplash.com/photos/1WmlAiYgnoI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                </div>
            
                <img src="/images/homepage burger.jpg" alt="Photo of Burger on rectangular white plate" />
                <div>
                    Photo by <a href="https://unsplash.com/@eaterscollective?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Eaters Collective</a> on <a href="https://unsplash.com/photos/GxjFjm6XnyM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                </div>
            </div>
            <a href="/places">
                <button className="btn-primary">Places Page</button>
            </a>
        </main>
    </Def>
)
}

module.exports = home