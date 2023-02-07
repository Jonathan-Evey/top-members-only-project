import { Link } from "react-router-dom"

export const MainNav = () => {
  return (
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/articles">Articles</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
  )
}
