import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { isLoggedIn, logout } from '../../lib/utils'

export const UserContext = React.createContext()

export const UserProvider = (props) => {
    const [user, setUser] = useState(null)

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

    useEffect(() => {
        if (isLoggedIn()) {
            authUser()
          } else {
            logout()
          }
    })
  return (
    <UserContext.Provider value={{user, setUser}}>
        {props.children}
    </UserContext.Provider>
  )
}
