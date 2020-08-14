import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createAnecdote } from './reducers/anecdoteReducer'

const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  console.log('Anecdotes', anecdotes)

  const vote = (id) => {
    console.log('vote', id)
    dispatch({
      type: 'VOTING',
      data: { 
        id
      }
    })
  }

  const addAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    dispatch(createAnecdote(content))
    
  }

  const sortBlogsByVotes = anecdotes.sort(function (a, b) {
    return b.votes - a.votes
  })
  
  return (
    <div>
      <h2>Anecdotes</h2>
      {sortBlogsByVotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name="anecdote" /></div>
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default App