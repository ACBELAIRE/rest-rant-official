const React = require('react')
const Def = require('./default')

function home() {
    return (
    <Def>
        <main>
            <h1>HOME</h1>
            <div>
                <img src="/images/pastaDish.jpg" alt="Photo of Pasta Dish on a white plate" />
                <div>
                    Photo by <a href="https://unsplash.com/@eaterscollective?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Eaters Collective</a> on <a href="https://unsplash.com/photos/ddZYOtZUnBk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
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