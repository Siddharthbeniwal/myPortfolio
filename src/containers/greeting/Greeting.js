import React, {useContext} from "react";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import landingPerson from "../../assets/lottie/landingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import {illustration, greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }

  function trackResumeDownload() {
    if (typeof gtag === "function") {
      gtag("event", "resume_download", {
        event_category: "Downloads",
        // event_label: "SiddharthBeniwal_Resume.docx", 
        event_label: "SiddharthBeniwal_Resume.pdf", 
        value: 1
      });
    } else {
      console.warn("Google Analytics is not initialized.");
    }
  }

  function trackContactButtonClick() {
    if (typeof gtag === "function") {
      gtag("event", "contact_click", {
        event_category: "Button Clicks",
        event_label: "Contact Me Button",
        value: 1
      });
    } else {
      console.warn("Google Analytics is not initialized.");
    }
  }

  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {" "}
                {greeting.title}{" "}
                <span className="wave-emoji">{emoji("👋")}</span>
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {/* {greeting.subTitle} */}A passionate Software Developer 🚀
                with 3.5+ years of experience developing efficient, responsive,
                and feature-rich web applications using <strong>HTML5</strong>,{" "}
                <strong>CSS3</strong>, <strong>JavaScript(ES6)</strong>,{" "}
                <strong>ReactJS</strong> and <strong>Redux</strong>.
              </p>
              <div id="resume" className="empty-div"></div>
              {/* <SocialMedia /> */}
              <div className="button-greeting-div">
                <Button
                  text="Contact me"
                  href="#contact"
                  onClick={() => trackContactButtonClick()}
                />
                {greeting.resumeLink && (
                  <a
                    // href={require("./SiddharthBeniwal_Resume.docx")}
                    // download="SiddharthBeniwal_Resume.docx"
                    href={require("./SiddharthBeniwal_Resume.pdf")}
                    download="SiddharthBeniwal_Resume.pdf"
                    className="download-link-button"
                    onClick={() => trackResumeDownload()}
                  >
                    <Button text="Download my resume" />
                  </a>
                )}
              </div>
            </div>
          </div>
          {/* <div className="greeting-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={landingPerson} />
            ) : (
              <img
                alt="man sitting on table"
                src={require("../../assets/images/manOnTable.svg")}
              ></img>
            )}
          </div> */}
        </div>
      </div>
    </Fade>
  );
}
