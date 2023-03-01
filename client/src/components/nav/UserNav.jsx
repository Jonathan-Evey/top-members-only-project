import { useContext, useEffect, useState } from "react"
import { UserContext } from "../context/User"
import { UserAuthBtn } from "../buttons/UserAuthBtn"
import { UserAccountNav } from  './UserAccountNav'
import { UserAccountNavBtn } from "../buttons/UserAccountNavBtn"
import { UserAuthModal } from "../modals/UserAuthModal"
import { AuthModalContext } from "../context/AuthModal"

export const UserNav = () => {
    const { user, setUser } = useContext(UserContext)
    const { openRegisterModal, openLoginModal } = useContext(AuthModalContext)
    
    const [isAccountNavOpen, setIsAccountNavOpen] = useState(false)

    const removeClass = () => {
        setTimeout(() => {
            let userNav = document.querySelector(".nav__user-account")
            userNav.classList.remove("display-none")
        },250)
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
            <UserAuthModal />
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
