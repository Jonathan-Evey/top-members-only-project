import { UserAuthBtn } from "../../components/buttons/UserAuthBtn"
import { useContext } from "react"
import { AuthModalContext } from "../../components/context/AuthModal"

export const Hero = (props) => {
  const { openRegisterModal, openLoginModal } = useContext(AuthModalContext)


  if (!props.user) {
    return (
      <section className="hero | container section padding-inline-4" data-type="wide">
      <div>
        <h1>Welcome to The Accessible Collective</h1>
        <p>Whether you are a user of assistive tools and technologies, a Developer working towards making your applications more accessible, or just interested in web accessibility. This is a place to share and learn with others about accessibility on the web.</p>
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
