const React = require('react')
const Def = require('../default')

function show (data) {
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
                  <p>Currently unrated</p>

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
              <hr></hr>
              <div className='comments'>
                <h2>Comments</h2>
                <p> No Comments Here Yet!</p>
            </div>
          </main>
        </Def>
    )
}

module.exports = show
