import { useEffect } from "react"

export const ArticlesPage = (props) => {

  useEffect(() => {
    document.title = props.title || "";
  }, [props.title])
  
  return (
    <div>ArticlesPage</div>
  )
}
