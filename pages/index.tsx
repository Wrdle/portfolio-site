import Head from "next/head";
import React, { FC } from "react";
import Image from "next/image";
import SvgDivider from "@components/SvgDivider";
import { AiFillGithub } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import SocialLinkIcon from "@components/SocialLinkIcon";
import TypingAnimation from "@components/TypingAnimation";
import { Navbar } from "@components/Navbar";

const Home: FC = () => {
  return (
      <div>
        <div>
          <div className="-z-10 bg-[#10101a] block w-full h-screen absolute">
            <div className="bg-[url('/static/mmmotif.svg')] bg-cover w-full h-screen opacity-5"></div>
          </div>
          <HtmlHead />
          <div className="h-screen w-full block font-white font-montserrat">
            <Navbar />
            <div className="relative top-[45%] translate-y-[-55%]">
              <div className="flex items-center flex-wrap justify-evenly w-[80%] mx-auto gap-y-10">
                <div className="xl:basis-[45%] text-center xl:text-left">
                  <h1 className="text-7xl font-bold pb-2">Hi, I'm Matt.</h1>
                  <p className="font-light text-xl opacity-85">
                    I'm Matt D'Agostino, a Software Engineer currently working at
                    Suncorp Bank (ANZ Bank). I have a passion for engineering
                    solutions to problems using best practices and the latest
                    technology.
                  </p>
                </div>
                <TypingAnimation />
              </div>
            </div>
          </div>
        </div>
        <AboutMe />
        <Footer />
      </div>
  );
};

const AboutMe: FC = () => {
  return (
      <div className="bg-white relative">
        <SvgDivider />
        <div
            id="about-me"
            className="sm:container sm:mx-auto flex flex-wrap text-[#10101a] font-montserrat pt-6 pb-16 px-3 gap-y-10"
        >
          <div className="basis-full lg:basis-1/2">
            <h1 className="font-bold text-6xl py-2">About me.</h1>
            <p>
              Hi there, I'm Matt, and I'm a software engineer at Suncorp Bank. I
              work with Kafka, Kotlin, SpringBoot and React to make the bank's
              daily operations run smoothly through eventing pipelines.
              <br />
              <br />
              I have a genuine enthusiasm for Software Engineering, and I'm always
              on the lookout for new technologies to get my hands dirty with. When
              I'm not glued to my laptop screen, you can usually find me at the
              gym or spending time with my partner.
              <br />
              <br />
              I believe that passion is the key to success, and I'm passionate
              about my work. I love nothing more than diving into a complex
              problem and coming up with a solution.
            </p>
          </div>
          <div className="basis-full lg:basis-1/2 relative min-h-[250px]">
            <Image
                priority
                src="/static/programming-orange.svg"
                fill
                alt="Programming picture"
                style={{
                  maxWidth: "100%",
                }}
            />
          </div>
        </div>
      </div>
  );
};

const Footer: FC = () => {
  return (
      <div className="bg-[#10101a] text-center py-14">
        <p className="text-[#A8A8A8] text-l">Get in touch</p>
        <h1 className="text-6xl font-bold py-2">Lets Chat.</h1>
        <div className="pt-2">
          <SocialLinkIcon href="https://github.com/Wrdle">
            <AiFillGithub />
          </SocialLinkIcon>
          <SocialLinkIcon href="https://www.linkedin.com/in/matt-dagostino/">
            <IoLogoLinkedin />
          </SocialLinkIcon>
          <SocialLinkIcon href="mailto:mdagostino175@gmail.com">
            <IoMail />
          </SocialLinkIcon>
        </div>
      </div>
  );
};

const HtmlHead: FC = () => {
  return (
      <Head>
        <title>Matt D'Agostino</title>
        <meta
            property="og:title"
            content="Matt D'Agostino Portfolio Website"
            key="title"
        />
        <meta
            property="og:description"
            content="Hi! I'm Matt D'Agostino and this is my portfolio website."
            key="description"
        />
      </Head>
  );
};

export default Home;
