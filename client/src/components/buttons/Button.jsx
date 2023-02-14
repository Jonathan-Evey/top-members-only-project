export const Button = (props) => {

    if (props.btnStyle === "xButton") {
        return (
            <button className={props.class}>
                <span>hello</span><span>hello</span>
            </button>
        )
    }

  return (
    <button className={props.class}>Button</button>
  )
}
