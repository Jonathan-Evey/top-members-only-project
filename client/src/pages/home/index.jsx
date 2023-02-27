import { useEffect, useContext } from "react"
import { UserContext } from "../../components/context/User"
import { Hero } from "./Hero"

export const HomePage = (props) => {
  const { user, setUser } = useContext(UserContext)

  useEffect(() => {
    document.title = props.title || "";
  }, [props.title])
    return (
      <main id="main">
        <Hero />
        
      </main>

    )
  }