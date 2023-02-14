import { Button } from "../buttons/Button"
import { LoginUser } from "../form/LoginUser"
import { RegisterUser } from "../form/RegisterUser"

export const UserAuthModal = (props) => {
    const handleEvent = (e) => {
        if (e.target.classList.contains("modal__user-auth")) {
            e.target.close()
        }
    }
    
    const onBlurEvent = () => {
      let modal = document.querySelector(".modal__user-auth") 
      modal.close()
    }
  return (
    <dialog className="modal__user-auth" onClick={(e) => {handleEvent(e)}}>
        <Button btnStyle="xButton"   class="btn__close"/>
        {props.modalForm === "login" ? 
        <LoginUser onBlurEvent={onBlurEvent}/> :
        <RegisterUser onBlurEvent={onBlurEvent} /> }
    </dialog>
  )
}
