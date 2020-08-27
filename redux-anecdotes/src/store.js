import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import anecdoteReducer from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer'

const reducer = combineReducers({ 
    allAnecdotes: anecdoteReducer,
    message: notificationReducer
})

const store = createStore(reducer, composeWithDevTools())

export default store