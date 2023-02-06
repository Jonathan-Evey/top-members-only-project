import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/home/index'
import { AboutPage } from './pages/about/index'
import { ContactPage } from './pages/contact/index'
import { ArticleRoutes } from './pages/articles/Routes'
import { ErrorPage } from './pages/error/index'
import { MainNav } from "./components/nav/MainNav"

const Router = () => {
  return (
    <>
        <MainNav />
        <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='/about' element={<AboutPage />}/>
            <Route path='/contact' element={<ContactPage />}/>
            <Route path='/articles/*' element={<ArticleRoutes />}/>
            <Route path='*' element={<ErrorPage />}/>
        </Routes>
    </>
  )
}

export default Router