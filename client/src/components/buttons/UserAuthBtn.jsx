export const UserAuthBtn = (props) => {
  return (
    <button className="button" datatype="primary" onClick={() => {props.onClickEvent()}}>{props.text}</button>
  )
}
