import React from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { addNewAnecdoteNotification, removeNotificationMessage } from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'

const NewAnecdote = (props) => {
    const dispatch = useDispatch()
    const timerFunction = (myFunction, time) => {
        setTimeout(() => {
            dispatch(myFunction())
        }, time)
    }

    const addAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        if (content === '') {
            return
        }
        const newAnecdote = await anecdoteService.createNewAnecdote(content)
        dispatch(createAnecdote(newAnecdote))
        dispatch(addNewAnecdoteNotification(newAnecdote.content))
        timerFunction(removeNotificationMessage, 5000)
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