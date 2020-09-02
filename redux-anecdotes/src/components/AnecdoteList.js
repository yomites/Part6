import React from 'react'
import { connect } from 'react-redux'
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

const Anecdotes = (props) => {
    const anecdotesSortedByVotes = props.anecdotes.sort(sortBlogsByVotes)

    return (
        <div>
            {
                anecdotesSortedByVotes.map(anecdote =>
                    <Anecdote
                        key={anecdote.id}
                        anecdote={anecdote}
                        handleClick=
                        {() => {
                            props.vote(anecdote)
                            props.setNotification(`You voted "${anecdote.content}"`, 5)}
                        }
                    />
                )
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    if (state.filter === "") {
        return {
            anecdotes: state.anecdotes
        }
    }

    return {
        anecdotes: state.anecdotes.filter(anecdote =>
            anecdote.content.toLowerCase().includes(state.filter.toLowerCase()))
    }
}

const mapDispatchToProps = {
    vote, setNotification
}

const ConnectedAnecdotes = connect(mapStateToProps, mapDispatchToProps)(Anecdotes)

export default ConnectedAnecdotes