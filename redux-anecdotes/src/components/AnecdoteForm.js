import React from 'react'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const NewAnecdote = (props) => {
    
    const addAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        if (content === '') {
            return
        }
        props.createAnecdote(content)
        props.setNotification(`added anecdote "${content}"`, 5)
    }

    return (
        <form onSubmit={addAnecdote}>
            <h2>create new</h2>
            <input name="anecdote" />
            <button type="submit">create</button>
        </form>
    )
}

const mapDispatchToProps = {
    createAnecdote,
    setNotification
}

const ConnectedNewAnecdote = connect(null, mapDispatchToProps)(NewAnecdote)

export default ConnectedNewAnecdote