import React, { useContext } from 'react'
import UserContext from '../context/UserContext'


const Profile = () => {

    const {user} = useContext(UserContext)  

  return (
    <div>
         {!user ? <h1>hello there</h1> : <h1>Hello {user.username}</h1> }
    </div>
  )
}

export default Profile