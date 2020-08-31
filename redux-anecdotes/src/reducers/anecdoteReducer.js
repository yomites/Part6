import anecdoteService from '../services/anecdotes'

const anecdoteReducer = (state = [], action) => {

  switch (action.type) {
    case 'VOTING': {
      const id = action.data.id
      const anecdoteToVote = state.find(a => a.id === id)
      console.log('Anecdote To Vote', anecdoteToVote)
      const anecdoteAfterVote = {
        ...anecdoteToVote,
        votes: anecdoteToVote.votes + 1
      }
      console.log('Voted Anecdote', anecdoteAfterVote)
      return state.map(anecdote =>
        anecdote.id !== id ? anecdote : anecdoteAfterVote
      )
    }
    case 'NEW_ANECDOTE': {
      return [...state, action.data]
    }
    case 'INIT_ANECDOTES':
      return action.data
    default:
      return state
  }
}

export const vote = (anecdote) => {
  console.log('Identification', anecdote.id)
  return async dispatch => {
    const anecdoteOnVote = await anecdoteService.updateVote(anecdote.id, anecdote)
    dispatch({
      type: 'VOTING',
      data: anecdoteOnVote
    })
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNewAnecdote(content)
    dispatch({
      type: 'NEW_ANECDOTE',
      data: newAnecdote
    })
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes,
    })
  }
}

export default anecdoteReducer