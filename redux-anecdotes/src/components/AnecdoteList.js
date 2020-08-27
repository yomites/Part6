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
    const anecdotes = useSelector(state => state.allAnecdotes.sort(sortBlogsByVotes))
    console.log('State now', anecdotes)

    return (
        <div>
            {
                anecdotes.map(anecdote =>
                    <Anecdote
                        key={anecdote.id}
                        anecdote={anecdote}
                        handleClick={() =>
                            dispatch(vote(anecdote.id),
                                dispatch(voteChangeNotification(anecdote.content)),
                                setTimeout(() => {
                                    dispatch(removeNotificationMessage())
                                }, 5000))
                        }
                    />
                )
            }
        </div>
    )
}

export default Anecdotes