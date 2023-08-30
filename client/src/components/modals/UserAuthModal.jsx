import { Button } from "../buttons/Button"
import { LoginUser } from "../form/LoginUser"
import { RegisterUser } from "../form/RegisterUser"
import { AuthModalContext } from "../context/AuthModal"
import { useContext } from "react"


export const UserAuthModal = (props) => {
  const { modalForm, setModalForm } = useContext(AuthModalContext)

    const handleEvent = (e) => {
        if (e.target.classList.contains("modal__user-auth")) {
            e.target.close()
        }
    }

    const closeModal = () => {
      let modal = document.querySelector(".modal__user-auth") 
      modal.close()
    }
    
  return (
    <dialog className="modal__user-auth"  onMouseDown={(e) => {handleEvent(e)}}>
        <div>
          <Button btnStyle="xButton" class="btn__close" clickEvent={closeModal}/>
          <h2>{modalForm === "login" ? "Login" : "Create an Account" }</h2>
          {modalForm === "login" ? 
          <LoginUser /> :
          <RegisterUser /> }
        </div>
    </dialog>
  )
}
