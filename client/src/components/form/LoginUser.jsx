import React from 'react'
import axios from 'axios'
import {setLocalStorage} from "../../lib/utils"

export const LoginUser = (props) => {
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
            props.setUser(response.data.user)
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
        <button type="submit" onClick={e => {handelLoginEvent(e)}}></button>
    </form>
  )
}
