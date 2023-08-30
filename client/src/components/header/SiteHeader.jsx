import { SiteNav } from "../nav/SiteNav"
import { UserNav } from "../nav/UserNav"

export const SiteHeader = () => {
  return (
    <header className="header__site">
      <div className="header__container | padding-inline-6"> 
        <div className="flex-group | center">
          <div className="logo"><img src="/img/logos/texas-map-4.svg"></img></div>
          <div className="padding-inline-start-2">
            <p className="site-name | ff-logo">Panhandle</p>
            <p className="site-name | ff-logo margin-inline-start-2">Pruning</p>
          </div>
        </div>
        <UserNav />
      </div>
      <SiteNav />
    </header>
  )
}
