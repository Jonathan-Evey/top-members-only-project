import { Link } from "react-router-dom"

export const SiteNav = () => {
  return (
      <nav className="nav__site">
        <ul className="container">
          <li><Link className="link underline" to="/">Home</Link></li>
          <li><Link className="link underline" to="/articles">Articles</Link></li>
          <li><Link className="link underline" to="/about">About</Link></li>
          <li><Link className="link underline" to="/contact">Contact</Link></li>
        </ul>
      </nav>
  )
}
