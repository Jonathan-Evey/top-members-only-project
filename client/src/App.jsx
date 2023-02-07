import Router from './Router'
import { MainNav } from "./components/nav/MainNav"
import { SkipNav } from './components/nav/SkipNav'
import { UserProvider } from './components/context/User'
import { UserNav } from './components/nav/UserNav'

const App = () => {
  return (
    <UserProvider>
        <SkipNav />
        <UserNav />
        <MainNav />
        <Router />
    </UserProvider>
  )
}

export default App