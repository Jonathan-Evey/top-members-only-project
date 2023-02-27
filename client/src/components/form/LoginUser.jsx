import React, { useContext } from 'react'
import { UserContext } from '../context/User'
import axios from 'axios'
import { setLocalStorage } from "../../lib/utils"

export const LoginUser = (props) => {
  const { user, setUser } = useContext(UserContext)
    const handelLoginEvent = (e) => {
        e.preventDefault()
        const formData = {
            useremail: useremail.value,
            password: password.value
        }
        axios({
            url: "http://localhost:5000/api/users/login",
            method: "POST",
            data: formData,
        }).then(function (response) {
            console.log(response);
            setUser(response.data.user)
            return setLocalStorage(response)
          })
          .catch(function (error) {
            console.log(error);
          });
    }
  return (
    <form action="" method="post">
        <label htmlFor="useremail">email:</label>
        <input type="email" name="useremail" id="useremail" />
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" id="password" />
        <button data-type="primary" className='button' type="submit" onClick={e => {handelLoginEvent(e)}}>Submit</button>
    </form>
  )
}
