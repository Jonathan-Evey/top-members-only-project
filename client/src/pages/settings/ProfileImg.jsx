import { useEffect, useState } from "react"

export const ProfileImg = (props) => {
    
    useEffect(() => {
        if (props.user.profileImg === props.imgNumber) {
            let checkbox = document.getElementById(`img-${props.imgNumber}`)
            checkbox.checked = true
            props.setSelectedImg(props.imgNumber)
        }
    }, [])
  return (
    <div className={`card__profile-img-option`}>
        <button className={`${props.selectedImg === props.imgNumber ? "selected" : ""}`} onClick={() => {props.onClickEvent(props.imgNumber) }}>
        <div>
            <input className="image-checkbox" type="checkbox" name={`img-${props.imgNumber}`} id={`img-${props.imgNumber}`} tabIndex="-1"/>
            <span className="check"></span>
            <span className="check"></span>
        </div>
        <div className={`img__profile-option | user-img-${props.imgNumber}`}>

        </div>

        </button>
    </div>
  )
}
