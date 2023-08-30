import { UserAuthBtn } from "../../components/buttons/UserAuthBtn"
import { useContext } from "react"
import { AuthModalContext } from "../../components/context/AuthModal"

export const Hero = (props) => {
  const { openRegisterModal, openLoginModal } = useContext(AuthModalContext)


  if (!props.user) {
    return (
      <section className="hero | container section padding-inline-4" data-type="wide">
      <div>
        <h1>Welcome to Panhandle Pruning!</h1>
        <p> A site documenting my journey in planning, planting and maintaining my backyard garden in the Texas panhandle.</p>
        <p className="padding-block-start-4">If you would like to be involved in the journey please feel free to create an account and join in on the conversations!</p>
      </div>
      <div className="flex">
        <UserAuthBtn onClickEvent={openRegisterModal} dataType="accent" text="Sign Up"/>
        <UserAuthBtn onClickEvent={openLoginModal} dataType="light" text="Login"/>
      </div>
    </section>
    )
  }

  return (
    <section className="hero | container section padding-inline-4" data-type="wide">
    <div>
      <h1>Welcome Back, {props.user.userName}!</h1>

    </div>
    <div>

    </div>
  </section>
  )
}
