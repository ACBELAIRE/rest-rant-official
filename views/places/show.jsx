const React = require('react')
const Def = require('../default')

function show (data) {
    let comments =(
      <h3 className='inactive'>
        No Comments Yet!
      </h3>
    )
    let rating = (
      <h3 className='inactive'>
        Not yet rated
      </h3>
    )
    if (data.place.comments.length) {
      let sumRatings = data.place.comments.reduce((tot, c) => {
        return tot + c.stars
      }, 0)
      let averageRating = Math.round(sumRatings / data.place.comments.length)
      let stars = ''
      for (let i = 0; i < averageRating; i++) {
        stars += '⭐️'
      }
      rating = (
        <h3>
          {stars} stars
        </h3>
      )

      comments = data.place.comments.map(c => {
        return (
          <div className="border">
            <h2 className="rant">{c.rant ? 'Rant! ðŸ˜¡' : 'Rave! ðŸ˜»'}</h2>
            <h4>{c.content}</h4>
            <h3>
              <stong>- {c.author}</stong>
            </h3>
            <h4>Rating: {c.stars}</h4>
          </div>
        )
      })
    }
    return (
        <Def>
          <main>
            <div className='row'>
                <div className='col-sm-6'>
                <br></br>
                  <img src= {data.place.pic} alt={data.place.name} width='375' height="375"/>
                  <h3> Located in {data.place.city}, {data.place.state}</h3>
                </div>
       
              <div className='col-sm-6'>
                <div className='description'>
                <br></br>
                <br></br>
                <h1>{data.place.name}</h1>
                  <h2>Rating</h2>
                     {rating}

                  <h2>Description</h2>
                  <h3>{data.place.showEstablished()} </h3>
                  <h4> Serving Up  {data.place.cuisines}</h4>
                
                  <div className='buttons'>
                    <a href={`/places/${data.id}/edit`} className='btn btn-warning'>
                      Edit<i class="bi bi-pencil-square"></i>
                    </a>
                      <form  method="POST" action={`/places/${data.id}?_method=DELETE`}> 
                          <button type="submit" className="btn btn-danger">
                              Delete
                          </button>
                      </form> 
                    </div>
                </div>
              </div>
            </div>
            
              <div className='comments'>
                <h2>Comments</h2>
                <div className='cbox'>
                {comments}
                </div>
              </div>


              <h2> Got Your Own Rant or Rave?</h2>
              <form className='Comment-Form' method="POST" action={`/places/${data.place.id}/comment`}>
                    <div class='row'>
                      <div class="col-sm">
                      <div className='form-group'>
                           <label htmlFor="author">Author</label>
                           <input className='form-control' type="text" id="author" name="author"  required/>
                      </div>
                      </div>

                      <div class="col-sm">
                        <div className='form-group'>
                       <label htmlFor="rate">Rating</label>
                       <br></br>
                            <input  type="range" id="stars" name="stars" min="1" max="5" step=".5" required/>
                        </div>
                        </div>

                        <div class="col-sm">
                        <div className='form-group'>
                        <label htmlFor="rant">Is This A Rant?</label>
                        <br></br>
                           <input type="checkbox" id="rant" name="rant"  />
                      </div>
                    </div>
                  </div>

                      <div className='form-group'>
                        <label htmlFor="content">Content</label>
                            <textarea className='form-control' id="content" name="content"  required/>
                      </div>

                       <input className='btn btn-primary' type="submit" value="Add Comment" />

                    </form>
          </main>
        </Def>
    )
}

module.exports = show
