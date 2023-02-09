import { useContext, useEffect, useState } from "react"
import { UserContext } from "../context/User"
import { UserAuthBtn } from "../buttons/UserAuthBtn"
import { UserAccountNav } from  './UserAccountNav'
import { UserAccountNavBtn } from "../buttons/UserAccountNavBtn"

export const UserNav = () => {
    const { user, setUser } = useContext(UserContext)
    
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
        } 
    })
  return (
    <nav>
        {!user ? (
        <ul className="flex-group">
            <li>
                <UserAuthBtn dataType="light" text="Login"/>
            </li>
            <li>
                <UserAuthBtn dataType="accent" text="Sign Up"/>
            </li> 
                </ul>) 
            : 
        <ul>    
            <li>
                <UserAccountNavBtn isAccountNavOpen={isAccountNavOpen}  setIsAccountNavOpen={setIsAccountNavOpen}/>
            </li>
            <li aria-hidden={!isAccountNavOpen ? "true" : "false"} className="nav__user-account display-none">
                <UserAccountNav setIsAccountNavOpen={setIsAccountNavOpen} setUser={setUser} isShown={isAccountNavOpen} /> 
            </li> 
        </ul>}
 
    </nav>
  )
}
