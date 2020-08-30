import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { voteChangeNotification, removeNotificationMessage } from '../reducers/notificationReducer'

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
    const timerFunction = (myFunction, time) => {
        setTimeout(() => {
            dispatch(myFunction())
        }, time)
    }
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
                            dispatch(vote(anecdote.id),
                                dispatch(voteChangeNotification(anecdote.content)),
                                timerFunction(removeNotificationMessage, 5000))
                        }
                    />
                )
            }
        </div>
    )
}

export default Anecdotes