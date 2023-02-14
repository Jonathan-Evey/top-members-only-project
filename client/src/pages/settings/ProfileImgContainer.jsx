import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../components/context/User"
import { ProfileImg } from "./ProfileImg"
import axios from "axios"

export const ProfileImgContainer = () => {
  const { user, setUser } = useContext(UserContext)
  const [selectedImg, setSelectedImg] = useState(null)
    const profileArray = new Array(12).fill(0)

    const selectImg = (value) => {
      setSelectedImg(value)
      let checkboxes = document.querySelectorAll(".image-checkbox")
      checkboxes.forEach((box) => {
        if (box.id === `img-${value}`) {
          box.checked = true 
        } else {
          box.checked = false
        }
      })
    }
    const updateUserProfileImg = () => {
      const data = {
        id: user.id,
        profileImg: selectedImg,
      }
      axios({
        url: "http://localhost:5000/api/users/profile-img",
        method: "POST",
        data: data,
      }).then(function (response) {
        if (response.status === 200) {
          let updatedUser = {...user, profileImg: selectedImg}
          setUser(updatedUser)
        }
        return 
      })
      .catch(function (error) {
        console.log(error);
      });
    }

    if (user === null) {
      return <div>Please log into your account to update your settings</div>
    }
    return (
      <section className="container">
          <h2 className="title | fw-bold">Profile Image</h2>
          <div className="section__profile-img-container">
              {profileArray.map((each, index)=> {
               
                  return <ProfileImg selectedImg={selectedImg} setSelectedImg={setSelectedImg} user={user} onClickEvent={selectImg} key={index + 1} imgNumber={index + 1} />
                
              })}
          </div>
          <div className="flex-end">
            <button className="button btn__profile-img-option" data-type="primary" onClick={() => {updateUserProfileImg()}}>Save</button>
          </div>
          
      </section>
    )
}
