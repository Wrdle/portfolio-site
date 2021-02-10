import Head from 'next/head'

import CustomNav from "../components/CustomNav";
import TypingAnimation from "../components/TypingAnimation";
import IndexStyles from '../static/styles/Index.module.css'

export default function Home() {
  return (
    <div className={IndexStyles.Home}>
      <Head>
        <title>Matthew D'Agostino Portfolio</title>
        <meta property="og:title" content="Matthew D'Agostino Portfolio Website" key="title" />
        <meta property="og:description" content="Hi I'm Matt D'Agostino and this is my portfolio website." key="description"/>
      </Head>
      <div className={IndexStyles.Header}>
        <CustomNav></CustomNav>
        <div className={IndexStyles.Header_Main}>
          <div className={IndexStyles.Main_Flex}>
            <div className={IndexStyles.Flex_Text}>
              <h1>Hi, I'm Matt.</h1>
              <p>I'm Matthew D'Agostino, a CS student at the Queensland University of Technology. I have a passion for programming and all things tech.</p>
            </div>
            <TypingAnimation className={IndexStyles.Flex_Typewriter}></TypingAnimation>
          </div>
        </div>
      </div>
    </div >
  )
}
