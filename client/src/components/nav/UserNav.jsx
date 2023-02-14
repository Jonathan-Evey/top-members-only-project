import { useContext, useEffect, useState } from "react"
import { UserContext } from "../context/User"
import { UserAuthBtn } from "../buttons/UserAuthBtn"
import { UserAccountNav } from  './UserAccountNav'
import { UserAccountNavBtn } from "../buttons/UserAccountNavBtn"
import { UserAuthModal } from "../modals/UserAuthModal"

export const UserNav = () => {
    const { user, setUser } = useContext(UserContext)
    
    const [isAccountNavOpen, setIsAccountNavOpen] = useState(false)
    const [modalForm, setModalForm] = useState("login")

    const removeClass = () => {
        setTimeout(() => {
            let userNav = document.querySelector(".nav__user-account")
            userNav.classList.remove("display-none")
        },250)
    }

    const openModal = () => {
        let modal = document.querySelector(".modal__user-auth")
        modal.classList.remove("open")
        modal.showModal()
        modal.classList.add("open")
    }

    const openLoginModal = () => {
        setModalForm("login")
        openModal()
    }

    const openRegisterModal = () => {
        setModalForm("register")
        openModal()
    }

    useEffect(() => {
        if (user) {
            let userNav = document.querySelector(".nav__user-account")
            if (userNav.classList.contains("display-none")) {
                removeClass()
            }
            if (user.isDarkTheme) {
                let rootElemment =  document.getElementById("root")
                rootElemment.classList.add("dark-theme")
            }
            
        } 
    })
  return (
    <nav>
        {!user ? (
        <ul className="flex-group">
            <li>
                <UserAuthBtn onClickEvent={openLoginModal} dataType="light" text="Login"/>
            </li>
            <li>
                <UserAuthBtn onClickEvent={openRegisterModal} dataType="accent" text="Sign Up"/>
            </li>
            <UserAuthModal modalForm={modalForm}/>
                </ul>) 
            : 
        <ul>    
            <li>
                <UserAccountNavBtn user={user} isAccountNavOpen={isAccountNavOpen}  setIsAccountNavOpen={setIsAccountNavOpen}/>
            </li>
            <li aria-hidden={!isAccountNavOpen ? "true" : "false"} className="nav__user-account display-none">
                <UserAccountNav setIsAccountNavOpen={setIsAccountNavOpen} setUser={setUser} isShown={isAccountNavOpen} /> 
            </li> 
        </ul>}
 
    </nav>
  )
}
