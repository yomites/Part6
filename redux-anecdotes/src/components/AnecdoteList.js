import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'

const Anecdote = ({ anecdote, handleClick }) => {

    return (
        <div>
            {anecdote.content}
            <div>
                has {anecdote.votes}
                <button onClick={handleClick}>vote</button>
            </div>
        </div>
    )
}

const sortBlogsByVotes = (a, b) => b.votes - a.votes

const Anecdotes = () => {

    const dispatch = useDispatch()
    const anecdotes = useSelector(state => state.sort(sortBlogsByVotes))
    console.log('State now', anecdotes)

    return (
        <div>
            {
                anecdotes.map(anecdote =>
                    <Anecdote
                        key={anecdote.id}
                        anecdote={anecdote}
                        handleClick={() => dispatch(vote(anecdote.id))
                        }
                    />
                )
            }
        </div>
    )
}

export default Anecdotes