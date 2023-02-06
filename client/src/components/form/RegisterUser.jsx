import React from 'react'
import axios from 'axios'

export const RegisterUser = () => {
    const handelRegisterEvent = (e) => {
        e.preventDefault()
        const formData = {
            username: username.value,
            useremail: useremail.value,
            password: password.value
        }
        axios({
            url: "http://localhost:5000/api/users/register",
            method: "POST",
            data: formData,
        }).then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
  return (
    <form action="" method="post">
        <label htmlFor="username">Display Name:</label>
        <input type="text" name="username" id="username" />
        <label htmlFor="useremail">email:</label>
        <input type="email" name="useremail" id="useremail" />
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" id="password" />
        <button type="submit" onClick={e => {handelRegisterEvent(e)}}></button>
    </form>
  )
}
