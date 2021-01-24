import CustomNav from "../components/CustomNav";
import TypingAnimation from "../components/TypingAnimation";

import IndexStyles from '../static/styles/Index.module.css'

export default function Home() {
  return (
    <div className={IndexStyles.Home}>
      <div className={IndexStyles.Header}>
        <CustomNav></CustomNav>
        <div className={IndexStyles.Header_Main}>
          <div className={IndexStyles.Main_Flex}>
            <div className={IndexStyles.Flex_Text}>
              <h1>Hi, I'm Matt.</h1>
              <p>I'm a CS student at the Queensland University of Technology. I have a passion for programming and all things tech.</p>
            </div>
            <TypingAnimation className={IndexStyles.Flex_Typewriter}></TypingAnimation>
          </div>
        </div>
      </div>
    </div >
  )
}
