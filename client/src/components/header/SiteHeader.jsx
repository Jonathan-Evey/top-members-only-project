import { SiteNav } from "../nav/SiteNav"
import { UserNav } from "../nav/UserNav"

export const SiteHeader = () => {
  return (
    <header className="header__site">
      <div className="header__container | padding-inline-6"> 
        <div className="flex-group">
          <div>AC</div>
          <h1>Accessible<br/> Collective</h1>
        </div>
        <UserNav />
      </div>
      <SiteNav />
    </header>
  )
}
