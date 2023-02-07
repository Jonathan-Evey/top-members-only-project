import { useContext } from "react"
import { UserContext } from "../context/User"

export const UserNav = () => {
    const { user, setUser } = useContext(UserContext)
  return (
    <nav>
        <ul>
        {!user ? <>
            <li>
                <button>
                    Sign Up
                </button>
            </li>
            <li>
                <button onClick={() => {setUser("hello")}}>
                    Login
                </button>
            </li> 
                </> : null}


        </ul>
    </nav>
  )
}
