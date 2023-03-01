import Router from './Router'
import { SkipNav } from './components/nav/SkipNav'
import { UserProvider } from './components/context/User'
import { SiteHeader } from './components/header/SiteHeader'
import { AuthModalProvider } from './components/context/AuthModal'


const App = () => {
  return (
    <UserProvider>
        <SkipNav />
        <AuthModalProvider>
          <SiteHeader />
          <Router />
        </AuthModalProvider>
    </UserProvider>
  )
}

export default App