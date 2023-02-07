import { useState } from "react"
import { useParams } from "react-router-dom"
import {ErrorPage} from "../error/index"

export const Article = () => {
    const { id } = useParams()
    const [articleTitle, setArticleTitle] = useState("title-1")

    if (id !== articleTitle) {
      return (
        <ErrorPage />
      )
    }
  return (
    <div>Article {id}</div>
  )
}
