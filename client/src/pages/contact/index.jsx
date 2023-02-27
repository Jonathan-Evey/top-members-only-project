import { useEffect } from "react";

export const ContactPage = (props) => {

  useEffect(() => {
    document.title = props.title || "";
  }, [props.title])
  return (
    <div>Contact</div>
  )
}
