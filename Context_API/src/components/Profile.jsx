import React, {useContext} from 'react'
import UserContext from '../Context/UserContext'

function Profile() {

    const {user} = useContext(UserContext)
    if(!user)  return <div>Please login </div>

    return (
        <>
        <h2>Logged In</h2>
        <div>Welcome {user.username}</div>
        </>
    )

  
  
}

export default Profile
