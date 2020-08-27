import React from 'react'
import { useSelector } from 'react-redux'

const Notification = () => {
  const notification = useSelector(state => state.message)
  console.log('Notification', notification)
  if (notification === null) {
    return (
      <div>
        {notification}
      </div>
    )
  }
    const style = {
      border: 'solid',
      padding: 10,
      borderWidth: 1
    }

    return (
      <div style={style}>
        {notification}
      </div>
    )
  }

export default Notification