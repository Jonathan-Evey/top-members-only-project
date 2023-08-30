import { useEffect } from "react";
import { Main } from "./Main";

export const AboutPage = (props) => {

  useEffect(() => {
    document.title = props.title || "";
  }, [props.title])
  return (
    <>
      <Main />
    </>
  )
}
