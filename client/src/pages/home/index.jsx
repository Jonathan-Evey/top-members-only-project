import { useContext } from "react"
import { UserContext } from "../../components/context/User"
import { Hero } from "./Hero"

export const HomePage = () => {
  const { user, setUser } = useContext(UserContext)

    return (
      <main id="main">
        <Hero />
        
      </main>

    )
  }