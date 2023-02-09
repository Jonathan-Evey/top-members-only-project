import Router from './Router'
import { SkipNav } from './components/nav/SkipNav'
import { UserProvider } from './components/context/User'
import { SiteHeader } from './components/header/SiteHeader'


const App = () => {
  return (
    <UserProvider>
        <SkipNav />
        <SiteHeader />
        <Router />
    </UserProvider>
  )
}

export default App