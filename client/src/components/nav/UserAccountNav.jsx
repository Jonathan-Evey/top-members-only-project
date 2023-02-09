import { logout } from "../../lib/utils"
import { UserAuthBtn } from "../buttons/UserAuthBtn"

export const UserAccountNav = (props) => {
  const toggleTheme = () => {
    let rootElemment = document.getElementById("root")

    if (rootElemment.classList.contains("dark-theme")) {
      rootElemment.classList.remove("dark-theme")
    } else {
      rootElemment.classList.add("dark-theme")
    }
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
    <ul>
        <li>
          <a tabIndex={props.isShown ? 0 : -1} className="link underline" href="">Profile</a>
        </li>
        <ul>
          <li>
            <button tabIndex={props.isShown ? 0 : -1} className="link underline" onClick={() => {
              toggleTheme()
            }}>Toggle Theme</button>
          </li>
        </ul>
        <li>
          <a tabIndex={props.isShown ? 0 : -1} className="link underline" href="">Settings</a>
        </li>
        <li>
          <UserAuthBtn isShown={props.isShown} onBlurEvent={closeMenu} onClickEvent={logOutUser} dataType="accent" text="log out"/>
        </li>
    </ul>
  )
}
