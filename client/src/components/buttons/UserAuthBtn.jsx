export const UserAuthBtn = (props) => {
  return (
    <button tabIndex={props.isShown === false ? -1 : 0} className="button" data-type={props.dataType} onBlur={props.onBlurEvent ? props.onBlurEvent : null} onClick={() => {props.onClickEvent()}}>{props.text}</button>
  )
}
