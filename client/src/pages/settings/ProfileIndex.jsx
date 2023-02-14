import { ProfileImgContainer } from "./ProfileImgContainer"

export const Profile = () => {
  return (
    <main className="main__profile">
      <header className="container padding-block-6" data-type="wide">
        <h1 className="ff-accent fs-700 fw-bold">Profile Settings</h1>
      </header>
      
      
      <ProfileImgContainer />

    </main>
  )
}
