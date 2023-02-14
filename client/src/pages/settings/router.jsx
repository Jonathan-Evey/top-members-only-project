import { Routes, Route } from "react-router-dom"
import { Account } from "./AccountIndex"
import { Profile } from "./ProfileIndex"
import { ErrorPage } from '../error/index'

export const SettingRoutes = () => {
  return (
    <Routes>
        <Route path='/profile' element={<Profile />} />
        <Route path='/account' element={<Account />}/>
        <Route path='/*' element={<ErrorPage />} />
    </Routes> 
  )
}