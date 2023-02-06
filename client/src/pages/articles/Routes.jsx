import { Routes, Route } from "react-router-dom"
import { Article } from "./Article"
import { ArticlesPage } from "./index"

export const ArticleRoutes = () => {
  return (
    <Routes>
        <Route index element={<ArticlesPage />} />
        <Route path='/:id' element={<Article />}/>
    </Routes>
  )
}