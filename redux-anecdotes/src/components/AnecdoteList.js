import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

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

    const allAnecdotes = useSelector(({ filter, allAnecdotes }) => {
        if (filter === "") {
            return allAnecdotes
        }
        return allAnecdotes.filter(element =>
            element.content.toLowerCase().includes(filter.toLowerCase()))
    })
    const anecdotesToShow = allAnecdotes.sort(sortBlogsByVotes)
    console.log('State now', anecdotesToShow)

    return (
        <div>
            {
                anecdotesToShow.map(anecdote =>
                    <Anecdote
                        key={anecdote.id}
                        anecdote={anecdote}
                        handleClick={() =>
                            dispatch(vote(anecdote),
                            dispatch(setNotification(`You voted "${anecdote.content}"`, 5)))
                        }
                    />
                )
            }
        </div>
    )
}

export default Anecdotes