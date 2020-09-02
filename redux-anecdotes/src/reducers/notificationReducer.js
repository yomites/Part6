const initialMessage = null

const notificationReducer = (state = initialMessage, action) => {
  console.log('ACTION: ', action)
  switch (action.type) {
    case 'SET_SUCCESS_MESSAGE':
      return action.content
    case 'SET_REMOVE_MESSAGE':
      return null
    default:
      return state
  }
}

var timerId

export const setNotification = (content, time) => {
  return async dispatch => {
    clearTimeout(timerId)
    timerId = await setTimeout(() => {
      dispatch(clearNotificationMessage())
    }, time * 1000)
    dispatch({
      type: 'SET_SUCCESS_MESSAGE',
      content,
    })
  }
}

const clearNotificationMessage = () => {
  return {
    type: 'SET_REMOVE_MESSAGE',
  }
}

export default notificationReducer