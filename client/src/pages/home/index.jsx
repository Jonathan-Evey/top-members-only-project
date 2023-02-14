import { useContext } from "react"
import { UserContext } from "../../components/context/User"
import { logout } from "../../lib/utils"

export const HomePage = () => {
  const { user, setUser } = useContext(UserContext)

  const userLogout = () => {
      logout()
      setUser(null)

  }
    return (
      <>
        <div>Home{user ? `, welcome back ${user.name}!` : null}</div>

        <button onClick={() => {
        console.log(user)
      }}>user</button>
        
      </>

    )
  }