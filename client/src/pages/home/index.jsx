import { useContext } from "react"
import { UserContext } from "../../components/context/User"
import { LoginUser } from "../../components/form/LoginUser"

export const HomePage = () => {
  const { user, setUser } = useContext(UserContext)
    return (
      <>
        <div>Home{user ? `, welcome back ${user.name}!` : null}</div>
        <LoginUser />
        <button onClick={() => {
        console.log(user)
      }}>user</button>
      </>

    )
  }