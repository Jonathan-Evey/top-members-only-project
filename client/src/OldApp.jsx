import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { RegisterUser } from './components/form/RegisterUser'
import { LoginUser } from './components/form/LoginUser'
import { isLoggedIn, logout } from './lib/utils.js'
import { UserAuthBtn } from './components/buttons/UserAuthBtn'

const App = () => {
  const [user, setUser] = useState(null)
  const [showLogin, setShowlLogin] = useState(false)
  const getData = async() => {
    const res = await axios.get('/api/users')
    setUsers(res.data)
  }

  const authUser = async() => {
    let token = localStorage.getItem('token');
    axios.get(
      "http://localhost:5000/api/users/auth",
      {headers: {
        "Authorization": token
      }}
  ).then(function (response) {
    if (response.status === 200) {
      setUser(response.data);
    }
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  const userLoginToggle = () => {
    if (user) {
      setUser(null)
      logout()
    } else {
      setShowlLogin(true)
    }
  }

  useEffect(() => {
    if (isLoggedIn()) {
      authUser()
    } else {
      logout()
    }
  }, [])
 
  return (
    <div>
      {user ? <UserAuthBtn onClickEvent={userLoginToggle} text={"Logout"}/> : <UserAuthBtn onClickEvent={userLoginToggle} text={"Login"}/>}
      {user ? <h4 key={user._id}>userName : {user.name}</h4> : null}
      
      <LoginUser setUser={setUser}/>
      <button onClick={() => {
        console.log(user)
      }}>user</button>
    </div>
  )
}

export default App
