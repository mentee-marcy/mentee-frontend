import React from 'react'

const Welcome = ({user}) => {
  return (
    <div className='welcomeContainer'>
        <h1>Welcome {user}</h1>
        <h2>Select a chat to start Messaging</h2>
    </div>
  )
}

export default Welcome