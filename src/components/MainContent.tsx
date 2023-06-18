import { useState } from "react"
import DescriptionArea from "./DescriptionArea"

const MainContent = () => {
  const [helpVisible, setHelpVisible] = useState<boolean>(false)

  const toggleHelp = () => {
    setHelpVisible((isVisible) => !isVisible)
  }
  return (
    <main>
      <button onClick={toggleHelp}>{helpVisible ? "Hide" : "Show"} Help</button>
      {helpVisible && <DescriptionArea />}
    </main>
  )
}

export default MainContent
