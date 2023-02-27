export const Button = (props) => {

    if (props.btnStyle === "xButton") {
        return (
            <button className={props.class} onClick={() => {props.clickEvent()}}>
                <span></span>
                <span></span>
            </button>
        )
    }

  return (
    <button className={props.class}>Button</button>
  )
}
