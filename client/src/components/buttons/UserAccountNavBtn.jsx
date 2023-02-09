export const UserAccountNavBtn = (props) => {
  return (
    <button className="button__user-account" aria-expanded={props.isAccountNavOpen} onClick={() => {
        props.setIsAccountNavOpen(!props.isAccountNavOpen)
    }}>
        <div>

        </div>
        <span>^</span>
        <p className="screen-reader-only">Account Menu</p>

    </button>
  )
}
