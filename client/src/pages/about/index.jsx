import { useEffect } from "react";

export const AboutPage = (props) => {

  useEffect(() => {
    document.title = props.title || "";
  }, [props.title])
  return (
    <div>About</div>
  )
}
