import { useParams } from "react-router-dom"

export const Article = () => {
    const { id } = useParams()
  return (
    <div>Article {id}</div>
  )
}
