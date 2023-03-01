import React, { useState } from 'react'



export const AuthModalContext = React.createContext()

export const AuthModalProvider = (props) => {
  const [modalForm, setModalForm] = useState("login")

  const openModal = () => {
    let modal = document.querySelector('.modal__user-auth');
    modal.classList.remove('open');
    modal.showModal();
    modal.classList.add('open');
  };
  
  const openLoginModal = () => {
    setModalForm('login');
    openModal();
  };
  
  const openRegisterModal = () => {
    setModalForm('register');
    openModal();
  };

  return (
    <AuthModalContext.Provider value={{modalForm, setModalForm, openLoginModal, openRegisterModal}}>
        {props.children}
    </AuthModalContext.Provider>
  )
}