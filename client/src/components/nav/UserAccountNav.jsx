import axios from "axios"
import { useContext } from "react"
import { logout } from "../../lib/utils"
import { UserAuthBtn } from "../buttons/UserAuthBtn"
import { UserContext } from "../context/User"
import { Link } from "react-router-dom"

export const UserAccountNav = (props) => {
  const { user, setUser } = useContext(UserContext)
  const toggleTheme = () => {
    let rootElemment = document.getElementById("root")
    if (rootElemment.classList.contains("dark-theme")) {
      rootElemment.classList.remove("dark-theme")
    } else {
      rootElemment.classList.add("dark-theme")
    }
    const data = {
      id: user.id,
      isDarkTheme: !user.isDarkTheme
    }
    axios({
      url: "http://localhost:5000/api/users/theme",
      method: "POST",
      data: data,
    }).then(function (response) {
      if (response.status === 200) {
        let updatedUser = {...user, isDarkTheme: !user.isDarkTheme}
        setUser(updatedUser)
      }
      return 
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  const logOutUser = () => {
    props.setIsAccountNavOpen(false)
    logout()
    props.setUser(null)
  }
  const closeMenu = (e) => {
    props.setIsAccountNavOpen(false)
  }

  return (
    <ul onMouseLeave={closeMenu}>
        <li>
          <Link tabIndex={props.isShown ? 0 : -1} className="link underline" to="/settings/profile">Profile</Link>
        </li>
        <ul>
          <li>
            <button tabIndex={props.isShown ? 0 : -1} className="link underline" onClick={() => {
              toggleTheme()
            }}>Toggle Theme</button>
          </li>
        </ul>
        <li>
          <Link tabIndex={props.isShown ? 0 : -1} className="link underline" to="/settings/account">Settings</Link>
        </li>
        <li>
          <UserAuthBtn isShown={props.isShown} onBlurEvent={closeMenu} onClickEvent={logOutUser} dataType="primary" text="log out"/>
        </li>
    </ul>
  )
}
