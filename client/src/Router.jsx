import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/home/index'
import { AboutPage } from './pages/about/index'
import { ContactPage } from './pages/contact/index'
import { ArticleRoutes } from './pages/articles/router'
import { SettingRoutes } from './pages/settings/router'
import { ErrorPage } from './pages/error/index'

const Router = () => {
  return (
        <Routes>
            <Route path='/' element={<HomePage title={"The Accessible Collective"}/>} />
            <Route path='/about' element={<AboutPage title={"Who we are | The Accessible Collective"}/>} />
            <Route path='/contact' element={<ContactPage title={"Contact | The Accessible Collective"}/>} />
            <Route path='/articles/*' element={<ArticleRoutes />} />
            <Route path='/settings/*' element={<SettingRoutes />} />
            <Route path='*' element={<ErrorPage />} />
        </Routes>
  )
}

export default Router