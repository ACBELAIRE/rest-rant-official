const req = require('express/lib/request')
const React = require('react')
const Def = require('../default')


function new_comment() {
    return (
        <Def>
           <main>
              <h1>Add a New Comment</h1>
             <form method="POST" action={`/places/${props.id}/rant`}>
                      <div className='form-group'>
                           <label htmlFor="author">Your Name</label>
                           <input className='form-control' type="text" id="author" name="author"  required/>
                      </div>
                        <div className='form-group'>
                        <label htmlFor="content">Content</label>
                            <input className='form-control' type="textarea" id="content" name="content"  required/>
                        </div>
                        <div className='form-group'>
                       <label htmlFor="rate">Star Rating</label>
                            <input className='form-control' type="range" id="rate" name="rate" min="0" max="5" required/>
                        </div>
                        <div className='form-group'>
                        <label htmlFor="rant">Rant</label>
                           <input className='form-control' type="checkbox" id="rant" name="rant"  />
                      </div>
                       <input className='btn btn-primary' type="submit" value="Add Comment" />
                    </form>
             </main>
         </Def>
    )
}

module.exports = new_comment
