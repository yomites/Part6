import React from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { addNewAnecdoteNotification, removeNotificationMessage } from '../reducers/notificationReducer'

const NewAnecdote = (props) => {
    const dispatch = useDispatch()

    const addAnecdote = (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        if (content === '') {
            return
        }
        dispatch(createAnecdote(content))
        dispatch(addNewAnecdoteNotification(content))
        setTimeout(() => {
            dispatch(removeNotificationMessage())
        }, 5000)
    }

    return (
        <form onSubmit={addAnecdote}>
            <h2>create new</h2>
            <input name="anecdote" />
            <button type="submit">create</button>
        </form>
    )
}

export default NewAnecdote