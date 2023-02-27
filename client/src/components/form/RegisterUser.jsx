import React, { useState } from 'react'
import axios from 'axios'
import { isSymbolsError  } from './validation'
import { registerErrorKeys } from './errorKeys'

export const RegisterUser = (props) => {
  const [userNameError, setUserNameError] = useState(false)
  const [userNameUsedError, setUserNameUsedError] = useState(false)
  const [userNameHasSymbolsError, setUserNameHasSymbolsError] = useState(false)
  const [userNameNullError, setUserNameNullError] = useState(false)
  const [userNameToLongError, setUserNameToLongError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [confirmEmailError, setConfirmEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [confirmPasswordError, setConfirmPasswordError] = useState(false)


    const validateUsername = (e) => {
      if (e.target.value.trim() !== "") {
        setUserNameNullError(false)
       if (isSymbolsError(e.target.value)) {
          setUserNameError(true)
          setUserNameHasSymbolsError(true)
       } else if (e.target.value.trim().length > 64){
          setUserNameToLongError(true)
          setUserNameError(true)
       } else {
        setUserNameHasSymbolsError(false)
       }
      } else {
        e.target.value = ""
        setUserNameNullError(true)
        setUserNameError(true)
      }
    }

    const emailMatch = (e) => {
      let firstEmail = document.getElementById('useremail')
      if (e.target.value.toString() !== firstEmail.value.toString()) {
        setConfirmEmailError(true)
      } else {
        setConfirmEmailError(false)
      }
    }

    const removeConfirmEmailError = (e) => {
      if (e.target.value.trim() !== "" && confirmEmailError) {
        let firstEmail = document.getElementById('useremail')
        if (e.target.value.toString() !== firstEmail.value.toString()) {
          setConfirmEmailError(true)
        } else {
          setConfirmEmailError(false)
        }
      }
    }

    const passwordLength = (e) => {
      if (e.target.value.length >= 8) {
        setPasswordError(false)
      } else {
        setPasswordError(true)
      }
    }

    const removeUserNameError = (e) => {
      if (e.target.value.trim() !== "" && userNameError) {
        if (!isSymbolsError(e.target.value)) {
          setUserNameError(false)
          setUserNameUsedError(false)
          setUserNameHasSymbolsError(false)
          setUserNameNullError(false)
          if (e.target.value.trim().length <= 64) {
            setUserNameToLongError(false)
          } else {
            setUserNameError(true)
          }
        }
      }
    }

    const handelRegisterEvent = (e) => {
        e.preventDefault()
        let userImgNumber = Math.floor(Math.random() * 12) + 1
        const formData = {
            username: username.value,
            useremail: useremail.value,
            password: password.value,
            userImgNumber: userImgNumber,
        }
        axios({
            url: "http://localhost:5000/api/users/register",
            method: "POST",
            data: formData,
        }).then(function (response) {
            
            if (response.data.message === registerErrorKeys.userNameUsed) {
              setUserNameError(true)
              setUserNameUsedError(true)
            }
          })
          .catch(function (error) {
            console.log(error);
          });
    }
  return (
    <form action="" method="post">
        <div className='flex margin-block-end-1'>
          <label htmlFor="username">Display Name</label>
          <span>-</span>
          <p className='fs-300'>Display name may include letters and numbers</p>
        </div>
        <input className={`${userNameError ? "error" : ""}`} type="text" name="username" id="username" onBlur={(e) => {validateUsername(e)}} onChange={(e) => {removeUserNameError(e)}}/>
        {userNameUsedError ? (
          <div>
            <p className='error | fs-300 fw-bold'>Display name already in use</p>
          </div>
        ) : null}
        {userNameHasSymbolsError ? (
          <div>
            <p className='error | fs-300 fw-bold'>Display name cannot include symbols</p>
          </div>
        ) : null}
        {userNameNullError ? (
          <div>
            <p className='error | fs-300 fw-bold'>Please include a display name</p>
          </div>
        ) : null}
        {userNameToLongError ? (
          <div>
            <p className='error | fs-300 fw-bold'>Display may not be over 64 characters long</p>
          </div>
        ) : null}
        <div className='flex margin-block-end-1'>
          <label htmlFor="useremail">email</label>
          <span>-</span>
          <p className='fs-300'>Email will be used for account login and password updates</p>
        </div>
        <input type="email" name="useremail" id="useremail" />
        {emailError ? (
          <div>
            <p>Please enter a valid email.</p>
            </div>
        ) : null}
        <div className='flex margin-block-end-1'>
          <label htmlFor="confirm-useremail">Confirm email</label>
        </div>
        <input className={`${confirmEmailError ? "error" : ""}`} type="email" name="confirm-useremail" id="confirm-useremail" onBlur={(e) => {emailMatch(e)}} onChange={(e) => {removeConfirmEmailError(e)}}/>
        {confirmEmailError ? (
          <div>
            <p className='error | fs-300 fw-bold'>Emails did not match please verify email entries</p>
          </div>
        ) : null}
        <div className='flex margin-block-end-1'>
          <label htmlFor="password">Password</label>
          <span>-</span>
          <p className='fs-300'>Password must be at least 8 characters long</p>
        </div>
        <input className={`${passwordError ? "error" : ""}`} type="password" name="password" id="password" onBlur={(e) => {passwordLength(e)}}/>
        {passwordError ? (
          <div>
            <p className='error | fs-300 fw-bold'>Password must be at least 8 characters long</p>
          </div>
        ) : null}
        <div className='flex margin-block-end-1'>
          <label htmlFor="confirm-password">Confirm Password</label>
        </div>
        <input type="password" name="confirm-password" id="confirm-password" />
        {confirmPasswordError ? (
          <div>
            <p>Passwords do not match, please confirm your password entrys.</p>
          </div>
        ) : null}
        <button data-type="primary" className='button' type="submit" onClick={e => {handelRegisterEvent(e)}}>submit</button>
    </form>
  )
}
