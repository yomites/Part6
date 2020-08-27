const initialMessage = null

const notificationReducer = (state = initialMessage, action) => {
    console.log('ACTION: ', action)
    switch (action.type) {
      case 'SET_VOTE_MESSAGE':
        return `you voted "${action.content}"`
      case 'SET_SUCCESS_MESSAGE':
        return `added "${action.message}"`
      case 'SET_REMOVE_MESSAGE':
        return null
      default:
        return state
    }
  }

  export const voteChangeNotification = content => {
    return {
      type: 'SET_VOTE_MESSAGE',
      content,
    }
  }

  export const addNewAnecdoteNotification = message => {
    return {
      type: 'SET_SUCCESS_MESSAGE',
      message,
    }
  }

  export const removeNotificationMessage = () => {
    return {
      type: 'SET_REMOVE_MESSAGE',
    }
  }
  
  export default notificationReducer